/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
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

