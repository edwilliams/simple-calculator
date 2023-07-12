/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      'pale-cyan-blue': '#8ed1fc',
      'vivid-cyan-blue': '#0693e3',
    },
  },
  plugins: [],
}
