/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        orange: "#00FFA7",
        "main-dark": "#111111",
        "blue": "#44B1FF"
      },
      backgroundImage : {
        "radial" : "radial-gradient(rgba(0, 255, 167, 1), rgba(68, 177, 255, 1))",
        "radial-cover" : "radial-gradient(rgba(0, 255, 167, 1), rgba(10, 244, 179, 1), rgba(35, 215, 212, 1), rgba(68, 177, 255, 1))",
        "tokenomics": "url('./src/assets/bg/tokenomics.jpeg')",
        "howtobuy": "url('./src/assets/bg/howtobuy.jpeg')"
      },
      fontFamily: {
        poppin: [ 'Montserrat Alternates', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}
