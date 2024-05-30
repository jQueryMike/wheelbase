import { ClassesBuilder, tw } from '@utils';

import { ImageBlockClasses } from './ImageBlock.types';

const location = 'ImageBlock/ImageBlock.classes';

const classes: ImageBlockClasses = {
  root: tw``,
  rootFullscreen: tw`relative overflow-hidden w-full max-h-[360px] md:max-h-[420] lg:md:max-h-[500] aspect-[1/1] md:aspect-[3/1] lg:aspect-[4/1] lg:max-h-[500px]`,
  imageContainer: tw``,
  imageContainerFullscreen: tw`absolute inset-0`,
  image: tw``,
  imageFullscreen: tw`h-full w-full object-cover object-center`,
};

const imageBlockClasses = new ClassesBuilder({ location, classes }).classes;

export default imageBlockClasses;
