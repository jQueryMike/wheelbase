import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { FeaturesClasses, FeaturesItemClasses } from '../Features';
import FeaturesVariant from './FeaturesVariant';

const location = 'Features/variants/1';

let classes: FeaturesClasses<ClassesProperty> = {};
let itemClasses: FeaturesItemClasses<ClassesProperty> = {};

classes = {
  root: tw`@container/features`,
  rootInner: {
    default: tw`space-y-4`,
    '@xl/features': tw`@xl/features:space-y-6`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl/features': tw`@xl/features:space-y-6`,
  },
  itemsContainer: {
    default: tw`grid gap-8 py-6 @container/features-item`,
    '@xl/features': tw`@xl/features:gap-10`,
    '@3xl/features': tw`@3xl/features:grid-cols-2 @3xl:gap-12`,
    '@5xl/features': tw`@5xl/features:grid-cols-3 @5xl:gap-16`,
  },
};

itemClasses = {
  root: {
    default: tw`relative flex flex-col space-y-4`,
    '@xl/features-item': tw`@xl/features-item:space-y-5`,
    '@3xl/features-item': tw`@3xl/features-item:space-y-6`,
  },
  indicatorContainer: tw`flex h-10 w-10 items-center justify-center rounded-full bg-primary`,
  indicator: tw`text-[20px] font-semibold leading-[20px] text-primary-contrast`,
  iconContainer: tw``,
  icon: tw`text-[40px] text-accent`,
  imageContainer: tw`relative aspect-[4/3] w-full`,
  contentAreaContainer: tw`space-y-4`,
};

const featuresVariant: FeaturesVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default featuresVariant;
