/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#172554',
        customNavy: '#11468F',
        customRed: '#DA1212',
        customGray: '#EEEEEE',
      },
      fontFamily: {
        opensans: ["'Lato'", 'sans-serif'],
        lato: ["'Open Sans'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
