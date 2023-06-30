import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { FeaturesItemClasses } from '../../Features';

const classes = {
  root: tw`relative flex h-full flex-col justify-stretch rounded-3xl bg-white p-8`,
  indicatorContainer: tw`absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-2xl font-bold text-blue-800`,
  imageContainer: tw`mx-auto mb-6 mt-2`,
} as FeaturesItemClasses<ClassesProperty>;

const featuresItemClasses = new ClassesBuilder({ location: 'Features/themes/3/featuresItem', classes }).classes;

export default featuresItemClasses;
