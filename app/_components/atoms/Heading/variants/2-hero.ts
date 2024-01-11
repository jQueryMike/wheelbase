import { ClassesBuilder, ClassesProperty, tw } from '@utils';
import { HeadingClasses } from '../Heading.types';
import HeadingVariant from './HeadingVariant';

const location = 'Heading/variants/2-hero';

let classes: HeadingClasses<ClassesProperty> = {};

classes = {
  heading: tw`text-balance font-bold leading-[1.1] tracking-tighter text-white`,
  headingExtraLarge: {
    default: tw`text-[40px]`,
    lg: tw`lg:text-[46px]`,
    xl: tw`xl:text-[56px]`,
  },
};

const headingVariant: HeadingVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default headingVariant;
