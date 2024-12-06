/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        bebas: ["var(--font-bebas-neue)", "sans-serif"],
        libre: ["var(--font-libre-baskerville)", "serif"],
        rubik: ["var(--font-rubik)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
