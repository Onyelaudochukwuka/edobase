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
        primary: '#FFDE4E',
        basic: '#232323',
        gray: '#E9E3E3'
      },
      fontSize: {
        xxs: '8px',
      }
    },
  },
  plugins: [],
}
