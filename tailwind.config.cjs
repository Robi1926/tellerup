/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFEFE",
      black: "#200F00",
      'grey-light': "#F2F2F2",
      'grey-dark': "#7F7F7F",
      'orange-brand': "#FEA255",
      'orange-light': "#FFF6EE",
      yellow: "#FFCE61",
      green: "#2FCC8C",
    },

    fontsize: {
      
    }
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
