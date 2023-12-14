import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { SubheadingClasses } from '../Subheading';
import SubheadingVariant from './SubheadingVariant';

const location = 'Subheading/variants/1';

let classes: SubheadingClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw``,
  },
  subheading: {
    default: tw`hacky-subheading text-balance text-[18px] font-medium leading-relaxed text-heading`,
    lg: tw`lg:text-[20px]`,
  },
};

const subheadingVariant: SubheadingVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default subheadingVariant;
