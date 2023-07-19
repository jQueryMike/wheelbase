import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { FeaturesClasses, FeaturesItemClasses } from '../Features';
import FeaturesVariant from './FeaturesVariant';

const location = 'Features/variants/1';

let classes: FeaturesClasses<ClassesProperty> = {};
let itemClasses: FeaturesItemClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`space-y-4`,
    sm: tw`sm:space-y-6`,
    lg: tw`lg:space-y-8`,
  },
  headingsContainer: tw`space-y-4`,
  contentAreaContainer: {
    default: tw`space-y-4`,
    sm: tw`sm:space-y-6`,
    lg: tw`lg:space-y-8`,
  },
  itemsContainer: {
    default: tw`grid gap-8 py-6`,
    sm: tw`sm:grid-cols-2 sm:gap-10`,
    lg: tw`lg:grid-cols-3 lg:gap-16`,
    xl: tw`xl:grid-cols-4`,
  },
};

itemClasses = {
  root: tw`flex flex-col space-y-4`,
  iconContainer: tw``,
  icon: tw`text-3xl text-accent`,
  imageContainer: tw`relative aspect-[4/3] w-full`,
  contentAreaContainer: tw`space-y-6`,
};

const featuresVariant: FeaturesVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default featuresVariant;
