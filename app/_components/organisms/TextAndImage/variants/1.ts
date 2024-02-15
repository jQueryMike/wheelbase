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
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl/image-with-text': tw`@xl/image-with-text:space-y-6`,
    '@5xl/image-with-text': tw`@5xl/image-with-text:w-[60%]`,
  },
  imageContainer: {
    default: tw`relative aspect-[4/3] w-full`,
    '@5xl/image-with-text': '@5xl/image-with-text:w-[40%]',
  },
  image: tw`object-cover`,
};

const textBlockVariant: TextAndImageVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default textBlockVariant;
