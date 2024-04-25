import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { TextClasses } from './Text.types';

const location = 'TextContent/TextContent.classes';

let classes: TextClasses<ClassesProperty> = {};

classes = {
  root: tw`prose`,
  textContent: tw`max-w-full`,
};

const textContentClasses = new ClassesBuilder({ location, classes }).classes;

export default textContentClasses;
