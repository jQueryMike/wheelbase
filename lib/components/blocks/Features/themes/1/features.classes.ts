import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { FeaturesClasses } from '../../Features';

const classes = {
  root: {
    default: tw`space-y-4 p-4`,
    sm: tw`sm:space-y-6 sm:p-6`,
    lg: tw`lg:space-y-8 lg:p-8`,
  },
  heading: tw`-mb-2 text-3xl font-bold text-gray-800`,
  subheading: tw`text-xl font-bold text-gray-500`,
  itemsContainer: {
    default: tw`mb-14 mt-8 grid gap-8`,
    sm: tw`sm:grid-cols-2 sm:gap-10`,
    lg: tw`lg:grid-cols-3 lg:gap-10`,
  },
} as FeaturesClasses<ClassesProperty>;

const featuresClasses = new ClassesBuilder({ location: 'Features/themes/1/features', classes }).classes;

export default featuresClasses;
