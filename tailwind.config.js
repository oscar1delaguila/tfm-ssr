

/** @type {import('tailwindcss').Config} */ 

module.exports = {
  
  content: [
    "./src/**/*.{html,ts,js}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'bg-orange-300': '#FDBA74',
      'naranja-oscuro': 'darkorange',
      'mio':'#c34f3e',
      'bg-khaki': 'khaki',
      'bg-lime': 'rgb(247 254 231)',
      'black':'#000'
    },
    extend: {

      colors: {
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'red-dark':'#AC2508',
        'blue-transparent': '#EBF5FB',
        'red-transparent': '#AC2508',
        'orange-electric': '#FF5733' ,
        'orange-transparent': '#fff6e3',
        'SeaShell':'#FFF5EE',
        'salmon':'#FA8072',
      },

      spacing: {
        '800': '800px',
        '600': '600px',
        '380': '380px',
        '450': '450px',

      }
    },
  },
  plugins: []

}
