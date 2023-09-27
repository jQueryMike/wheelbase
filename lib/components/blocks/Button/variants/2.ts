import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ButtonClasses } from '../Button';
import ButtonVariant from './ButtonVariant';

const location = 'Button/variants/2';

let classes: ButtonClasses<ClassesProperty> = {};

classes = {
  root: tw`inline-block`,
  button: {
    default: tw`relative inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md py-3 font-button text-sm font-semibold transition`,
    active: tw`active:scale-95`,
  },
  buttonLoading: tw`pointer-events-none`,
  buttonContent: tw`inline-flex items-center justify-center`,
  buttonContentLoading: tw`opacity-0`,
  loadingIconContainer: tw`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform`,
  loadingIcon: tw`fa-duotone fa-spinner-third fa-spin`,
  primaryButton: {
    default: tw`bg-primary text-primary-contrast`,
    hover: tw`hover:bg-accent hover:text-accent-contrast`,
  },
  secondaryButton: {
    default: tw`bg-secondary text-secondary-contrast`,
    hover: tw`hover:bg-secondary/80`,
  },
  accentButton: {
    default: tw`bg-accent text-accent-contrast`,
    hover: tw`hover:bg-accent/80`,
  },
  plainButton: {
    default: tw`border border-divider text-primary`,
    hover: tw`hover:border-primary/50`,
  },
  smallButton: tw`h-8 text-[16px]`,
  mediumButton: tw`h-11 text-[14px]`,
  largeButton: {
    default: tw`h-14 text-[20px]`,
    '@md': tw`@md:h-16`,
  },
  smallButtonContent: tw`space-x-2 px-3`,
  mediumButtonContent: tw`space-x-3 px-4`,
  largeButtonContent: tw`space-x-4 px-5`,
};

const buttonVariant: ButtonVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default buttonVariant;
