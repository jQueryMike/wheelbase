import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { TextClasses } from '../Text';
import TextVariant from './TextVariant';

const location = 'TextContent/variants/1';

let classes: TextClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  textContent: tw`prose max-w-full`,
};

const textContentVariant: TextVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default textContentVariant;
