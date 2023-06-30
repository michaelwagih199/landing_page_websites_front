/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],

  theme: {
    extend: {
      colors:{
        blue_primary: {
          light: '#3488C6',
          extraLight:'#CEE2F1',
          dark_1:'#186CAB',
          dark_2:'#184465',
          dark_3:'#003861',
        },
        natural:{
          black:'#0A1B28',
          while:'#F5F7F3',
          gray:'#5E5E5E'
        }
      },

      fontFamily:{
        kissMe:["kissMe","Public Sans", "sans-serif"]
      },
      maxWidth:{
        container:'75rem',

      }

    },
    fontFamily: {
      custom: ["Josefin Sans", "Public Sans", "sans-serif"],
    },
  },
  plugins: [],
};
