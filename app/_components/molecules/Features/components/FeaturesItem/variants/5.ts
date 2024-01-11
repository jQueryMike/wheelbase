import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { FeaturesItemClasses } from '../FeaturesItem.types';
import FeaturesItemVariant from './FeaturesItemVariant';

const location = 'Features/variants/5';

let classes: FeaturesItemClasses<ClassesProperty> = {};

classes = {
  itemRoot: {
    default: tw`border-secondary relative flex h-full flex-col border-b-[5px]`,
  },
  itemIcon: {
    default: tw`text-accent text-[64px]`,
    sm: tw`sm:text-[32px]`,
    md: tw`md:text-[48px]`,
    lg: tw`lg:text-[64px]`,
  },
  itemContentAreaContainer: tw`pb-12 pt-6`,
};
const featuresVariant: FeaturesItemVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default featuresVariant;
