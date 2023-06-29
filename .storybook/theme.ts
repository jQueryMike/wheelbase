import { create } from '@storybook/theming/create';

const ClickWebLogo = require('./click-web-logo.svg') as string;

export default create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  //  Brand
  brandTitle: 'Click Web UI Storybook',
  brandImage: ClickWebLogo,
  brandTarget: '_self',

  // Colors
  colorPrimary: '#f58020',
  colorSecondary: '#121643',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#DADCE2',
  appBorderRadius: 0,

  // Text colors
  textColor: '#121643',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#121643',
  barSelectedColor: '#f58020',
  barBg: '#F5F6F7',

  // Form colors
  inputBg: '#F5F6F7',
  inputBorder: '#DADCE2',
  inputTextColor: '#121643',
  inputBorderRadius: 8,
});
