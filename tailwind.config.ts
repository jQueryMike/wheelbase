import type { Config } from 'tailwindcss';

import generatedConfig from './tailwind.config.json';
import localConfig from './tailwind.config.local.json';
import storybookConfig from './tailwind.config.storybook.json';

let config = generatedConfig as Config;

if (process.env.ENVIRONMENT_NAME === 'local') config = localConfig as Config;
if (process.env.NEXT_PUBLIC_IS_STORYBOOK === 'true') config = storybookConfig as Config;

const tailwindConfig: Config = {
  ...config,
  plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
};

export default tailwindConfig;
