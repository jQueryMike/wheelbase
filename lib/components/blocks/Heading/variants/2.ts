import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeadingClasses } from '../Heading';
import HeadingVariant from './HeadingVariant';

const location = 'Heading/variants/2';

let classes: HeadingClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  heading: tw`text-balance font-heading font-semibold leading-[1.1] tracking-tighter text-heading`,
  headingExtraLarge: {
    default: tw`text-[40px]`,
    sm: tw`sm:text-[40px]`,
    md: tw`md:text-[40px]`,
    lg: tw`lg:text-[46px]`,
    xl: tw`xl:text-[56px]`,
  },
  headingLarge: {
    default: tw`relative text-center text-[36px]`,
    before: tw`before:absolute before:-top-4 before:left-1/2 before:h-[6px] before:w-[2.5rem] before:-translate-x-1/2 before:transform before:rounded-[1px] before:bg-primary before:content-[""]`,
    sm: tw`sm:text-[36px]`,
    md: tw`md:text-[36px]`,
    lg: tw`lg:text-[40px]`,
    xl: tw`xl:text-[44px]`,
  },
  headingMedium: {
    default: tw`text-[20px]`,
    md: tw`md:text-[20px]`,
    lg: tw`lg:text-[22px]`,
    xl: tw`xl:text-[24px]`,
  },
  headingSmall: {
    default: tw`text-[18px]`,
    sm: tw`sm:text-[18px]`,
    md: tw`md:text-[18px]`,
    lg: tw`lg:text-[20px]`,
  },
  headingExtraSmall: {
    default: tw`text-[16px]`,
    sm: tw`sm:text-[16px]`,
    lg: tw`lg:text-[18px]`,
  },
};

const headingVariant: HeadingVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default headingVariant;
