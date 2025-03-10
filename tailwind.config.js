/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4a6cf7',
        secondary: '#f072b6',
        background: '#ffffff',
        foreground: '#1f2937',
        border: '#e5e7eb',
        muted: '#6b7280',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
} 