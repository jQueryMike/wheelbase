import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { FeaturesClasses, FeaturesItemClasses } from '../Features';
import FeaturesVariant from './FeaturesVariant';

const location = 'Features/variants/1';

let classes: FeaturesClasses<ClassesProperty> = {};
let itemClasses: FeaturesItemClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`space-y-4 @container`,
    '@xl': tw`@xl:space-y-6`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl': tw`@xl:space-y-6`,
  },
  itemsContainer: {
    default: tw`grid gap-8 py-6 @container`,
    '@xl': tw`@xl:gap-10`,
    '@3xl': tw`@3xl:grid-cols-2 @3xl:gap-12`,
    '@5xl': tw`@5xl:grid-cols-3 @5xl:gap-16`,
  },
};

itemClasses = {
  root: tw`relative flex flex-col space-y-4`,
  indicatorContainer: tw`bg-primary flex h-10 w-10 items-center justify-center rounded-full`,
  indicator: tw`text-primary-contrast text-[20px] font-semibold leading-[20px]`,
  iconContainer: tw``,
  icon: tw`text-accent text-[40px]`,
  imageContainer: tw`relative aspect-[4/3] w-full`,
  contentAreaContainer: tw`space-y-4`,
};

const featuresVariant: FeaturesVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default featuresVariant;
