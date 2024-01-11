import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { FeaturesClasses } from '../Features.types';
import FeaturesVariant from './FeaturesVariant';

const location = 'Features/variants/5';

let classes: FeaturesClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`bg-white px-4 @container/features`,
    md: tw`md:px-6`,
    xl: tw`xl:px-8`,
  },
  rootInner: {
    default: tw`mx-auto max-w-[1600px] space-y-4`,
    '@xl/features': tw`@xl/features:space-y-6`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl/features': tw`@xl/features:space-y-6`,
  },
  itemsContainer: {
    default: tw`grid gap-8 @container/features-item`,
    '@xl/features': tw`@xl/features:grid-cols-3 @xl/features:gap-16`,
  },
  itemContainer: tw`flex flex-col`,
};

const featuresVariant: FeaturesVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default featuresVariant;
