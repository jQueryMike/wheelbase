import type { Config } from 'tailwindcss';

import tailWindConf from './tailwind-conf.json';

const folders = ['lib', 'app'];

const tailwindConfig: Config = {
  content: folders.map((folder) => `./${folder}/**/*.{js,ts,jsx,tsx,mdx}`),
  safelist: tailWindConf.safelist,
};

export default tailwindConfig;
