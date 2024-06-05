/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {  boxShadow: {
      input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
    },},
  },
  plugins: [ require('@tailwindcss/aspect-ratio'),],
  theme: {
    screens: {
      xsm:'350px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black':"#1e272c",
      'purple': '#8054d0',
      "green":"#4d6e2f",
      'gold':'#ba984e',
      'bluepr':'#A02DEB',
      'midnight': '#121063',
      'red':'#e35a63',
  
  pink:{
    100:"#d0a2ea",
    200:"#d0a2ea",
    300:"#d0a2ea",
    400:"#9944d2",
    500:"#9944d2",
    600:"#61357F",
    700:"#56187F",
    800:"#61357F",
    900:"#61357F",
  },
  green:{
    200:"#2a814d",
    400:"#25a26f",
    500:"#02590f",
    600:"#02590f"
  },
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    backgroundImage: {
      'hero-pattern': "url('frontend\background.jpg')",
      'footer-texture': "url('/img/footer-texture.png')",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', "Noto Sans", 'serif'],
    
    },
  },
}
