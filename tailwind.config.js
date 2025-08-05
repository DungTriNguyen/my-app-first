/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "ios": "800px",
          "android": "800px",
        },
      }
    },
  },
  plugins: [],
}