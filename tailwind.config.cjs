/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFEFE",
      black: "#200F00",
      "grey-light": "#F2F2F2",
      "grey-dark": "#7F7F7F",
      "orange-brand": "#FEA255",
      "orange-light": "#FFF6EE",
      yellow: "#FFCE61",
      green: "#2FCC8C",
      red: "#BB2528",
    },

    fontSize: {
      h1: "3.052rem",
      h2: "2.441rem",
      h3: "1.953rem",
      h4: "1.563rem",
      h5: "1.25rem",
      body: "1rem",
      small: "0.8rem",
      tiny: "0.64rem",
    },
    fontFamily: {
      heading: ['"Oswald"', "sans-serif"],
      body: ['"Roboto"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
