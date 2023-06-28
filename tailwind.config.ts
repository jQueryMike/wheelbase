import type { Config } from 'tailwindcss';

import safelist from './safelist.json';

const folders = ['lib', 'app'];

const tailwindConfig: Config = {
  content: folders.map((folder) => `./${folder}/**/*.{js,ts,jsx,tsx,mdx}`),
  safelist,
};

export default tailwindConfig;
