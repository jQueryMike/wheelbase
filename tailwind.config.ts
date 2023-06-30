import type { Config } from 'tailwindcss';

const getGridCols = () => {
  const gridCols: string[] = [];
  ['sm', 'md', 'lg', 'xl', '2xl'].forEach((size) => {
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach((colCount) => {
      gridCols.push(`${size}:grid-cols-${colCount}`);
    });
  });
  return gridCols;
};

const tailwindConfig: Config = {
  content: ['./app/**/*.tsx', './lib/**/*.tsx', './lib/components/blocks/**/themes/**/*.classes.ts'],
  safelist: [
    ...getGridCols(),
    'bg-pink-600/10',
    'text-pink-600',
    'bg-green-600/10',
    'text-green-600',
    'p-10',
    'grid',
    'bg-gray-100',
    'container',
    'text-lg',
    'text-gray-500',
    'bg-white',
    'shadow-md',
    'p-6',
  ],
};

export default tailwindConfig;
