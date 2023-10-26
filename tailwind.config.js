/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      "sf-ultralight": ["SF UI Display Ultralight", "Arial", "sans-serif"],
      "sf-thin": ["SF UI Display Thin", "Arial", "sans-serif"],
      "sf-light": ["SF UI Display Light", "Arial", "sans-serif"],
      "sf-medium": ["SF UI Display Medium", "Arial", "sans-serif"],
      "sf-semibold": ["SF UI Display Semibold", "Arial", "sans-serif"],
      "sf-bold": ["SF UI Display Bold", "Arial", "sans-serif"],
      "sf-black": ["SF UI Display Black", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        "link-color": "#0000EE",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
