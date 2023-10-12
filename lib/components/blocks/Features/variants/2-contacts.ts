import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { FeaturesClasses, FeaturesItemClasses } from '../Features';
import FeaturesVariant from './FeaturesVariant';

const location = 'Features/variants/2-contacts';

let classes: FeaturesClasses<ClassesProperty> = {};
let itemClasses: FeaturesItemClasses<ClassesProperty> = {};

classes = {
  root: tw`@container/features`,
  rootInner: {
    default: tw`space-y-4`,
  },
  headingsContainer: {
    default: tw``,
  },
  contentAreaContainer: {
    default: tw``,
  },
  itemsContainer: {
    default: tw`grid grid-cols-1 gap-4`,
    sm: tw`sm:grid-cols-2 sm:gap-6`,
  },
};

itemClasses = {
  itemRoot: {
    default: tw`bg-accent bg-opacity-5`,
    xs: tw`xs:text-left`,
  },
  itemImageContainer: {
    default: tw``,
  },
  itemIconContainer: {
    default: tw`relative inline-flex h-20 w-20 items-center justify-center rounded-lg bg-accent bg-opacity-5 text-[48px]`,
    md: tw`md:h-24 md:w-24 md:text-[64px]`,
  },
  itemIcon: {
    default: tw`text-accent`,
    md: tw``,
  },
  itemContentAreaContainer: tw`space-y-2 p-4`,
};

const featuresVariant: FeaturesVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default featuresVariant;
