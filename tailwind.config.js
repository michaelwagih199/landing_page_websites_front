/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],

  theme: {
    extend: {
      colors:{
        primary_blue: {
          light: '#3488C6',
          extraLight:'#CEE2F1',
          dark:'#184465',
        },
        natural:{
          black:'#050E14',
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
