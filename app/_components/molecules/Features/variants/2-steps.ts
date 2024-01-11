import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { FeaturesClasses } from '../Features.types';
import FeaturesVariant from './FeaturesVariant';

const location = 'Features/variants/2-steps';

let classes: FeaturesClasses<ClassesProperty> = {};

classes = {
  itemsContainer: {
    default: tw`grid grid-cols-1 gap-8`,
  },
};

const featuresVariant: FeaturesVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default featuresVariant;
