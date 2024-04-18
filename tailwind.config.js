/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-first":
          "url('https://male-fashion-ten.vercel.app/static/media/hero-1.c081bcff664751bf4f02.jpg')",

        "home-sec":
          "linear-gradient(0deg, #000000e5, #f0f0f0a1),url('https://male-fashion-ten.vercel.app/static/media/about-us.05b80316a13651a25137.jpg')",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
