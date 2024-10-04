module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alexandria: ["Alexandria", "Arial", "sans-serif"],
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
      },
      colors: {
        orange: {
          500: "#EE6400",
          300: "#F8954D",
          100: "#FFE2CD",
        },
      },
    },
  },
  plugins: [],
};
