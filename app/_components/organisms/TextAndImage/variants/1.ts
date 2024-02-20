import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { TextAndImageClasses } from '../TextAndImage.types';
import TextAndImageVariant from './TextAndImageVariant';

const location = 'TextAndImage/variants/1';

let classes: TextAndImageClasses<ClassesProperty> = {};

classes = {
  root: tw`@container/image-with-text`,
  rootInner: {
    default: tw`flex flex-col items-center space-y-8`,
    '@xl/image-with-text': tw`@xl/image-with-text:space-y-10`,
    '@3xl/image-with-text': tw`@3xl/image-with-text:space-y-12`,
    '@5xl/image-with-text': tw`@5xl/image-with-text:flex-row @5xl/image-with-text:space-x-16 @5xl/image-with-text:space-y-0`,
  },
  container: {
    default: tw`container mx-auto grid h-full gap-6`,
    md: tw`md:grid-cols-2 md:gap-12`,
    lg: tw`lg:gap-16`,
    xl: tw`xl:gap-20`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl/image-with-text': tw`@xl/image-with-text:space-y-6`,
    '@5xl/image-with-text': tw`@5xl/image-with-text:w-[60%]`,
  },
  imageContainer: {
    default: tw`relative aspect-[4/3] w-full`,
    '@5xl/image-with-text': '@5xl/image-with-text:w-[40%]',
  },
  imageContainerReverse: {
    default: tw`relative order-1`,
  },
  image: tw`object-cover`,
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
};

const textBlockVariant: TextAndImageVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default textBlockVariant;
