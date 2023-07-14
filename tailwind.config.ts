import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

import tailWindConf from './tailwind-conf.json';

const folders = ['lib', 'app'];

const tailwindConfig: Config = {
  content: folders.map((folder) => `./${folder}/**/*.{js,ts,jsx,tsx,mdx}`),
  safelist: tailWindConf.safelist,
  theme: {
    extend: {
      fontFamily: {
        ...tailWindConf.fontFamily,
      },
      colors: {
        primary: { DEFAULT: '#121642', contrast: '#fff' },
        accent: { DEFAULT: '#F92D64', contrast: '#fff' },
      },
    },
  },
  plugins: [
    typography,
    // ...
  ],
};

export default tailwindConfig;
