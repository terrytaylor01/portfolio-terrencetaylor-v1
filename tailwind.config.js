/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans"],
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(1)" },
        },
      },
      animation: {
        breathe: "breathe 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
