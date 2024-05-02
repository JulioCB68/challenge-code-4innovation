/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'muted-foreground': '#71717a',
        'muted-foreground-dark': '#a1a1aa',
      },
      backgroundColor: {
        'accent-dark': '#27272a',
        accent: '#f4f4f5',
      },
    },
  },
  plugins: [],
}
