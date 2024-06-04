import { relative } from 'path';

const buildEslintCommand = (filenames) => `npx eslint ${filenames.map((f) => relative(process.cwd(), f)).join(' ')}`;

export default {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
