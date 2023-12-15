/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
      
        screens: {
          '3xl': '2000px',
        },
      
        fontFamily: {
        'DmSans': ['DM Sans', 'sans-serif']
        },
        colors:{
        gold:'#FAB818',
        bronze:'#EAC696',
        silver:'#C0C0C0',
        gray700:' #344054',
        gray500:'#667085',
        bleu1:'#3417B0',
        bleu2:'#1E0E62',
        col1:'#00CDAE',
        color1:'#1E0E62',
        color2:'#15143966',
       

        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)"
        }

    },
  },
  plugins: [require('tailwind-scrollbar'),
],
}

