import type { Config } from 'tailwindcss';

import generatedConfig from './tailwind.config.json';
import storybookConfig from './tailwind.config.storybook.json';

const config = process.env.USE_STORYBOOK_TAILWIND_CONFIG === 'true' ? storybookConfig : generatedConfig;

const tailwindConfig: Config = {
  ...config,
  plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
};

export default tailwindConfig;
