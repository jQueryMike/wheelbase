import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeadingClasses } from '../Heading';
import HeadingVariant from './HeadingVariant';

const location = 'Heading/variants/1';

let classes: HeadingClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  heading: tw`font-heading text-heading font-bold`,
  headingExtraLarge: {
    default: tw`text-[20px]`,
    sm: tw`sm:text-26px]`,
    md: tw`md:text-[30px]`,
    lg: tw`lg:text-[40px]`,
  },
  headingLarge: {
    default: tw`text-[18px]`,
    sm: tw`sm:text-22px]`,
    md: tw`md:text-[26px]`,
    lg: tw`lg:text-[32px]`,
  },
  headingMedium: {
    default: tw`text-[16px]`,
    sm: tw`sm:text-18px]`,
    md: tw`md:text-[20px]`,
    lg: tw`lg:text-[24px]`,
  },
  headingSmall: {
    default: tw`text-[16px]`,
    sm: tw`sm:text-16px]`,
    md: tw`md:text-[18px]`,
    lg: tw`lg:text-[22px]`,
  },
  headingExtraSmall: {
    default: tw`text-[16px]`,
    sm: tw`sm:text-16px]`,
    md: tw`md:text-[16px]`,
    lg: tw`lg:text-[18px]`,
  },
};

const headingVariant: HeadingVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default headingVariant;
