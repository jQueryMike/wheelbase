import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeadingClasses } from '../../Heading';

const classes = {
  heading: {
    default: tw`text-lg font-bold text-white`,
  },
} as HeadingClasses<ClassesProperty>;

const headingClasses = new ClassesBuilder({ location: 'Heading/themes/1/heading', classes }).classes;

export default headingClasses;
