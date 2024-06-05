import { ClassesBuilder, tw } from '@utils';

import { ImageBlockClasses } from './ImageBlock.types';

const location = 'ImageBlock/ImageBlock.classes';

const classes: ImageBlockClasses = {
  root: tw`relative overflow-hidden w-full aspect-[4/3] md:aspect-[16/9]`,
  rootFullscreen: tw`relative overflow-hidden w-full aspect-[4/3] md:aspect-[16/9]`,
  imageContainer: tw``,
  imageContainerFullscreen: tw`absolute inset-0`,
  image: tw`absolute top-0 left-0 h-full w-full object-contain`,
  imageFullscreen: tw`absolute top-1/2 left-1/2 h-full w-full translate-y-[-50%] translate-x-[-50%] object-cover`,
};

const imageBlockClasses = new ClassesBuilder({ location, classes }).classes;

export default imageBlockClasses;