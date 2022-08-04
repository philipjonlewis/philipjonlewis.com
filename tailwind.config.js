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
      width: {
        "slider-full": "64rem",
        "slider-small": "100%",
      },
      height: {
        "slider-full": "42rem",
        "slider-small": "100vh",
        "contact-mobile": "32rem",
      },
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
