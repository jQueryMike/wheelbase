import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { FeaturesClasses } from '../../Features';

const classes = {
  root: {
    default: tw`space-y-4 bg-slate-900`,
    sm: tw`sm:space-y-6`,
    lg: tw`lg:space-y-8`,
  },
  heading: tw`mb-2 text-center text-6xl font-bold text-white`,
  itemsContainer: {
    default: tw`mt-14 grid gap-8`,
    sm: tw`sm:gap-10`,
    lg: tw`lg:gap-10`,
  },
} as FeaturesClasses<ClassesProperty>;

const featuresClasses = new ClassesBuilder({ location: 'Features/themes/2/features', classes }).classes;

export default featuresClasses;
