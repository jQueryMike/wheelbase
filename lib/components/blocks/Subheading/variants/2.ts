import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { SubheadingClasses } from '../Subheading';
import SubheadingVariant from './SubheadingVariant';

const location = 'Subheading/variants/2';

let classes: SubheadingClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw``,
  },
  subheading: {
    default: tw`text-balance text-base font-medium leading-relaxed text-heading`,
    lg: tw`lg:text-[18px]`,
  },
};

const subheadingVariant: SubheadingVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default subheadingVariant;
