import type { Config } from 'tailwindcss';

import generatedConfig from './tailwind.config.json';

const tailwindConfig: Config = {
  ...generatedConfig,
  plugins: [require('@tailwindcss/typography')],
};

export default tailwindConfig;
