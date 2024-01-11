import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { FeaturesItemClasses } from '../FeaturesItem.types';
import FeaturesItemVariant from './FeaturesItemVariant';

const location = 'Features/variants/2-contacts';

let classes: FeaturesItemClasses<ClassesProperty> = {};

classes = {
  itemRoot: {
    default: tw`bg-accent bg-opacity-5`,
    xs: tw`xs:text-left`,
  },
  itemImageContainer: {
    default: tw``,
  },
  itemIconContainer: {
    default: tw`bg-accent relative inline-flex h-20 w-20 items-center justify-center rounded-lg bg-opacity-5 text-[48px]`,
    md: tw`md:h-24 md:w-24 md:text-[64px]`,
  },
  itemIcon: {
    default: tw`text-accent`,
    md: tw``,
  },
  itemContentAreaContainer: tw`space-y-2 p-4`,
};
const featuresVariant: FeaturesItemVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default featuresVariant;
