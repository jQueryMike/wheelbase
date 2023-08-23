import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ButtonClasses } from '../Button';
import ButtonVariant from './ButtonVariant';

const location = 'Button/variants/1';

let classes: ButtonClasses<ClassesProperty> = {};

classes = {
  root: tw`inline-block`,
  button: tw`relative inline-flex items-center justify-center rounded-lg font-semibold transition-all`,
  buttonLoading: tw`pointer-events-none`,
  buttonContent: tw`inline-flex items-center justify-center`,
  buttonContentLoading: tw`opacity-0`,
  loadingIconContainer: tw`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform`,
  loadingIcon: tw`fa-duotone fa-spinner-third fa-spin`,
  primaryButton: {
    default: tw`bg-primary text-primary-contrast`,
    hover: tw`hover:bg-primary/80`,
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
  mediumButton: tw`h-10 text-[18px]`,
  largeButton: tw`h-12 text-[20px]`,
  smallButtonContent: tw`space-x-2 px-3`,
  mediumButtonContent: tw`space-x-3 px-4`,
  largeButtonContent: tw`space-x-4 px-5`,
};

const buttonVariant: ButtonVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default buttonVariant;
