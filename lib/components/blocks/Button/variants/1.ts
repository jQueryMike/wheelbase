import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ButtonClasses } from '../Button';
import ButtonVariant from './ButtonVariant';

const location = 'Button/variants/1';

let classes: ButtonClasses<ClassesProperty> = {};

classes = {
  root: tw`inline-block`,
  button: tw`flex items-center justify-center whitespace-nowrap rounded-lg font-button font-semibold transition`,
  buttonLoading: tw`pointer-events-none`,
  buttonContent: tw`inline-flex items-center justify-center`,
  buttonContentLoading: tw`opacity-0`,
  loadingIconContainer: tw`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform`,
  loadingIcon: tw`fa-duotone fa-spinner-third fa-spin`,
  primaryButton: {
    default: tw`bg-accent text-accent-contrast`,
    hover: tw`hover:bg-primary`,
    active: tw`active:scale-95`,
  },
  secondaryButton: {
    default: tw`bg-secondary text-secondary-contrast`,
    hover: tw`hover:bg-secondary/80`,
    active: tw`active:scale-95`,
  },
  accentButton: {
    default: tw`bg-accent text-accent-contrast`,
    hover: tw`hover:bg-accent/80`,
    active: tw`active:scale-95`,
  },
  plainButton: {
    default: tw`border border-divider text-primary`,
    hover: tw`hover:border-primary/50`,
    active: tw`active:scale-95`,
  },
  smallButton: tw`text-[12px]`,
  mediumButton: tw`text-[14px]`,
  largeButton: tw`text-[16px]`,
  smallButtonContent: tw`space-x-2 p-2 px-3`,
  mediumButtonContent: tw`space-x-3 p-3 px-4`,
  largeButtonContent: tw`space-x-4 p-4 px-5`,
};

const buttonVariant: ButtonVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default buttonVariant;
