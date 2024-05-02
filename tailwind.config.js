/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B93FF",
      },
    },
  },
  darkMode: 'class',

  plugins: [require("daisyui")],
};
