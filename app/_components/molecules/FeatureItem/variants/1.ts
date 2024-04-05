import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { FeatureItemClasses } from '../FeatureItem.types';
import FeatureItemVariant from './FeatureItemVariant';

const location = 'FeatureItem/variants/1';

let classes: FeatureItemClasses<ClassesProperty> = {};

classes = {
  root: tw``,
};

const featureItemVariant: FeatureItemVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default featureItemVariant;
