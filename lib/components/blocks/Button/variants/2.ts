import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ButtonClasses } from '../Button';
import ButtonVariant from './ButtonVariant';

const location = 'Button/variants/2';

let classes: ButtonClasses<ClassesProperty> = {};

classes = {
  root: tw`inline-block`,
  button: tw`inline-flex transform items-center justify-center rounded-full font-semibold transition`,
  primaryButton: {
    default: tw`bg-primary text-primary-contrast`,
    hover: tw`hover:scale-105 hover:bg-primary/80`,
  },
  accentButton: {
    default: tw`border-2 border-accent text-primary`,
    hover: tw`hover:scale-105`,
  },
  plainButton: {
    default: tw`border-2 border-transparent bg-primary/5 text-primary`,
    hover: tw`hover:scale-105 hover:border-primary/5 hover:bg-white`,
  },
  smallButton: tw`h-8 space-x-2 px-3 text-sm`,
  mediumButton: tw`text-md h-10 space-x-3 px-4`,
  largeButton: tw`h-12 space-x-4 px-5 text-lg`,
};

const buttonVariant: ButtonVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default buttonVariant;