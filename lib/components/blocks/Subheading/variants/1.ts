import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { SubheadingClasses } from '../Subheading';
import SubheadingVariant from './SubheadingVariant';

const location = 'Subheading/variants/1';

let classes: SubheadingClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  subheading: {
    default: tw`text-base font-bold text-accent`,
    lg: tw`lg:text-xl`,
  },
};

const subheadingVariant: SubheadingVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default subheadingVariant;
