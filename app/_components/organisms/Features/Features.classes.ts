import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { FeaturesClasses } from './Features.types';

const location = 'Features/Features.classes';

let classes: FeaturesClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  headingContainer: tw`text-center`
};

const featuresClasses = new ClassesBuilder({ location, classes }).classes;

export default featuresClasses;
