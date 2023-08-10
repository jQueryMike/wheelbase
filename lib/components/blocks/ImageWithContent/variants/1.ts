import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ImageWithContentClasses } from '../ImageWithContent';
import ImageWithContentVariant from './ImageWithContentVariant';

const location = 'ImageWithContent/variants/1';

let classes: ImageWithContentClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`flex flex-col items-center space-y-8 @container`,
    '@xl': tw`@xlspace-y-10`,
    '@3xl': tw`@3xl:space-y-12`,
    '@5xl': tw`@5xl:flex-row @5xl:space-x-16 @5xl:space-y-0`,
  },
  contentContainer: {
    default: tw`space-y-4`,
    '@xl': tw`@xl:space-y-6`,
    '@5xl': tw`@5xl:w-[60%]`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl': tw`@xl:space-y-6`,
  },
  imageContainer: {
    default: tw`relative aspect-[4/3] w-full`,
    '@5xl': '@5xl:w-[40%]',
  },
};

const contentBlockVariant: ImageWithContentVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default contentBlockVariant;
