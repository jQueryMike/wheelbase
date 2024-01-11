import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { SubheadingClasses } from '../Subheading.types';
import SubheadingVariant from './SubheadingVariant';

const location = 'Subheading/variants/1';

let classes: SubheadingClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw``,
  },
  subheading: {
    default: tw`text-heading text-balance text-[18px] font-medium leading-relaxed`,
    lg: tw`lg:text-[20px]`,
  },
};

const subheadingVariant: SubheadingVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default subheadingVariant;
