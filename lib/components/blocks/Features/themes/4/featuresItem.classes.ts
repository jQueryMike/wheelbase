import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { FeaturesItemClasses } from '../../Features';

const classes = {
  root: tw`relative flex h-full flex-col justify-stretch rounded-xl bg-white/10 p-4`,
  iconContainer: tw`mx-auto w-[60px] text-center text-[60px]`,
  icon: tw`text-yellow-500`,
} as FeaturesItemClasses<ClassesProperty>;

const featuresItemClasses = new ClassesBuilder({ location: 'Features/themes/3/featuresItem', classes }).classes;

export default featuresItemClasses;
