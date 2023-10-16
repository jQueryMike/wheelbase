import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { FeaturesClasses, FeaturesItemClasses } from '../Features';
import FeaturesVariant from './FeaturesVariant';

const location = 'Features/variants/2-steps';

let classes: FeaturesClasses<ClassesProperty> = {};
let itemClasses: FeaturesItemClasses<ClassesProperty> = {};

classes = {
  itemsContainer: {
    default: tw`grid grid-cols-1 gap-8`,
  },
};

itemClasses = {
  itemIndicatorContainer: {
    default: tw`float-left inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent bg-opacity-5 text-[30px] font-extrabold text-accent`,
  },
  itemContentAreaContainer: tw`ml-20 space-y-2`,
};

const featuresVariant: FeaturesVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default featuresVariant;
