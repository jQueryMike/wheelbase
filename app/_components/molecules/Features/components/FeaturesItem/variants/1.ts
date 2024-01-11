import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { FeaturesItemClasses } from '../FeaturesItem.types';
import FeaturesItemVariant from './FeaturesItemVariant';

const location = 'Features/variants/1';

let classes: FeaturesItemClasses<ClassesProperty> = {};

classes = {
  itemRoot: {
    default: tw`space-y-10 text-center`,
    xs: tw`xs:text-left`,
  },
  itemIconContainer: {
    default: tw`bg-accent relative inline-flex h-20 w-20 items-center justify-center rounded-lg bg-opacity-5 text-[48px]`,
    md: tw`md:h-24 md:w-24 md:text-[64px]`,
  },
  itemIcon: {
    default: tw`text-accent`,
    md: tw``,
  },
  itemImageContainer: {
    default: tw`bg-accent relative inline-flex h-24 w-24 items-center justify-center rounded-lg bg-opacity-5 p-4`,
    md: tw`md:h-32 md:w-32`,
  },
  itemImageContainerInner: tw`relative h-full w-full`,
  itemImage: tw`relative h-full w-full`,

  itemContentAreaContainer: tw`space-y-2`,
};
const featuresVariant: FeaturesItemVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default featuresVariant;
