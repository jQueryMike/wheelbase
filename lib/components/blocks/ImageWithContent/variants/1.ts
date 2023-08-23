import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ImageWithContentClasses } from '../ImageWithContent';
import ImageWithContentVariant from './ImageWithContentVariant';

const location = 'ImageWithContent/variants/1';

let classes: ImageWithContentClasses<ClassesProperty> = {};

classes = {
  root: tw`@container/image-with-content`,
  rootInner: {
    default: tw`flex flex-col items-center space-y-8`,
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
