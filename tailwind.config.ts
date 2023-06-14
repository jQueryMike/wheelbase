import type { Config } from 'tailwindcss';

const tailwindConfig: Config = {
  content: ['./lib/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
};

export default tailwindConfig;
