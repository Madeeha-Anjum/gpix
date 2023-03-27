/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Shantell Sans', 'cursive']
      },
      colors: {
        background: '#f7fafc'
      }
    }
  },
  plugins: []
}
