/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '639px'},
      'md': {'max': '767px'},
      'lg': {'max': '1000px'},
    }
  },
  plugins: [],
}

