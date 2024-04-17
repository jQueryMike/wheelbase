import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { TextAndImageClasses } from './TextAndImage.types';

const location = 'TextAndImage/TextAndImage.classes';

let classes: TextAndImageClasses<ClassesProperty> = {};

classes = {
  root: tw`bg-body-alt @container/image-with-text`,
  rootInner: {
    default: tw``,
  },
  container: {
    default: tw`container mx-auto grid h-full gap-6`,
    md: tw`md:grid-cols-2 md:gap-12`,
    lg: tw`lg:gap-16`,
    xl: tw`xl:gap-20`,
  },
  textAndImageContentContainer: {
    default: tw`my-8 flex flex-col justify-center space-y-8`,
    md: tw`md:my-16 md:space-y-10`,
    lg: tw`lg:my-20 lg:space-y-12`,
    xl: tw`xl:my-14 xl:space-y-14`,
  },
  textAndImageContentContainerReverse: {
    default: tw`order-2 my-8 flex flex-col justify-center space-y-8`,
    md: tw`md:my-16 md:space-y-10`,
    lg: tw`lg:my-20 lg:space-y-12`,
    xl: tw`xl:my-14 xl:space-y-14`,
  },
  headingsContainer: {
    default: tw`space-y-2`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl/image-with-text': tw`@xl/image-with-text:space-y-6`,
  },
  imageContainer: {
    default: tw`relative`,
  },
  imageContainerReverse: {
    default: tw`relative order-1`,
  },
  image: tw`object-cover`,
};

const textAndImageClasses = new ClassesBuilder({ location, classes }).classes;

export default textAndImageClasses;
