import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { TextContentClasses } from '../../TextContent';

const classes = {
  root: tw``,
  textContent: tw`copy`,
} as TextContentClasses<ClassesProperty>;

const textContentClasses = new ClassesBuilder({ location: 'TextContent/themes/1/textContent', classes }).classes;

export default textContentClasses;
