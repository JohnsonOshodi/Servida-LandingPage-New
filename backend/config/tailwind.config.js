/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './public/**/*.js',
    './src/**/*.{js,jsx,ts,tsx}', // Ensures Tailwind scans React components
  ],
  theme: {
    extend: {
      colors: {
        sageBlack: '#131313',
        sageMidBlack: '#303030',
        sageWhite: '#FAFAFA',
        sageLightBlue: '#D1F0FF',
        sageOffWhite: '#F5F9FF',
        sageMidWhite: '#F5F5F5',
        sageMidToneWhite: '#F5FAFD',
        sageDarkBlue: '#0076FF',
        sageHeavyBlue: '#0047AB',
        sageProfileBlue: '#76D8FF',
        sageHighBlue: '#35C1FF',
        sageLowBlue: '#079CFF',
        sageFormBlue: '#062B65',
        sageProgressBar: '#004DD7',
        sageProgressBG: '#AEE6FF',
        sageGray: '#F5F5F5',
        sageLightGray: '#838383',
        sageTextGray: '#A6A6A6',
        sageNumberGray: '#54575B',
        sageProfileGray: '#ECECEC',
        sageBorderGray: '#A9AAAA',
        sageForm: '#B0B0B0',
        sageSelectGray: 'hsla(240, 1%, 47%, 0.3)',
        sageGreen: '#34C759',
        sageDarkGreen: '#54BD95',
        sageRed: '#FF3B30',
        sagePink: '#FFD6D6',
        sageGradientTop: '#478AFE',
        sageGradientMiddle: '#2B67D0',
        sageGradientBottom: '#063A94',
      },
      fontFamily: {
        aftika: ['Aftika', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
