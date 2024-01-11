import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { FeaturesClasses } from '../Features.types';
import FeaturesVariant from './FeaturesVariant';

const location = 'Features/variants/2';

let classes: FeaturesClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  rootInner: {
    default: tw``,
  },
  headingsContainer: {
    default: tw``,
  },
  contentAreaContainer: {
    default: tw``,
  },
  itemsContainer: {
    default: tw`mt-10 grid gap-8`,
    xs: tw`xs:grid-cols-2`,
    sm: tw`sm:gap-10`,
    lg: tw`lg:mt-14`,
    xl: tw`xl:grid-cols-4 xl:gap-14`,
  },
};

const featuresVariant: FeaturesVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default featuresVariant;
