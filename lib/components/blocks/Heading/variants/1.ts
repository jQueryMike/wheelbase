import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeadingClasses } from '../Heading';
import HeadingVariant from './HeadingVariant';

const location = 'Heading/variants/1';

let classes: HeadingClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  heading: tw`text-heading font-bold`,
  headingXl: {
    default: tw`text-[20px]`,
    sm: tw`sm:text-26px]`,
    md: tw`md:text-[30px]`,
    lg: tw`lg:text-[50px]`,
    xl: tw`xl:text-[70px]`,
  },
  headingLg: {
    default: tw`text-[18px]`,
    sm: tw`sm:text-22px]`,
    md: tw`md:text-[28px]`,
    lg: tw`lg:text-[40px]`,
    xl: tw`xl:text-[50px]`,
  },
  headingMd: {
    default: tw`text-[16px]`,
    sm: tw`sm:text-18px]`,
    md: tw`md:text-[20px]`,
    lg: tw`lg:text-[24px]`,
    xl: tw`xl:text-[30px]`,
  },
  headingSm: {
    default: tw`text-[16px]`,
    sm: tw`sm:text-16px]`,
    md: tw`md:text-[18px]`,
    lg: tw`lg:text-[22px]`,
    xl: tw`xl:text-[26px]`,
  },
  headingXs: {
    default: tw`text-[16px]`,
    sm: tw`sm:text-16px]`,
    md: tw`md:text-[16px]`,
    lg: tw`lg:text-[18px]`,
    xl: tw`xl:text-[22px]`,
  },
};

const headingVariant: HeadingVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default headingVariant;
