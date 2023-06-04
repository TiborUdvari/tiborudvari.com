/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      fontFamily: {
        sans: ['var(--font-miniature-display)'],
        mono: ['var(--font-miniature-display)'],
      },
    },
  },
  plugins: [],
}

