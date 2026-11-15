// Complete 30+ Client & Employer Roster from Osman Ghantiwala's Resume
const COMPANIES = [
  // REAL ESTATE – ASSET / PROPERTY MANAGEMENT, DEVELOPMENT & CONSTRUCTION (12)
  {
    name: 'Starlight Investments',
    sector: 'real-estate',
    sectorLabel: 'Real Estate & Asset Mgmt',
    role: 'Director / Controller / VP Finance Mandate',
    dates: 'Jan. 2020 – Sep. 2026',
    systems: ['NetSuite', 'MS Dynamics GP', 'Yardi Voyager']
  },
  {
    name: 'YAD Investments',
    sector: 'real-estate',
    sectorLabel: 'Real Estate Investment',
    role: 'Director / Controller / VP Finance Mandate',
    dates: 'Jan. 2020 – Sep. 2026',
    systems: ['NetSuite', 'MS Dynamics GP', 'Yardi']
  },
  {
    name: 'Queen St. Group',
    sector: 'real-estate',
    sectorLabel: 'Real Estate Development',
    role: 'Finance Manager / Controller / VP Finance',
    dates: 'Jan. 2020 – Sep. 2026',
    systems: ['Yardi', 'NetSuite', 'MS Dynamics GP']
  },
  {
    name: 'Birchstone Development',
    sector: 'real-estate',
    sectorLabel: 'Construction & Development',
    role: 'Director / Finance Manager / Controller',
    dates: 'Jan. 2020 – Sep. 2026',
    systems: ['NetSuite', 'MS Dynamics GP', 'Yardi']
  },
  {
    name: 'Cintrex Property Management',
    sector: 'real-estate',
    sectorLabel: 'Property Management',
    role: 'Accountant / Controller / Finance Manager',
    dates: 'Jan. 2020 – Sep. 2026',
    systems: ['Yardi Voyager', 'MS Dynamics GP', 'NetSuite']
  },
  {
    name: 'Strathallen Capital',
    sector: 'real-estate',
    sectorLabel: 'Real Estate Private Equity',
    role: 'Finance Consultant',
    dates: 'Dec. 2018 – Feb. 2019',
    systems: ['MRI Real Estate', 'Sage 300']
  },
  {
    name: 'WTF Group',
    sector: 'real-estate',
    sectorLabel: 'Real Estate & Property',
    role: 'Interim Controller',
    dates: 'Sep. 2017 – Feb. 2018',
    systems: ['Yardi Voyager', 'Consolidated Reporting']
  },
  {
    name: 'Minto – Urban Developments Inc.',
    sector: 'real-estate',
    sectorLabel: 'Urban Development & Construction',
    role: 'Senior Financial Analyst',
    dates: 'Jan. – Apr. 2011',
    systems: ['Newstar', 'MS Great Plains']
  },
  {
    name: 'El-Ad Group (Canada) Inc.',
    sector: 'real-estate',
    sectorLabel: 'Mega Real Estate Development',
    role: 'Senior Financial Analyst',
    dates: 'Sept. – Dec. 2010',
    systems: ['Yardi', 'Hyperion']
  },
  {
    name: 'Giffels Management Ltd. (IG Realty Advisors)',
    sector: 'real-estate',
    sectorLabel: 'Realty Advisors & Engineering',
    role: 'Senior Financial / Realty Mandate',
    dates: 'July 2005 – Oct. 2006',
    systems: ['Sage 50', 'Yardi', 'Hyperion']
  },
  {
    name: 'O&Y Enterprise LP (Arcturus Realty)',
    sector: 'real-estate',
    sectorLabel: 'Commercial Real Estate',
    role: 'Corporate Finance & Property Accounting',
    dates: 'Feb. 2004 – Jun. 2005',
    systems: ['JD Edwards', 'Yardi']
  },
  {
    name: 'Royal LePage Relocation Services Ltd.',
    sector: 'real-estate',
    sectorLabel: 'Real Estate & Relocation',
    role: 'Corporate Finance Specialist',
    dates: 'Nov. 2001 – Dec. 2002',
    systems: ['Solomon', 'Fred', 'MS Great Plains']
  },

  // TECHNOLOGY / SOFTWARE (4)
  {
    name: 'ESRI Canada',
    sector: 'tech',
    sectorLabel: 'GIS Technology & Software',
    role: 'Finance Consultant (SAP to Kimble ERP Lead)',
    dates: 'Sept. – Dec. 2019',
    systems: ['SAP BPC', 'Kimble ERP', 'Hyperion']
  },
  {
    name: 'Procom Services',
    sector: 'tech',
    sectorLabel: 'IT Staffing & Enterprise Tech',
    role: 'Sr. Financial / Business Analyst, Implementation Leader',
    dates: 'Aug. 2016 – Jan. 2017',
    systems: ['Phoenix ERP', 'Bamboo HRIS', 'ADP']
  },
  {
    name: 'Healthtech Consultants',
    sector: 'tech',
    sectorLabel: 'Healthcare IT Consulting',
    role: 'Sr. Financial / Business Analyst',
    dates: 'Mar. – Oct. 2015',
    systems: ['MIS', 'MS Great Plains']
  },
  {
    name: 'SO Canada',
    sector: 'tech',
    sectorLabel: 'Technology & Operations',
    role: 'Corporate Controller',
    dates: 'Jan. 2009 – Sept. 2010',
    systems: ['MS Great Plains', 'Management Reporter', 'MS FRx']
  },

  // UTILITY & ENERGY (3)
  {
    name: 'Environmental 360 Solutions Ltd.',
    sector: 'utility',
    sectorLabel: 'Environmental & Utility Services',
    role: 'Corporate Finance & ERP Specialist',
    dates: 'Jan. – Apr. 2025',
    systems: ['Sage 300', 'MS Dynamics GP']
  },
  {
    name: 'Inergi LP (Capgemini / Hydro One)',
    sector: 'utility',
    sectorLabel: 'Provincial Power Utility',
    role: 'Sr. Financial Analyst (Contracted to Hydro One)',
    dates: 'Jan. – Dec. 2008',
    systems: ['SAP BPC & ECC 6.0', 'Cognos', 'PeopleSoft']
  },
  {
    name: 'enXco',
    sector: 'utility',
    sectorLabel: 'Renewable Energy Projects',
    role: 'Project Finance & ERP Specialist',
    dates: 'Aug. – Dec. 2007',
    systems: ['SAP BPC', 'Hyperion']
  },

  // MANUFACTURING (6)
  {
    name: 'Aspen Canada',
    sector: 'manufacturing',
    sectorLabel: 'Pharmaceutical Manufacturing',
    role: 'Finance Consultant',
    dates: 'Oct. – Dec. 2018',
    systems: ['SAP BPC', 'Hyperion MIS']
  },
  {
    name: 'Eska (Beverage)',
    sector: 'manufacturing',
    sectorLabel: 'Beverage Manufacturing',
    role: 'Sr. Financial Analyst',
    dates: 'Mar. – July 2017',
    systems: ['SAP BPC', 'Oracle Financials']
  },
  {
    name: 'Honda Canada Inc.',
    sector: 'manufacturing',
    sectorLabel: 'Automotive Manufacturing',
    role: 'Accounting Specialist',
    dates: 'Sept. – Nov. 2014',
    systems: ['SAP BPC', 'Hyperion', 'PeopleSoft']
  },
  {
    name: 'Alcoa – Kawneer',
    sector: 'manufacturing',
    sectorLabel: 'Architectural Metals & Industrial',
    role: 'Finance Consultant',
    dates: 'Jan. – Mar. 2007',
    systems: ['SAP BPC', 'Hyperion']
  },
  {
    name: 'DEPACO',
    sector: 'manufacturing',
    sectorLabel: 'Industrial Manufacturing',
    role: 'Vice President of Finance (VP Finance)',
    dates: 'Jan. 1993 – Jan. 2001',
    systems: ['Sage', 'AccPac']
  },
  {
    name: 'GNTC',
    sector: 'manufacturing',
    sectorLabel: 'Manufacturing & Distribution',
    role: 'Finance Manager / Controller',
    dates: 'Jan. 1990 – 1993',
    systems: ['Sage', 'QuickBooks']
  },

  // NON-PROFIT & HEALTHCARE (4)
  {
    name: 'Bridgepoint Hospital (Charitable Foundations)',
    sector: 'healthcare',
    sectorLabel: 'Hospital & Healthcare Foundation',
    role: 'Sr. Financial Analyst',
    dates: 'Oct. 2013 – Jun. 2014',
    systems: ['Meditech', 'MS Dynamics GP']
  },
  {
    name: "Canadian Anesthesiologists' Society",
    sector: 'healthcare',
    sectorLabel: 'National Medical Association',
    role: 'Controller',
    dates: 'Jan. – Sept. 2013',
    systems: ['MS Great Plains', 'MIS']
  },
  {
    name: 'Local Health Integration Network (LHIN) Toronto',
    sector: 'healthcare',
    sectorLabel: 'Ontario Crown Healthcare Authority',
    role: 'Sr. Financial Analyst',
    dates: 'Sep. 2011 – Mar. 2012',
    systems: ['MS Great Plains', 'MIS', 'OHRS Ministry Standards']
  },
  {
    name: 'Numeris (Media)',
    sector: 'healthcare',
    sectorLabel: 'Non-Profit Broadcast Measurement',
    role: 'Finance Manager',
    dates: 'Mar. – Aug. 2007',
    systems: ['MS Great Plains', 'Mgmt Reporter', 'MS FRx']
  },

  // FINANCIAL SERVICES & EDUCATION (4)
  {
    name: 'Capital One Bank Canada',
    sector: 'finance-edu',
    sectorLabel: 'Tier-1 Banking & Financial Services',
    role: 'Finance Consultant, Special Projects',
    dates: 'Mar. – Jun. 2019',
    systems: ['Enterprise ERP', 'Beeline', 'Planview']
  },
  {
    name: 'Element Financial',
    sector: 'finance-edu',
    sectorLabel: 'Commercial Fleet & Equipment Finance',
    role: 'Finance Consultant',
    dates: 'July – Dec. 2012',
    systems: ['MS Great Plains', 'Management Reporter']
  },
  {
    name: 'Resolve Corp. (BDP)',
    sector: 'finance-edu',
    sectorLabel: 'Financial BPO & Payment Solutions',
    role: 'Sr. Financial Analyst',
    dates: 'Jan. – Dec. 2003',
    systems: ['ERP', 'MS Access', 'Visio']
  },
  {
    name: 'Seneca College',
    sector: 'finance-edu',
    sectorLabel: 'Higher Education (IT Department)',
    role: 'Interim Finance Manager, IT Department',
    dates: 'May – July 2016',
    systems: ['PeopleSoft', 'Hyperion']
  }
];

// Detailed Sector Execution Data from Resume Pages 3-5
const SECTOR_DATA = {
  re: {
    title: 'Real Estate — Asset / Property Management, Development & Construction',
    mandateTag: 'Real Estate & Mega Construction Advisory',
    kpis: [
      { val: '165 Entities', label: 'Yardi, Payroll & Ops Software Implemented' },
      { val: '40–60% Fewer', label: 'Post-Closing Errors via Property Manager Training' },
      { val: '500+ Monthly', label: 'High-Volume Payables & Receivables Reconciled' }
    ],
    bullets: [
      'Spearheaded due diligence on multi-billion-dollar IPOs and joint ventures, identifying key risk factors and forecasting investment viability.',
      'Implemented Yardi, Payroll and Operations software across 165 revenue-generating entities (commercial, retail, and residential properties) and served as Yardi Voyager System Administrator.',
      'Prepared construction draws, analyzed projections and budgets, and liaised with external cost consultants (Altus Group) to arrange construction financing and government subsidies.',
      'Set up recovery schedules, pre-billing, lease audits, CAM / tax recoveries (actual vs. budget), and prepared year-end IAS 16 reconciliations.',
      'Orchestrated interim and year-end external audit engagements for all companies, along with CRA field audits and GST / HST audits.',
      'Fully responsible for accounting of all acquisitions, mergers, discontinued operations, and company dissolutions in coordination with legal, professional, and government bodies.',
      'Provided hands-on accounting support to property managers and site offices in evaluating financial reports, reducing adjustments and post-closing errors by 40–60%.',
      'Conducted quantitative analysis to forecast revenue, identify future trends, and assess risk associated with CAPEX, acquisitions, and joint-venture projects.'
    ]
  },
  tech: {
    title: 'Technology, Software & Enterprise ERP Implementations',
    mandateTag: 'ERP Implementation, Migration & UAT Rescue',
    kpis: [
      { val: 'SAP → Kimble', label: 'Full ERP Migration & Costing Reconciliation' },
      { val: 'Phoenix ERP', label: 'In-House ERP Implementation Project Leader' },
      { val: 'SQL & ETL', label: 'Reporting Cubes, Schema & Legacy DB Validation' }
    ],
    bullets: [
      'Completed the SAP BPC to Kimble ERP implementation project at ESRI Canada through rigorous planning, conflict resolution, and MS Excel/Access migration reconciliation.',
      'Led the in-house ERP software (Phoenix) implementation project and coordinated MS Dynamics GP system conversions with custom SQL tables inside reporting cubes.',
      'Developed comprehensive Quality Assurance (QA) plans, test cases, and scripts; worked with finance teams on parallel data validations during live UAT.',
      'Analyzed legacy databases (schema, dependencies, data fields, and relationships), verified ETL scripts, and troubleshot post-implementation issues.',
      'Created online lesson plans, interactive e-learning tools, and user guides to accelerate organization-wide ERP adoption.',
      'Handled global government reporting requirements, forensic / liquidation matters with regulatory bodies, transfer pricing, and revision of internal controls.'
    ]
  },
  utility: {
    title: 'Utility, Power Infrastructure & Renewable Energy',
    mandateTag: 'Utility FP&A, SAP ECC 6.0 & Regulatory Compliance',
    kpis: [
      { val: '+25% Accuracy', label: 'Surge in Financial Data & Forecast Tracking' },
      { val: 'Hydro One', label: 'Executive Presentations & Project Costing' },
      { val: 'IFRS 15 / IAS', label: 'Regulatory Assets (IAS 8, 16, 18, 21, 37, 39)' }
    ],
    bullets: [
      'Established new forecast tracking initiatives and a management reporting system that improved availability and accuracy of financial data by 25%.',
      'Completed data mappings and conversions for the SAP ECC 6.0 implementation and performed GAAP analysis to realign business processes to SAP interfaces.',
      'Streamlined monthly reporting, conducted in-depth analysis on project costing reports, and prepared executive presentations for Hydro One.',
      'Researched and documented technical accounting differences under IFRS 15 and GAAP for regulatory assets (IAS 8, 16, 18, 21, 37, and 39).',
      'Led change management, business transformation processes, and Six Sigma performance improvement methodologies across utility operations.'
    ]
  },
  mfg: {
    title: 'Global Manufacturing (Automotive, Pharmaceutical, Industrial & Beverage)',
    mandateTag: 'Manufacturing Costing, Plant Launch & Global Consolidation',
    kpis: [
      { val: '4 Regions', label: 'Canada, US, Europe & Asia Consolidations' },
      { val: '3-Year Plan', label: 'Feasibility & Forecast Model for New Assembly Plant' },
      { val: 'IFRS 5–16', label: 'Full-Cycle Multi-BU & Multi-Currency Reporting' }
    ],
    bullets: [
      'Handled full-cycle accounting, consolidations, and reporting for Canadian, US, European, and Asian subsidiaries under IFRS 5, 9, 13, 15, and 16.',
      'Developed a comprehensive 3-year business plan with feasibility analysis and forecast modeling to launch a new production assembly plant.',
      'Performed product costing and business process improvements across Finance, HR, and Procurement, optimizing inventory levels and production scheduling.',
      'Developed Visio process maps of current and future business processes and applied advanced sampling and data analytics to support strategic roadmaps.',
      'Served as UAT Team Lead for system conversions, supporting Procurement, Payables, and GL clean-up while auditing high-volume daily customer billings.'
    ]
  },
  health: {
    title: 'Healthcare, Non-Profit, Financial Services & Higher Education',
    mandateTag: 'Healthcare OHRS, Banking & Public Sector Finance',
    kpis: [
      { val: 'Ministry OHRS', label: 'Ontario Healthcare Reporting & Funding Settlement' },
      { val: 'Provincial RFP', label: 'Vendor Selection Impacting Healthcare Providers' },
      { val: 'IT & Banking', label: 'Seneca College IT & Capital One Special Projects' }
    ],
    bullets: [
      'Prepared monthly reconciliation reports to the Ministry of Health on all funding per OHRS guidelines (Government of Ontario) and coordinated account settlements.',
      'Managed the RFP vendor selection process for major projects impacting healthcare providers across the province of Ontario.',
      'Provided financial advice to executive teams in shared services organizations through high-end analysis of multi-year financial statements, forecasts, and budgets.',
      'Performed in-depth analysis of all IT costs (equipment, shared services contracts, special projects) to support internal audit and Seneca College IT leadership.',
      'In Financial Services, managed complex portfolios across escalations, investigations, recoveries, estates, bankruptcy, fraud, and legal compliance.',
      'Translated business user concepts into comprehensive requirements and design documents while performing GAAP analysis to realign educational and clinical systems.'
    ]
  }
};

// Render Companies Grid
const companyGrid = document.getElementById('companyGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderCompanies(sectorFilter = 'all') {
  if (!companyGrid) return;
  const filtered = sectorFilter === 'all'
    ? COMPANIES
    : COMPANIES.filter(c => c.sector === sectorFilter);

  companyGrid.innerHTML = filtered.map(c => `
    <article class="company-card">
      <div>
        <div class="company-top">
          <span class="company-sector-tag">${c.sectorLabel}</span>
          <span class="company-dates">${c.dates}</span>
        </div>
        <h3 class="company-name">${c.name}</h3>
        <div class="company-role">${c.role}</div>
      </div>
      <div class="company-systems">
        ${c.systems.map(s => `<span class="sys-pill">${s}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCompanies(btn.dataset.sector);
  });
});

// Render Sector Dossier Tabs
const sectorPanelWrap = document.getElementById('sectorPanelWrap');
const sectorTabs = document.querySelectorAll('.sector-tab');

function renderSectorPanel(key = 're') {
  if (!sectorPanelWrap) return;
  const data = SECTOR_DATA[key];
  if (!data) return;

  sectorPanelWrap.innerHTML = `
    <div class="panel-header">
      <div>
        <span class="section-kicker">SECTOR EXECUTION RECORD</span>
        <h3 class="panel-title">${data.title}</h3>
      </div>
      <button class="btn btn-primary btn-sm open-booking-btn" data-mandate="${data.mandateTag}">
        Book ${data.mandateTag.split(',')[0]} →
      </button>
    </div>
    <div class="panel-kpi-strip">
      ${data.kpis.map(k => `
        <div class="panel-kpi">
          <strong>${k.val}</strong>
          <span>${k.label}</span>
        </div>
      `).join('')}
    </div>
    <ul class="panel-Grid-bullets">
      ${data.bullets.map(b => `<li>${b}</li>`).join('')}
    </ul>
  `;

  bindBookingTriggers();
}

sectorTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    sectorTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderSectorPanel(tab.dataset.tab);
  });
});

// Bilingual EN / FR Executive Summary Toggle
const langToggle = document.getElementById('langToggle');
let currentLang = 'en';

if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    langToggle.querySelectorAll('[data-lang]').forEach(el => {
      el.classList.toggle('lang-active', el.dataset.lang === currentLang);
    });
    document.querySelectorAll('[data-en][data-fr]').forEach(el => {
      el.innerHTML = el.getAttribute(`data-${currentLang}`);
    });
  });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

if (mobileMenuBtn && mainNav) {
  mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('mobile-open');
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mainNav.classList.remove('mobile-open'));
  });
}

// Copy to Clipboard Buttons for Phone & Email
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const text = btn.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(text);
      const original = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = original; }, 1800);
    } catch {
      btn.textContent = text;
    }
  });
});

// Mock Direct Contact Form Submission
const contactForm = document.getElementById('contactForm');
const contactSuccess = document.getElementById('contactSuccess');
const contactRefCode = document.getElementById('contactRefCode');
const resetContactBtn = document.getElementById('resetContactBtn');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const randomRef = 'OG-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
    if (contactRefCode) contactRefCode.textContent = randomRef;
    contactForm.hidden = true;
    contactSuccess.hidden = false;
  });
}

if (resetContactBtn) {
  resetContactBtn.addEventListener('click', () => {
    contactForm.reset();
    contactSuccess.hidden = true;
    contactForm.hidden = false;
  });
}

// Interactive "Book Now" Modal Logic
const bookingModal = document.getElementById('bookingModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalMandatePills = document.querySelectorAll('#modalMandatePills .m-pill');
const selectedMandateInput = document.getElementById('selectedMandateInput');
const modalLiveSummary = document.getElementById('modalLiveSummary');
const dateStrip = document.getElementById('dateStrip');
const timeSlots = document.querySelectorAll('#timeGrid .time-slot');
const bookingForm = document.getElementById('bookingForm');
const bookingFormView = document.getElementById('bookingFormView');
const bookingConfirmedView = document.getElementById('bookingConfirmedView');
const confirmedDetailsBox = document.getElementById('confirmedDetailsBox');
const downloadIcsBtn = document.getElementById('downloadIcsBtn');
const newBookingBtn = document.getElementById('newBookingBtn');

let selectedDateStr = '';
let selectedTimeStr = '09:00 AM EST';
let lastBookingPayload = null;

function generateBusinessDates() {
  if (!dateStrip) return;
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const upcoming = [];
  const cursor = new Date();

  while (upcoming.length < 5) {
    cursor.setDate(cursor.getDate() + 1);
    const dow = cursor.getDay();
    if (dow !== 0 && dow !== 6) {
      upcoming.push(new Date(cursor));
    }
  }

  dateStrip.innerHTML = upcoming.map((d, idx) => {
    const label = `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`;
    if (idx === 0) selectedDateStr = label;
    return `
      <div class="date-card ${idx === 0 ? 'active' : ''}" data-date="${label}">
        <span class="d-day">${days[d.getDay()]}</span>
        <span class="d-num">${months[d.getMonth()]} ${d.getDate()}</span>
      </div>
    `;
  }).join('');

  dateStrip.querySelectorAll('.date-card').forEach(card => {
    card.addEventListener('click', () => {
      dateStrip.querySelectorAll('.date-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      selectedDateStr = card.dataset.date;
      updateModalSummary();
    });
  });
}

function updateModalSummary() {
  if (!modalLiveSummary) return;
  const mandate = selectedMandateInput ? selectedMandateInput.value : 'Executive Advisory';
  modalLiveSummary.innerHTML = `Selected: <strong>${mandate}</strong> • ${selectedDateStr} at ${selectedTimeStr}`;
}

modalMandatePills.forEach(pill => {
  pill.addEventListener('click', () => {
    modalMandatePills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    if (selectedMandateInput) selectedMandateInput.value = pill.dataset.val;
    updateModalSummary();
  });
});

timeSlots.forEach(slot => {
  slot.addEventListener('click', () => {
    timeSlots.forEach(s => s.classList.remove('active'));
    slot.classList.add('active');
    selectedTimeStr = slot.dataset.time;
    updateModalSummary();
  });
});

function openBookingModal(mandateTitle) {
  if (!bookingModal) return;
  if (mandateTitle && selectedMandateInput) {
    selectedMandateInput.value = mandateTitle;
    modalMandatePills.forEach(p => {
      p.classList.toggle('active', p.dataset.val.toLowerCase().includes(mandateTitle.toLowerCase().slice(0, 12)));
    });
  }
  bookingFormView.hidden = false;
  bookingConfirmedView.hidden = true;
  updateModalSummary();
  bookingModal.classList.add('open');
  bookingModal.setAttribute('aria-hidden', 'false');
}

function closeBookingModal() {
  if (!bookingModal) return;
  bookingModal.classList.remove('open');
  bookingModal.setAttribute('aria-hidden', 'true');
}

function bindBookingTriggers() {
  document.querySelectorAll('.open-booking-btn').forEach(btn => {
    btn.onclick = () => openBookingModal(btn.dataset.mandate);
  });
}

if (closeModalBtn) closeModalBtn.addEventListener('click', closeBookingModal);
if (bookingModal) {
  bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) closeBookingModal();
  });
}

if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formatEl = bookingForm.querySelector('input[name="meetingFormat"]:checked');
    const payload = {
      ref: 'OG-BOOK-' + Math.floor(10000 + Math.random() * 89999),
      mandate: selectedMandateInput.value,
      format: formatEl ? formatEl.value : 'Video Briefing (30 Min)',
      date: selectedDateStr,
      time: selectedTimeStr,
      name: document.getElementById('bookName').value,
      company: document.getElementById('bookCompany').value,
      email: document.getElementById('bookEmail').value,
      phone: document.getElementById('bookPhone').value,
      notes: document.getElementById('bookNotes').value || 'Standard executive consultation'
    };
    lastBookingPayload = payload;

    confirmedDetailsBox.innerHTML = `
      <div><strong>Booking Reference:</strong><br/><code>${payload.ref}</code></div>
      <div><strong>Date &amp; Time:</strong><br/>${payload.date} • ${payload.time}</div>
      <div><strong>Advisor:</strong><br/>Osman Ghantiwala, CPA (416-298-6841)</div>
      <div><strong>Meeting Format:</strong><br/>${payload.format}</div>
      <div><strong>Client Executive:</strong><br/>${payload.name} (${payload.company})</div>
      <div><strong>Mandate Focus:</strong><br/>${payload.mandate}</div>
    `;

    bookingFormView.hidden = true;
    bookingConfirmedView.hidden = false;
  });
}

if (newBookingBtn) {
  newBookingBtn.addEventListener('click', () => {
    bookingForm.reset();
    bookingConfirmedView.hidden = true;
    bookingFormView.hidden = false;
  });
}

if (downloadIcsBtn) {
  downloadIcsBtn.addEventListener('click', () => {
    if (!lastBookingPayload) return;
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Osman Ghantiwala CPA Advisory//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Executive Finance Consultation: ${lastBookingPayload.mandate} (Osman Ghantiwala, CPA)`,
      `DESCRIPTION:Ref: ${lastBookingPayload.ref}\\nClient: ${lastBookingPayload.name} (${lastBookingPayload.company})\\nFormat: ${lastBookingPayload.format}\\nDirect Phone: 416-298-6841\\nEmail: solutions4acct@gmail.com\\nNotes: ${lastBookingPayload.notes}`,
      'LOCATION:Toronto, ON / Microsoft Teams / 416-298-6841',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${lastBookingPayload.ref}-Osman-Ghantiwala-CPA.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}

// Initialize Views
renderCompanies('all');
renderSectorPanel('re');
generateBusinessDates();
bindBookingTriggers();
updateModalSummary();
