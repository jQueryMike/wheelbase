import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { FeaturesClasses } from '../../Features';

const classes = {
  root: {
    default: tw`space-y-4`,
  },
  itemsContainer: {
    default: tw`grid gap-4`,
    sm: tw`sm:grid-cols-2 sm:gap-6`,
    lg: tw`lg:grid-cols-4 lg:gap-8`,
  },
} as FeaturesClasses<ClassesProperty>;

const featuresClasses = new ClassesBuilder({ location: 'Features/themes/3/features', classes }).classes;

export default featuresClasses;
