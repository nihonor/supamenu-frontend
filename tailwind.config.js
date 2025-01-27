/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bPrimary:"rgb(245, 165, 20)",
        bgButton:"rgb(245, 149, 20)",
        bgHover:"rgb(245, 159, 20)"
      },
    },
  },
  plugins: [],
}