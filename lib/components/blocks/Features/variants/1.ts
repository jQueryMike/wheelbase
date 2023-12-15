import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { FeaturesClasses, FeaturesItemClasses } from '../Features';
import FeaturesVariant from './FeaturesVariant';

const location = 'Features/variants/1';

let classes: FeaturesClasses<ClassesProperty> = {};
let itemClasses: FeaturesItemClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  rootInner: {
    default: tw``,
  },
  headingsContainer: {
    default: tw``,
  },
  contentAreaContainer: {
    default: tw``,
  },
  itemsContainer: {
    default: tw`relative mt-10 grid gap-8`,
    xs: tw`xs:grid-cols-2`,
    sm: tw`sm:gap-10`,
    lg: tw`lg:mt-14`,
    xl: tw`xl:grid-cols-4 xl:gap-14`,
  },
};

itemClasses = {
  itemRoot: {
    default: tw`relative space-y-2 text-center`,
    xs: tw`xs:text-left`,
  },
  itemIconContainer: {
    default: tw`relative inline-flex h-20 w-20 items-center justify-center rounded-lg bg-accent bg-opacity-5 text-[48px]`,
    md: tw`md:h-24 md:w-24 md:text-[64px]`,
  },
  itemIcon: {
    default: tw`text-accent`,
    md: tw``,
  },
  itemImageContainer: {
    default: tw`relative inline-flex h-20 w-20 items-center justify-center rounded-lg bg-accent bg-opacity-5`,
    md: tw`md:h-24 md:w-24`,
  },
  itemImage: {
    default: tw`h-12 w-12`,
    md: tw`md:h-16 md:w-16`,
  },
  itemContentAreaContainer: tw`space-y-2`,
};

const featuresVariant: FeaturesVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default featuresVariant;

