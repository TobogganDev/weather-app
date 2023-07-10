/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#1A1A1A",
        "custom-green": "00A695",
        "custom-blue": "#006DAA",
        "custom-dark-blue": "#0353A4",
      }
    },
    fontFamily: {
      Righteous: ["Righteous", "cursive"],
      Lexend: ["Lexend", "sans-serif"],
    },
  },
  plugins: [],
}

