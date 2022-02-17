const colors = require('tailwindcss/colors')
module.exports = {
  mode: "jit",  
  content: [
      "./partials/**/*.hbs",
      "./templates/**/*.hbs",
      "./src/**/*.js",
      "./src/**/*.ts",
    ],
    theme: {

      
      colors: {
        transparent: 'transparent',
        black: colors.black,
        white: colors.white,
        redcolor       :   '#ba1519',
        textcolor      :   '#373433',
        bodycolor      :    '#e9e3dd',
        bodercolor     :    '#f3f2f0',
        navbodercolor  :    '#dddad3',
        pink: '#78246f',
        "ll-blue": "#00173C",
        "ll-hover-blue": "#001c48",
        "ll-red": "#E52222",
        "ll-light-blue": "#5c6d88",
        "clutter": "#037f78",
      },


    container: {
        center: true,
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1258px',
      // => @media (min-width: 1280px) { ... }

    },
    fontFamily: {
      'Futura': ["Futura Std", "sans-serif"],
      'Arial': ["Arial", "sans-serif"],
    },
    borderRadius: {
     'none': '0',
     'sm': '0.125rem',
     DEFAULT: '0.25rem',
     DEFAULT: '4px',
     'md': '0.375rem',
     'lg': '0.5rem',
     'full': '9999px',
     'large': '12px',
     'custom-radius' : '72px;'
    },
      extend: {
        backgroundImage: {
          'sprite': "url('images/sprite.png')",
          'sprite-mobile': "url('images/pdp-sprite.png')",
          'marker': "url('images/googlemap-marker.png')",
        },
        backgroundPosition: {
          bottom: 'bottom',
          'bottom-4': 'center bottom 1rem',
          center: 'center',
          left: 'left',
          right: 'right',
          'right-bottom': 'right bottom',
          'right-top': 'right top',
          top: 'top',
          'search': '0 -173px',
          'heart': '0 -35px',
          'heart-mobile': '0 -454px',
          'location': '0 -140px',
          'location-mobile': '0 -489px',
          'cart': '0 -70px',
          'social-facebook': '5px -243px',
          'social-twitter': '2px -276px',
          'social-pinterest': 'left -313px',
          'social-instagram': '0 -977px',
          'social-google': '2px -347px',
          'social-youtube': '1px -384px',
          'social-blog': '2px -1011px',
          'call': '1px -99px',
          'user': '0 -420px',
          'plus': '0 -280px',
          'minus': '0 -314px',
          'more': '0 -175px'
        }
      },
    },
    plugins: [],
  }
