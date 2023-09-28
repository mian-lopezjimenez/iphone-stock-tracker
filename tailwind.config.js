/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#f5f5f7",
        "custom-black": "#1d1d1f",
        "custom-white": "#f5f5f7",
        "custom-blue": "#2997ff",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Merriweather Sans", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
};
