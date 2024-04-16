import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { TextClasses } from './Text.types';

const location = 'TextContent/variants/1';

let classes: TextClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  textContent: tw`prose max-w-full`,
};

const textContentClasses = new ClassesBuilder({ location, classes }).classes;

export default textContentClasses;
