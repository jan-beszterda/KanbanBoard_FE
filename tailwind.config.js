/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-pink': '#FF8E7F',
        'red-pink-dark': '#FF432A',
        'light-grey': '#F5F5F5',
        'dark-grey': '#D9D9D9',
      },
    },
  },
  plugins: [],
}