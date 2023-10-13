import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { FeaturesClasses, FeaturesItemClasses } from '../Features';
import FeaturesVariant from './FeaturesVariant';

const location = 'Features/variants/6';

let classes: FeaturesClasses<ClassesProperty> = {};
let itemClasses: FeaturesItemClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`bg-gradient-to-b from-custom1 to-white px-4 py-6 @container/features`,
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

itemClasses = {
  itemRoot: {
    default: tw`relative ml-[20px] flex h-full flex-col border-l-[5px] border-dashed border-secondary pl-[40px]`,
    md: tw`md:ml-[24px] md:pl-[48px]`,
  },
  itemIndicatorContainer: {
    default: tw`absolute left-0 top-0 flex h-10 w-10 translate-x-[-50%] items-center justify-center rounded-full bg-secondary`,
    lg: tw`lg:h-12 lg:w-12`,
  },
  itemIndicator: {
    default: tw`text-2xl font-bold text-white`,
    lg: tw`lg:text-3xl`,
  },
  itemContentAreaContainer: tw`pb-12`,
};

const featuresVariant: FeaturesVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default featuresVariant;
