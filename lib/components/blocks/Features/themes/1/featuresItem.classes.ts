import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { FeaturesItemClasses } from '../../Features';

const classes = {
  root: tw`flex flex-col`,
  iconContainer: tw`mb-3 flex h-10 w-10 items-center justify-center rounded-full text-2xl`,
  heading: tw`mb-1 text-lg font-bold text-gray-800`,
  content: tw`text-base text-gray-600`,
} as FeaturesItemClasses<ClassesProperty>;

const featuresItemClasses = new ClassesBuilder({ location: 'Features/themes/1/featuresItem', classes }).classes;

export default featuresItemClasses;
