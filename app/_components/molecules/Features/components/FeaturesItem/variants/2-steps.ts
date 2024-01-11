import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { FeaturesItemClasses } from '../FeaturesItem.types';
import FeaturesItemVariant from './FeaturesItemVariant';

const location = 'Features/variants/2-steps';

let classes: FeaturesItemClasses<ClassesProperty> = {};

classes = {
  itemIndicatorContainer: {
    default: tw`bg-accent text-accent float-left inline-flex h-16 w-16 items-center justify-center rounded-full bg-opacity-5 text-[30px] font-extrabold`,
  },
  itemContentAreaContainer: tw`ml-20 space-y-2`,
};
const featuresVariant: FeaturesItemVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default featuresVariant;
