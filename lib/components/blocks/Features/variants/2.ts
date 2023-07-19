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
    lg: tw`lg:grid-cols-3`,
  },
  itemContainer: {
    default: tw`cursor-pointer rounded-lg p-10 shadow-lg transition duration-150`,
    hover: tw`hover:scale-105 hover:shadow-xl`,
  },
};

itemClasses = {
  root: tw`flex flex-col items-center space-y-4`,
  iconContainer: tw`mx-auto mb-2 flex h-[60px] w-[60px] justify-center text-[50px]`,
  icon: tw`h-[50px] w-[50px] text-[50px] text-accent`,
  textContentContainer: tw`text-center`,
  contentAreaContainer: tw`space-y-6`,
};

const featuresVariant: FeaturesVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default featuresVariant;
