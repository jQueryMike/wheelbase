import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { FeaturesClasses, FeaturesItemClasses } from '../Features';
import FeaturesVariant from './FeaturesVariant';

const location = 'Features/variants/5';

let classes: FeaturesClasses<ClassesProperty> = {};
let itemClasses: FeaturesItemClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`bg-white px-4 @container/features`,
    md: tw`md:px-6`,
    xl: tw`xl:px-8`,
  },
  rootInner: {
    default: tw`mx-auto max-w-[1600px] space-y-4`,
    '@xl/features': tw`@xl/features:space-y-6`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl/features': tw`@xl/features:space-y-6`,
  },
  itemsContainer: {
    default: tw`grid gap-8 @container/features-item`,
    '@xl/features': tw`@xl/features:grid-cols-3 @xl/features:gap-16`,
  },
  itemContainer: tw`flex flex-col`,
};

itemClasses = {
  itemRoot: {
    default: tw`relative flex h-full flex-col border-b-[5px] border-secondary`,
  },
  itemIcon: {
    default: tw`text-[64px] text-accent`,
    sm: tw`sm:text-[32px]`,
    md: tw`md:text-[48px]`,
    lg: tw`lg:text-[64px]`,
  },
  itemContentAreaContainer: tw`pb-12 pt-6`,
};

const featuresVariant: FeaturesVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default featuresVariant;
