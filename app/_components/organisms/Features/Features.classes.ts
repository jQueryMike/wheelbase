import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { FeaturesClasses } from './Features.types';

const location = 'Features/Features.classes';

let classes: FeaturesClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  container: {
    default: tw`container mx-auto grid h-full gap-6`,
  },
  headingContainer: tw`text-center`
};

const featuresClasses = new ClassesBuilder({ location, classes }).classes;

export default featuresClasses;
