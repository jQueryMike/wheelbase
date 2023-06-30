import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeadingClasses } from '../../Heading';

const classes = {
  root: tw`mb-2 inline-block border-b-4 border-red-600 pb-2`,
  heading: {
    default: tw`text-heading text-xl font-bold`,
    sm: tw`sm:text-2xl`,
    lg: tw`lg:text`,
  },
} as HeadingClasses<ClassesProperty>;

const headingClasses = new ClassesBuilder({ location: 'Heading/themes/1/heading', classes }).classes;

export default headingClasses;
