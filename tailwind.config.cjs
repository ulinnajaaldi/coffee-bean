/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "1270px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "2400px",
    },
    extend: {
      colors: {
        primary: "#DA5935",
      },
    },
  },
  plugins: [],
};
