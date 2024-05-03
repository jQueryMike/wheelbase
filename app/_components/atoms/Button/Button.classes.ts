import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { ButtonClasses } from './Button.types';

const location = 'Button/Button.classes';

let classes: ButtonClasses<ClassesProperty> = {};

classes = {
  root: tw`inline-block`,
  buttonContent: tw`flex items-center justify-center`,
  buttonContentLoading: tw`opacity-0`,
  primaryButton: {
    default: tw`bg-primary text-primary-contrast`,
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
    default: tw`border-divider border text-primary`,
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

const buttonClasses = new ClassesBuilder({ location, classes }).classes;

export default buttonClasses;
