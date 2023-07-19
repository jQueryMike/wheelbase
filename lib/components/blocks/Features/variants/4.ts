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
    default: tw`grid`,
    md: tw`md:grid-cols-2`,
    '2xl': tw`2xl:grid-cols-4`,
  },
};

itemClasses = {
  root: {
    default: tw`group relative flex cursor-pointer flex-col items-center justify-center p-12 transition-all duration-150`,
    after: tw`after:absolute after:inset-0 after:z-20 after:bg-gradient-to-b after:from-[rgba(16,17,18,.64)] after:to-[rgba(16,17,18,.56)] after:transition-all after:duration-150`,
    before: {
      default: tw`before:absolute before:bottom-4 before:right-4 before:z-30 before:h-12 before:w-12 before:border-b before:border-r before:border-white before:opacity-50`,
      xl: tw`xl:before:bottom-8 xl:before:right-8 xl:before:h-16 xl:before:w-16`,
    },

    md: {
      default: tw`md:aspect-[4/3]`,
      after: tw`md:after:opacity-50`,
      hover: {
        after: tw`md:hover:after:opacity-100`,
      },
    },
    '2xl': tw`2xl:aspect-square`,
  },
  imageContainer: tw`absolute inset-0 z-10`,

  contentAreaContainer: {
    default: tw`relative z-30 text-center`,
  },

  headingContainer: tw``,

  textContentContainer: {
    default: tw`overflow-hidden pt-4 text-center transition-all duration-150`,
    md: {
      default: tw`md:max-h-0 md:pt-0 md:opacity-0`,
      'group-hover': tw`md:group-hover:max-h-[200px] md:group-hover:pt-4 md:group-hover:opacity-100`,
    },
    '2xl': {
      'group-hover': tw`2xl:group-hover:pt-6`,
    },
  },
  buttonContainer: {
    default: tw`overflow-hidden pt-4 transition-all duration-150`,
    md: {
      default: tw`md:max-h-0 md:pt-0 md:opacity-0`,
      'group-hover': tw`md:group-hover:max-h-[70px] md:group-hover:pt-4 md:group-hover:opacity-100`,
    },
    '2xl': {
      'group-hover': tw`2xl:group-hover:pt-6`,
    },
  },
};

const featuresVariant: FeaturesVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default featuresVariant;
