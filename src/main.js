// Global site interaction script
import { portfolioEngagements, sectorDefinitions } from './portfolio.js';

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });
  }

  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }

  // Active link highlighter
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath.endsWith(href) && href !== '/')) {
      link.classList.add('border-b-2', 'border-black', 'font-semibold');
    }
  });

  // Client-side contact form handler (graceful fallback / preview)
  const contactForms = document.querySelectorAll('form[data-contact-form]');
  contactForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      const accessKey = form.querySelector('input[name="access_key"]');
      if (!accessKey || accessKey.value === 'YOUR_ACCESS_KEY_HERE') {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerText = 'Sending...';

        setTimeout(() => {
          submitBtn.innerText = '✓ Message Sent!';
          submitBtn.classList.remove('bg-black', 'hover:bg-neutral-800');
          submitBtn.classList.add('bg-emerald-700', 'text-white');
          form.reset();
          const note = document.createElement('p');
          note.className = 'text-sm text-emerald-700 mt-3 text-center font-medium animate-fade-in';
          note.innerText = 'Thank you! Your message has been received. Osman will contact you shortly.';
          form.appendChild(note);
        }, 600);
      }
    });
  });

  // Newsletter form handler
  const newsletterForms = document.querySelectorAll('form[data-newsletter-form]');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.innerText = 'Subscribed!';
      btn.classList.add('bg-neutral-800');
      form.reset();
    });
  });

  // Initialize Interactive Portfolio Explorer
  initPortfolioExplorer();
});

function initPortfolioExplorer() {
  const container = document.getElementById('portfolio-explorer');
  if (!container) return;

  let activeSector = 'all';
  let searchQuery = '';
  let groupBySector = false;

  const filterTabsContainer = document.getElementById('portfolio-filters');
  const searchInput = document.getElementById('portfolio-search');
  const groupToggleBtn = document.getElementById('portfolio-group-toggle');
  const resultsContainer = document.getElementById('portfolio-grid');
  const countBadge = document.getElementById('portfolio-total-count');

  // Render Sector Tabs
  function renderTabs() {
    if (!filterTabsContainer) return;
    filterTabsContainer.innerHTML = '';

    sectorDefinitions.forEach(sec => {
      const count = sec.id === 'all' 
        ? portfolioEngagements.length 
        : portfolioEngagements.filter(e => e.sector === sec.id).length;

      const btn = document.createElement('button');
      btn.type = 'button';
      const isActive = activeSector === sec.id;
      
      btn.className = `px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 flex items-center space-x-1.5 ${
        isActive 
          ? 'bg-black text-white shadow-sm' 
          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
      }`;

      btn.innerHTML = `<span>${sec.name}</span><span class="text-[10px] opacity-75">(${count})</span>`;
      
      btn.addEventListener('click', () => {
        activeSector = sec.id;
        renderTabs();
        renderResults();
      });

      filterTabsContainer.appendChild(btn);
    });
  }

  // Create single company card HTML
  function createCardHTML(item) {
    const systemsBadges = item.systems.map(sys => 
      `<span class="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-neutral-100 text-neutral-800 border border-neutral-200">${sys}</span>`
    ).join(' ');

    return `
      <div class="bg-white p-5 rounded-sm border border-neutral-200/80 shadow-xs hover:border-black/40 hover:shadow-sm transition-all duration-200 flex flex-col justify-between space-y-3">
        <div class="space-y-2">
          <div class="flex items-start justify-between gap-2">
            <h4 class="font-serif text-lg font-bold text-neutral-900 leading-snug">${item.name}</h4>
            <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-neutral-100 text-neutral-600 flex-shrink-0">
              ${item.sectorLabel}
            </span>
          </div>
          <div class="flex flex-wrap items-center justify-between gap-y-1 text-xs text-neutral-500 pt-0.5">
            <span class="font-medium text-neutral-800">${item.role}</span>
            <span class="font-mono text-[11px] text-neutral-500 bg-neutral-50 px-2 py-0.5 rounded border border-neutral-200/60 flex-shrink-0">${item.period}</span>
          </div>
          <p class="text-xs text-neutral-600 leading-relaxed font-light pt-1">${item.highlight}</p>
        </div>
        <div class="pt-2 border-t border-neutral-100">
          <p class="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">Systems & Tools</p>
          <div class="flex flex-wrap gap-1.5">
            ${systemsBadges}
          </div>
        </div>
      </div>
    `;
  }

  // Filter engagements based on activeSector & searchQuery
  function getFilteredEngagements() {
    return portfolioEngagements.filter(item => {
      const matchesSector = activeSector === 'all' || item.sector === activeSector;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesSector;

      const matchesSearch = 
        item.name.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q) ||
        item.highlight.toLowerCase().includes(q) ||
        item.sectorLabel.toLowerCase().includes(q) ||
        item.systems.some(s => s.toLowerCase().includes(q));

      return matchesSector && matchesSearch;
    });
  }

  // Render cards (either flat grid or grouped by sector)
  function renderResults() {
    if (!resultsContainer) return;
    const filtered = getFilteredEngagements();

    if (countBadge) {
      countBadge.innerText = `${filtered.length} Engagements`;
    }

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `
        <div class="col-span-full py-16 text-center text-neutral-500">
          <p class="text-sm font-medium">No engagements found matching "${searchQuery}".</p>
          <button type="button" id="clear-search-btn" class="mt-2 text-xs text-black underline">Clear filter</button>
        </div>
      `;
      const clearBtn = document.getElementById('clear-search-btn');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          activeSector = 'all';
          renderTabs();
          renderResults();
        });
      }
      return;
    }

    if (groupBySector && activeSector === 'all') {
      // Group by distinct sectors
      resultsContainer.className = "space-y-10";
      const validSectors = sectorDefinitions.filter(s => s.id !== 'all');
      
      let html = '';
      validSectors.forEach(sec => {
        const sectorItems = filtered.filter(item => item.sector === sec.id);
        if (sectorItems.length === 0) return;

        html += `
          <div class="space-y-4">
            <div class="flex items-center space-x-3 border-b border-neutral-200 pb-2">
              <h3 class="font-serif text-lg font-bold text-neutral-900">${sec.name}</h3>
              <span class="text-xs text-neutral-500 font-mono">(${sectorItems.length})</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              ${sectorItems.map(createCardHTML).join('')}
            </div>
          </div>
        `;
      });
      resultsContainer.innerHTML = html;
    } else {
      // Flat grid view
      resultsContainer.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5";
      resultsContainer.innerHTML = filtered.map(createCardHTML).join('');
    }
  }

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderResults();
    });
  }

  // Group by sector toggle button
  if (groupToggleBtn) {
    groupToggleBtn.addEventListener('click', () => {
      groupBySector = !groupBySector;
      groupToggleBtn.classList.toggle('bg-black', groupBySector);
      groupToggleBtn.classList.toggle('text-white', groupBySector);
      groupToggleBtn.classList.toggle('bg-neutral-100', !groupBySector);
      groupToggleBtn.classList.toggle('text-neutral-700', !groupBySector);
      renderResults();
    });
  }

  // Initial render
  renderTabs();
  renderResults();
}
