import type { Config } from 'tailwindcss';

import safelist from './safelist.json';

const getGridCols = () => {
  const gridCols: string[] = [];
  ['sm', 'md', 'lg', 'xl', '2xl'].forEach((size) => {
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach((colCount) => {
      gridCols.push(`${size}:grid-cols-${colCount}`);
    });
  });
  return gridCols;
};

const folders = ['lib', 'app'];

const tailwindConfig: Config = {
  content: folders.map((folder) => `./${folder}/**/*.{js,ts,jsx,tsx,mdx}`),
  safelist: [...getGridCols(), ...safelist],
};

export default tailwindConfig;
