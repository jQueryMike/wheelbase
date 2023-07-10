import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { TextContentClasses } from '../TextContent';
import TextContentVariant from './TextContentVariant';

const location = 'TextContent/variants/1';

let classes: TextContentClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  textContent: tw`prose max-w-full`,
};

const textContentVariant: TextContentVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default textContentVariant;
