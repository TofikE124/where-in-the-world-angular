/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    screens: {
      sm: { max: "780px" },
      md: { min: "780px" },
    },
  },
  plugins: [],
};
