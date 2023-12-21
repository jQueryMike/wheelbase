import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { BodyTextClasses } from '../BodyText';
import BodyTextVariant from './BodyTextVariant';

const location = 'BodyText/variants/1';

let classes: BodyTextClasses<ClassesProperty> = {};

classes = {
  root: tw`@container/image-with-content`,
  rootInner: {
    default: tw`flex flex-col items-stretch space-y-8`,
    '@xl/image-with-content': tw`@xl/image-with-content:space-y-10`,
    '@3xl/image-with-content': tw`@3xl/image-with-content:space-y-12`,
    '@5xl/image-with-content': tw`@5xl/image-with-content:flex-row @5xl/image-with-content:space-x-16 @5xl/image-with-content:space-y-0`,
  },
  contentContainer: {
    default: tw`space-y-4`,
    '@xl/image-with-content': tw`@xl/image-with-content:space-y-6`,
    '@5xl/image-with-content': tw`@5xl/image-with-content:w-[100%]`,
  },
  textContent: tw`prose max-w-full`,
};

const contentBlockVariant: BodyTextVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default contentBlockVariant;
