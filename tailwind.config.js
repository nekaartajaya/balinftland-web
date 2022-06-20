/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ['Syne', 'sans-serif'],
      },
    },
    screens: {
      tablet: '426px',
      desktop: '920px',
    },
  },
  plugins: [],
};
