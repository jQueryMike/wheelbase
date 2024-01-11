import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { FeaturesClasses } from '../Features.types';
import FeaturesVariant from './FeaturesVariant';

const location = 'Features/variants/2-contacts';

let classes: FeaturesClasses<ClassesProperty> = {};

classes = {
  root: tw`@container/features`,
  rootInner: {
    default: tw`space-y-4`,
  },
  headingsContainer: {
    default: tw``,
  },
  contentAreaContainer: {
    default: tw``,
  },
  itemsContainer: {
    default: tw`grid grid-cols-1 gap-4`,
    sm: tw`sm:grid-cols-2 sm:gap-6`,
  },
};


const featuresVariant: FeaturesVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default featuresVariant;
