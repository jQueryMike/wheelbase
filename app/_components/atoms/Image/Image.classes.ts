import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { ImageClasses } from './Image.types';

const location = 'Image/Image.classes';

let classes: ImageClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  image: tw`rounded-lg w-full h-auto`,
};

const imageClasses = new ClassesBuilder({ location, classes }).classes;

export default imageClasses;
