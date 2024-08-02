/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans'], // by default tailwind uses `sans` fonts, we are overriding that font here
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        "pink-50": "#FFEAF2",
        "pink-100": "#FFC1D9",
        "pink-200": "#FF97BF",
        "pink-300": "#FF5999",
        "pink-400": "#FF2F80",
        "pink-500": "#E52A73",
        "pink-600": "#CC2666",
        "pink-700": "#B3215A",
        "pink-800": "#991C4D",
        "pink-900": "#801740",
        "blue-50": "#EFF2F5",
        "blue-100": "#B3C4DD",
        "blue-200": "#809CC5",
        "blue-300": "#2256A0",
        "blue-400": "#008BFF",
        "blue-500": "#00337E",
        "blue-600": "#002E70",
        "blue-700": "#002862",
        "blue-800": "#002254",
        "blue-900": "#001738",
        "black-50": "#e8e8e9",
        "black-100": "#b8b8bc",
        "black-200": "#95959c",
        "black-300": "#70757E",
        "black-400": "#474752",
        "black-500": "#191927",
        "black-600": "#171723",
        "black-700": "#12121c",
        "black-800": "#0e0e15",
        "black-900": "#0b0b10",
        "white-50": "#ffffff",
        "white-100": "#ffffff",
        "white-200": "#ffffff",
        "white-300": "#F9F9F9",
        "white-400": "#FDFDFD",
        "white-500": "#F8F8F9",
        "white-600": "#e8e8e8",
        "white-700": "#b5b5b5",
        "white-800": "#8c8c8c",
        "white-900": "#6b6b6b",
      },
      boxShadow: {
        "white-glow": "0px 0px 40px 3px rgba(255, 255, 255, 1)",
        "sub-account-dropdown": "0px 2px 60px 0px rgba(0, 0, 0, 0.08)"
      },
      backgroundImage: {
        authBg: "url('/img/auth-bg.jpg')",
      },
      backgroundSize: {
        authBg: "cover",
      },
      backgroundPosition: {
        authBg: "50% 50%",
      },
      gridTemplateColumns: {
        formControl: "318px min-content",
        chooseBlockchain: 'repeat(auto-fit, 220px)'
      },
    },
  },
  plugins: [],
});
