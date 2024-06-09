/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
      "sm-max": { max: "575px" },
      "md-max": { max: "767px" },
    },
    colors: {
      'primary': '#9747FF',
      'textNeutralGray': '#888888',
      'textBlack': '#1A1D1F',
      'textWhaite': '#FFFFFF',
      'bgWhaite': '#FFFFFF',
      'bgblack': '#1f2128',
      'bgCharcoalGray': '#242731',
      'bgSoftGray': '#F5F4F6',
    },
    extend: {
      dropShadow: {
        'shadow': '5px 8px 12.5px #9747FF',
      },
      boxShadow: {
        'custom': '0px 0px 4px 3px #F5F4F6',
      }
    },
  },
  plugins: [],
})

