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
    default: tw`grid gap-5`,
    sm: tw`sm:grid-cols-2`,
    xl: tw`xl:grid-cols-3`,
  },
};

itemClasses = {
  root: {
    default: tw`group relative flex h-[340px] cursor-pointer flex-col justify-between p-10`,
    after: tw`after:absolute after:inset-0 after:z-20 after:bg-black/50 after:transition after:duration-150`,
    hover: {
      after: tw`hover:after:bg-[rgba(120,120,120,0.5)]`,
    },
  },
  imageContainer: tw`absolute inset-0 z-10`,
  contentAreaContainer: tw`flex h-full flex-col`,
  headingContainer: tw`relative z-30 pb-4 drop-shadow-[0_0_3px_rgba(0,0,0,0.5)]`,

  textContentContainer: {
    default: tw`relative z-30 grow opacity-0 drop-shadow-[0_0_3px_rgba(0,0,0,0.5)] transition duration-150`,
    'group-hover': tw`group-hover:opacity-100`,
  },
  buttonContainer: {
    default: tw`relative z-30 opacity-0 transition duration-150`,
    'group-hover': tw`group-hover:opacity-100`,
  },
};

const featuresVariant: FeaturesVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default featuresVariant;
