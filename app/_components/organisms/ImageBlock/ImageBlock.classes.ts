import { ClassesBuilder, tw } from '@utils';

import { ImageBlockClasses } from './ImageBlock.types';

const location = 'ImageBlock/ImageBlock.classes';

const classes: ImageBlockClasses = {
  root: tw``,
};

const imageBlockClasses = new ClassesBuilder({ location, classes }).classes;

export default imageBlockClasses;
