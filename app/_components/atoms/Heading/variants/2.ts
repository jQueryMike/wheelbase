import { ClassesBuilder, ClassesProperty, tw } from '@utils';
import { HeadingClasses } from '../Heading.types';
import HeadingVariant from './HeadingVariant';

const location = 'Heading/variants/2';

let classes: HeadingClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw``,
  },
  heading: tw`font-heading text-heading text-balance font-bold leading-[1.1] tracking-tighter`,
  headingExtraLarge: {
    default: tw`text-[40px]`,
    lg: tw`lg:text-[46px]`,
    xl: tw`xl:text-[56px]`,
  },
  headingLarge: {
    default: tw`relative text-[36px]`,
    before: tw`before:bg-accent before:absolute before:-top-4 before:left-1/2 before:h-[6px] before:w-[3.5rem] before:-translate-x-1/2 before:transform before:rounded-sm before:content-[""]`,
    lg: tw`lg:text-[40px]`,
    xl: tw`xl:text-[44px]`,
  },
  headingMedium: {
    default: tw`relative text-[30px]`,
    before: tw`before:bg-accent before:absolute before:-top-4 before:left-0 before:h-[6px] before:w-[3.5rem] before:rounded-sm before:content-[""]`,
    lg: tw`lg:text-[34px]`,
    xl: tw`xl:text-[36px]`,
  },
  headingSmall: {
    default: tw`text-[20px]`,
    lg: tw`lg:text-[22px]`,
    xl: tw`xl:text-[24px]`,
  },
  headingExtraSmall: {
    default: tw`text-[16px]`,
    lg: tw`lg:text-[18px]`,
  },
};

const headingVariant: HeadingVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default headingVariant;