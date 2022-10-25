/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        18: '4.5rem',
        88: '22rem',
        92: '23rem',
        104: '26rem',
        112: '28rem',
        120: '30rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        168: '42rem',
        200: '50rem',
        240: '60rem',
        256: '64rem'
      },
      colors: {
        primary: {
          DEFAULT: '#1C212D'
        },
        secondary: {
          DEFAULT: '#FFD831'
        },
        tertiary: {
          DEFAULT: '#1F4590'
        },
        status: {
          DEFAULT: '#DD3838',
          red: '#DD3838',
          orange: '#FFB302',
          yellow: '#FCE83A',
          green: '#07C180',
          gray: '9EA7AD',
          cyan: '2DCCFF'
        },
        fontSize: {
          xxs: ['0.625rem', { lineHeight: '0.75rem' }]
        }
      }
    },
  },
  plugins: [],
  important: true
}
