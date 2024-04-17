import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { FeatureItemClasses } from './FeatureItem.types';

const location = 'FeatureItem/variants/1';

let classes: FeatureItemClasses<ClassesProperty> = {};

classes = {
  root: tw``,
};

const featureItemClasses = new ClassesBuilder({ location, classes }).classes;

export default featureItemClasses;
