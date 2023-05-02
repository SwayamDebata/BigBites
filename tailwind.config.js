/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ "./src/**/*.{html,js}"],
  theme: {
    screens: {
      'mob' : { 'min' : '360px' , 'max': '479px' },
      'xsm' : { 'min' : '480px' , 'max': '639px' },
      'sm'  : {'min': '640px', 'max': '767px'},
      'md'  : {'min': '768px', 'max': '1023px'},
      'lg'  : {'min': '1024px', 'max': '1279px'},
      'xl'  : {'min': '1280px', 'max': '1535px'},
      '2xl' : {'min': '1536px'},
    },
    extend: {
      animation: {
        type: 'type 2.7s ease-out .8s infinite alternate both',
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0ch)' },
          '5%, 10%': { transform: 'translateX(1ch)' },
          '15%, 20%': { transform: 'translateX(2ch)' },
          '25%, 30%': { transform: 'translateX(3ch)' },
          '35%, 40%': { transform: 'translateX(4ch)' },
          '45%, 50%': { transform: 'translateX(5ch)' },
          '55%, 60%': { transform: 'translateX(6ch)' },
          '65%, 70%': { transform: 'translateX(7ch)' },
          '75%, 80%': { transform: 'translateX(8ch)' },
          '85%, 90%': { transform: 'translateX(9ch)' },
          '95%, 100%': { transform: 'translateX(11ch)' },
        },
      },
    },
    colors: {
      'yellow': '#ffc300',
      'blue-dark': '#001d3d',
      'orange': '#ff7849',
      'green': '#6dad1f',
      'white' : '#fff',
      'red': '#c70039',
      'gray': '#eeeeee',
      'gray-light': '#d3dce6',
      'gray-dark' : '#686b78',
      'gray-details' : '#535665',
      'gray-desc' :'rgba(40,44,63,.45)',
      'github' : '#333',
      'linkedin' : '#0e76a8', 
      'google' : '#ea4335',
      'title' : '#444',
      'bio' : '#999',
      'blue' : '#1890ff',
      'shimmer' : '#999',
      'black': '#000000',
    },
  },
  plugins: [],
}