import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B93FF",
      },
    },
  },
  darkMode: 'class',
  plugins: [daisyui],
};
