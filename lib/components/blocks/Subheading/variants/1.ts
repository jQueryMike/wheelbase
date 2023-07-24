import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { SubheadingClasses } from '../Subheading';
import SubheadingVariant from './SubheadingVariant';

const location = 'Subheading/variants/1';

let classes: SubheadingClasses<ClassesProperty> = {};

classes = {
  root: tw`@container`,
  subheading: {
    default: tw`text-accent text-[18px] font-semibold`,
    lg: tw`lg:text-[20px]`,
  },
};

const subheadingVariant: SubheadingVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default subheadingVariant;
