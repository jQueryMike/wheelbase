import { TextAndImageClasses } from './TextAndImage.types';
import { ClassesBuilder, ClassesProperty, tw } from '@utils';

const location = 'TextAndImage/TextAndImage.classes';

let classes: TextAndImageClasses<ClassesProperty> = {};

classes = {
  root: tw`@container/image-with-text`,
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
    default: tw`my-8 flex flex-col justify-center`,
    md: tw`md:my-16`,
    lg: tw`lg:my-20`,
    xl: tw`xl:my-14`,
  },
  textAndImageContentContainerReverse: {
    default: tw`order-2 my-8 flex flex-col justify-center`,
    md: tw`md:my-16`,
    lg: tw`lg:my-20`,
    xl: tw`xl:my-14`,
  },
  headingsContainer: {
    default: tw`space-y-2`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl/image-with-text': tw``,
  },
  imageContainer: {
    default: tw`relative`,
  },
  imageContainerReverse: {
    default: tw`relative order-1`,
  },
  imageAsBackground:
    '[&>div>img]:absolute [&>div>img]:top-1/2 [&>div>img]:left-1/2 [&>div>img]:h-full [&>div>img]:w-full [&>div>img]:translate-y-[-50%] [&>div>img]:translate-x-[-50%]',
  tint: 'absolute top-0 left-0 h-full w-full pointer-events-none z-10',
  image: tw`object-cover`,
};

const textAndImageClasses = new ClassesBuilder({ location, classes }).classes;

export default textAndImageClasses;
