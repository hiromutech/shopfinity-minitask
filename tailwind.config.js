/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,tsx}', // Required for Expo Router
    './components/**/*.{js,ts,tsx}',
    './hooks/**/*.{js,ts,tsx}', // if you're using hooks
    './data/**/*.{js,ts,tsx}', // if you have data files
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        airbnbcereal: ['AirbnbCereal-Regular'],
        'airbnbcereal-bold': ['AirbnbCereal-Bold'],
      },
    },
  },
  plugins: [],
};
