import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeadingClasses } from '../Heading';
import HeadingVariant from './HeadingVariant';

const location = 'Heading/variants/1';

let classes: HeadingClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  heading: tw`font-heading font-bold leading-tight text-heading`,
  headingExtraLarge: {
    default: tw`text-[26px]`,
    sm: tw`sm:text-[32px]`,
    md: tw`md:text-[36px]`,
    lg: tw`lg:text-[40px]`,
    xl: tw`xl:text-[48px]`,
  },
  headingLarge: {
    default: tw`text-[22px]`,
    sm: tw`sm:text-[25px]`,
    md: tw`md:text-[25px]`,
    lg: tw`lg:text-[28px]`,
    xl: tw`xl:text-[32px]`,
  },
  headingMedium: {
    default: tw`text-[18px]`,
    sm: tw`sm:text-[20px]`,
    lg: tw`lg:text-[22px]`,
    xl: tw`xl:text-[24px]`,
  },
  headingSmall: {
    default: tw`text-[16px]`,
    sm: tw`sm:text-[16px]`,
    md: tw`md:text-[18px]`,
    lg: tw`lg:text-[20px]`,
  },
  headingExtraSmall: {
    default: tw`text-[14px]`,
    sm: tw`sm:text-[16px]`,
    lg: tw`lg:text-[18px]`,
  },
};

const headingVariant: HeadingVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default headingVariant;
