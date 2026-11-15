/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./about.html",
    "./services.html",
    "./contact.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#111827',
          beige: '#fcfaf8',
          accent: '#f5eee9',
          border: '#e8e2dd'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Karla"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
