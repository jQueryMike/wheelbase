import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ButtonClasses } from '../Button';
import ButtonVariant from './ButtonVariant';

const location = 'Button/variants/1';

let classes: ButtonClasses<ClassesProperty> = {};

classes = {
  root: tw`inline-block`,
  button: tw`inline-flex items-center justify-center rounded-lg font-semibold transition-all`,
  primaryButton: {
    default: tw`bg-primary text-primary-contrast`,
    hover: tw`hover:bg-primary/80`,
  },
  accentButton: {
    default: tw`bg-accent text-accent-contrast`,
    hover: tw`hover:bg-accent/80`,
  },
  plainButton: {
    default: tw`border-divider text-primary border`,
    hover: tw`hover:border-primary/50`,
  },
  smallButton: tw`h-8 space-x-2 px-3 text-[16px]`,
  mediumButton: tw`h-10 space-x-3 px-4 text-[18px]`,
  largeButton: tw`h-12 space-x-4 px-5 text-[20px]`,
};

const buttonVariant: ButtonVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default buttonVariant;
