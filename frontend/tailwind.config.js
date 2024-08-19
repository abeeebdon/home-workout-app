/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#343A40',
        secondary: '#2C4BA0',
      },
    },
    container: {
      padding: {
        md: '10rem',
      },
    },
  },
  plugins: [],
}
