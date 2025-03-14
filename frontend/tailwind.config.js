/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';
const flowbite = require('flowbite-react/tailwind');

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        aftika: ['Aftika', 'san-serif'],
      },
      extend: {
        textColor: ['group-hover'],
        backgroundColor: ['hover'],
        borderRadius: ['hover'],
      },
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
        sagePink: ' #FFD6D6',
        sageGradientTop: ' #478AFE',
        sageGradientMiddle: ' #2B67D0',
        sageGradientBottom: ' #063A94',

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    tailwindScrollbar,
    require('tailwindcss-animate'),
    flowbite.plugin(),
  ],
};
