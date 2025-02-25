/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        regalBlue: {
          '50': '#eef9ff',
          '100': '#dcf2ff',
          '200': '#b2e7ff',
          '300': '#6dd5ff',
          '400': '#20c0ff',
          '500': '#00a9ff',
          '600': '#0086df',
          '700': '#006ab4',
          '800': '#005a94',
          '900': '#00416b',
          '950': '#002f51',
        },
        rawSienna: {
          '50': '#fbf7ef',
          '100': '#f3e8d2',
          '200': '#e7cea0',
          '300': '#dab16f',
          '400': '#d1984e',
          '500': '#ca8342',
          '600': '#b0612f',
          '700': '#93472a',
          '800': '#783a28',
          '900': '#643123',
          '950': '#381810',
        },
        chathamsBlue: {
          '50': '#eff8ff',
          '100': '#daeeff',
          '200': '#bde1ff',
          '300': '#90d0ff',
          '400': '#5bb5ff',
          '500': '#3594fc',
          '600': '#1f76f1',
          '700': '#175ede',
          '800': '#194db4',
          '900': '#1a428a',
          '950': '#152a56',
        },
        blueLagoon: {
          '50': '#e8fffc',
          '100': '#c5fff7',
          '200': '#92fff0',
          '300': '#47ffe5',
          '400': '#00ffe6',
          '500': '#00faff',
          '600': '#00c6d7',
          '700': '#009cac',
          '800': '#007582',
          '900': '#056574',
          '950': '#004451',
        },
        daisyBush: {
          '50': '#f9f5ff',
          '100': '#f2e9fe',
          '200': '#e7d7fd',
          '300': '#d4b7fb',
          '400': '#b989f7',
          '500': '#9e5cf0',
          '600': '#883be2',
          '700': '#732ac6',
          '800': '#60269e',
          '900': '#512182',
          '950': '#350b60',
        },
        sideCar: {
          '50': '#fcf9ee',
          '100': '#f6eecf',
          '200': '#f1e4b2',
          '300': '#e3c566',
          '400': '#ddb142',
          '500': '#d4942c',
          '600': '#bb7424',
          '700': '#9c5521',
          '800': '#7f4421',
          '900': '#69391e',
          '950': '#3c1d0c',
        },
        orangeRoughy: {
          '50': '#fef7ec',
          '100': '#faeacb',
          '200': '#f6d391',
          '300': '#f1b758',
          '400': '#ed9e32',
          '500': '#e67d1a',
          '600': '#d15e14',
          '700': '#a93f14',
          '800': '#8a3116',
          '900': '#712a16',
          '950': '#411307',
        }
      }
    }
  },
  plugins: [],
}
