/** @type {import('tailwindcss').Config} */
const theme_sprout = require("./themes/theme.sprout.js");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: theme_sprout.safelist,
  theme: theme_sprout.theme,
  plugins: [],
}
