import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { FeaturesClasses } from '../Features.types';
import FeaturesVariant from './FeaturesVariant';

const location = 'Features/variants/1';

let classes: FeaturesClasses<ClassesProperty> = {};

classes = {
  root: tw``,
};

const featuresVariant: FeaturesVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default featuresVariant;
