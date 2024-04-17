import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { FeaturesClasses } from './Features.types';

const location = 'Features/Features.classes';

let classes: FeaturesClasses<ClassesProperty> = {};

classes = {
  root: tw``,
};

const featuresClasses = new ClassesBuilder({ location, classes }).classes;

export default featuresClasses;
