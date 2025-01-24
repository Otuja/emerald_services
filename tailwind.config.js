module.exports = {
  content: ['./src/**/*.{html,js}'], 
  theme: {
    screens:{
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    extend: {
      backgroundImage: {
        'cleaning': "url('./assets/img/img2.jpg')",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        lilita: ['Lilita One', 'cursive'],
        smooch: ['Smooch Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

