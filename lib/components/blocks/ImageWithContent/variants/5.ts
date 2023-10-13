import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ImageWithContentClasses } from '../ImageWithContent';
import ImageWithContentVariant from './ImageWithContentVariant';

const location = 'ImageWithContent/variants/5';

let classes: ImageWithContentClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`px-4 py-8 @container/image-with-content`,
    md: tw`md:px-6 md:py-12`,
    lg: tw`lg:py-20`,
    xl: tw`xl:px-8 xl:py-20`,
  },
  rootInner: {
    default: tw`mx-auto flex w-full max-w-[1600px] flex-col items-center space-y-8`,
    '@xl/image-with-content': tw`@xl/image-with-content:space-y-10`,
    '@3xl/image-with-content': tw`@3xl/image-with-content:space-y-12`,
    '@5xl/image-with-content': tw`@5xl/image-with-content:flex-row @5xl/image-with-content:space-x-16 @5xl/image-with-content:space-y-0`,
  },
  contentContainer: {
    default: tw`space-y-4`,
    '@xl/image-with-content': tw`@xl/image-with-content:space-y-6`,
    '@5xl/image-with-content': tw`@5xl/image-with-content:w-[60%]`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl/image-with-content': tw`@xl/image-with-content:space-y-6`,
  },
  imageContainer: {
    default: tw`relative aspect-[4/3] w-full`,
    '@5xl/image-with-content': '@5xl/image-with-content:w-[40%]',
  },
};

const contentBlockVariant: ImageWithContentVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default contentBlockVariant;
