/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-bg": "#171717",
        // "dark-bg": "#212121",
      },
      // screens: {
      //   xs: "320px",
      // },
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
