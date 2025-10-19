import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
      },
    },
  },
  darkMode: 'class',
  plugins: [daisyui],
};
