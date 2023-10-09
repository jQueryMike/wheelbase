import type { Config } from 'tailwindcss';

import generatedConfig from './tailwind.config.json';

let config = generatedConfig as Config;

if (process.env.ENVIRONMENT_NAME === 'local') config = require('./tailwind.config.local.json');
if (process.env.NEXT_PUBLIC_IS_STORYBOOK === 'true') require('./tailwind.config.storybook.json');

const tailwindConfig: Config = {
  ...config,
  plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
};

export default tailwindConfig;
