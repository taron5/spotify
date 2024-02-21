import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1ED760',
        secondary: '#1DB954',
        gray: '#1F1F1F',
        ['gray-100']: '#242424',
        ['white-100']: '#d0d0d0',
        ['brand-black']: '#121212',
      },
    },
  },
  plugins: [],
};
export default config;
