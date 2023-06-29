import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { FeaturesItemClasses } from '../../Features';

const classes = {
  root: tw`flex h-full flex-col justify-stretch rounded-3xl bg-slate-800 p-8`,
  iconContainer: tw`mx-auto mb-3 mt-2 flex items-center justify-center rounded-full text-[80px]`,
  heading: tw`mb-1 mt-2 text-center text-2xl font-bold text-slate-100`,
  contentContainer: tw`mt-8 text-center text-base text-slate-300`,
} as FeaturesItemClasses<ClassesProperty>;

const featuresItemClasses = new ClassesBuilder({ location: 'Features/themes/2/featuresItem', classes }).classes;

export default featuresItemClasses;
