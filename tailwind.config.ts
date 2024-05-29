import type { Config } from 'tailwindcss';

import productionConfig from './tailwind.config.json';
import localConfig from './tailwind.config.local.json';
import stortbookConfig from './tailwind.config.storybook.json';

let config: Config;

switch (process.env.ENVIRONMENT_NAME) {
  case 'local':
    config = localConfig;
    break;
  case 'storybook':
    config = stortbookConfig;
    break;
  default:
    config = productionConfig;
    break;
}

const tailwindConfig: Config = {
  ...config,
  plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
};

export default tailwindConfig;
