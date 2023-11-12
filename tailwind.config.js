/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: 'class',

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#252525',
        'midnight-black': '#1B1C1E',
        'artic-blue': '#F0F8FF',
        'eazy-main': {
          25: '#00c1ff80',
          50: '#00c1ff80',
          75: '#00c1ffbf',
          90: '#00c1ffe6',
          100: '#0099FF',
        },
        'custom-lightgray': '#00000066',
        'eazy-faded': '#29B6F6',
        'eazy-grey': '#888888',
      },
      fontFamily: {
        'headings': ['Rubik', 'sans-serif'],
        'dText': ['Montserrat', 'sans-serif'],
        'numbers' : ['Inter', 'sans-serif'],
      },
      screens: {
        'tablet': '640px',
  
        'laptop': '1024px',
  
        '1080p': '1920px',
      },
    }
  },
  plugins: [
    
  ],
});
