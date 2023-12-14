import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ImageClasses } from '../Image.types';
import ImageVariant from './ImageVariant';

const location = 'Image/variants/1';

let classes: ImageClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  image: tw`rounded-lg`,
};

const imageVariant: ImageVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default imageVariant;
