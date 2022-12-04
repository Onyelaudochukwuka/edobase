/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        loginHighlight: '#590000',
        action: '#F7716E',
        placeholder: '#6C6969',
        checked: '#FFDE4E',
      }
    },
  },
  plugins: [],
}
