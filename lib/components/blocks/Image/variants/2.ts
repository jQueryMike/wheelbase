import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ImageClasses } from '../Image.types';
import ImageVariant from './ImageVariant';

const location = 'Image/variants/2';

let classes: ImageClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  image: tw``,
};

const imageVariant: ImageVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default imageVariant;