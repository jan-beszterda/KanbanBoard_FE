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
      },
    },
  },
  plugins: [],
}