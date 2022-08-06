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
        "slider-sm": "25rem",
        "slider-medium": "32rem",
        "slider-large": "40rem",
        "slider-xl": "49rem",
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
