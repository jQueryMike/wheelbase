import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { SubheadingClasses } from '../Subheading';
import SubheadingVariant from './SubheadingVariant';

const location = 'Subheading/variants/2';

let classes: SubheadingClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  subheading: {
    default: tw`text-[16px] font-medium leading-[1.75]`,
    lg: tw`lg:text-[18px]`,
    xl: tw`xl:text-[20px]`,
  },
};

const subheadingVariant: SubheadingVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default subheadingVariant;
