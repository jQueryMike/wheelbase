import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { FeaturesItemClasses } from '../../Features';

const classes = {
  root: tw`flex flex-col space-y-4`,
  iconContainer: tw`mb-3 flex h-10 w-10 items-center justify-center rounded-full text-2xl`,
} as FeaturesItemClasses<ClassesProperty>;

const featuresItemClasses = new ClassesBuilder({ location: 'Features/themes/1/featuresItem', classes }).classes;

export default featuresItemClasses;
