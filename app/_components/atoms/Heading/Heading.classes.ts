import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { HeadingClasses } from './Heading.types';

const location = 'Heading/Heading.classes';

let classes: HeadingClasses<ClassesProperty> = {};

classes = {
  root: tw``,
};

const headingClasses = new ClassesBuilder({ location, classes }).classes;

export default headingClasses;
