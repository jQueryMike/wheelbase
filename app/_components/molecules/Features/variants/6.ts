import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { FeaturesClasses } from '../Features.types';
import FeaturesVariant from './FeaturesVariant';

const location = 'Features/variants/6';

let classes: FeaturesClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`from-custom1 bg-gradient-to-b to-white px-4 py-6 @container/features`,
    md: tw`md:px-6 md:py-16`,
    xl: tw`xl:px-8 xl:py-32`,
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
    default: tw`grid @container/features-item`,
  },
  itemContainer: {
    default: tw`flex flex-col [&>div]:last-of-type:border-none`,
  },
};

const featuresVariant: FeaturesVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default featuresVariant;
