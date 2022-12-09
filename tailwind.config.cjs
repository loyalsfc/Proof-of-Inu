/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        orange: "#ff9f16"
      },
      fontFamily: {
        poppin: [ 'Montserrat Alternates', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}
