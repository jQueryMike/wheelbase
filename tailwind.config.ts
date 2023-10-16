import type { Config } from 'tailwindcss';

let config: Config;

switch (process.env.ENVIRONMENT_NAME) {
  case 'local':
    config = require(`./tailwind.config.local.json`);
    break;
  case 'storybook':
    config = require(`./tailwind.config.storybook.json`);
    break;
  default:
    config = require(`./tailwind.config.json`);
    break;
}

const tailwindConfig: Config = {
  ...config,
  plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
};

export default tailwindConfig;
