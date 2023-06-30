import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeadingClasses } from '../../Heading';

const classes = {
  root: tw`mb-2 inline-block bg-black px-3 py-2 text-white`,
  heading: {
    default: tw`text-heading text-xl font-bold`,
    sm: tw`sm:text-2xl`,
    lg: tw`lg:text`,
  },
} as HeadingClasses<ClassesProperty>;

const headingClasses = new ClassesBuilder({ location: 'Heading/themes/1/heading', classes }).classes;

export default headingClasses;
