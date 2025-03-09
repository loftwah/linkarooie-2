/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a6cf7',
        secondary: '#f072b6',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
} 