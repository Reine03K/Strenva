/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
  colors: {
    primary: "#1C3F72",
    primaryLight: "#315A9B",
    accent: "#F97316",
    dark: "#0F172A",
  },
},
  },
  plugins: [],
};
