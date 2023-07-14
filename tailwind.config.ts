import type { Config } from 'tailwindcss';

import tailWindConf from './tailwind-conf.json';

const folders = ['lib', 'app'];

const tailwindConfig: Config = {
  ...tailWindConf,
  content: folders.map((folder) => `./${folder}/**/*.{js,ts,jsx,tsx,mdx}`),
  // safelist: tailWindConf.safelist,
  // theme: {
  //   extend: {
  //     colors: tailWindConf.colors,
  //   },
  // },
  plugins: [require('@tailwindcss/typography')],
};

export default tailwindConfig;
