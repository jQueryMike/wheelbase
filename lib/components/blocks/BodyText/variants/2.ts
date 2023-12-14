import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { BodyTextClasses } from '../BodyText';
import BodyTextVariant from './BodyTextVariant';

const location = 'BodyText/variants/2';

let classes: BodyTextClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  rootInner: {
    default: tw`grid gap-8`,
    md: tw`md:grid-cols-2 md:gap-10`,
    lg: tw`lg:gap-14`,
    xl: tw`xl:gap-20`,
  },
  contentContainer: {
    default: tw`space-y-4`,
  },
  headingsContainer: {
    default: tw`space-y-4`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
  },

  imageContainer: {
    default: tw`relative aspect-[4/3] w-full`,
  },
};

const contentBlockVariant: BodyTextVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default contentBlockVariant;
