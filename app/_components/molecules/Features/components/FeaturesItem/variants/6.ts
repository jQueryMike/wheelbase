import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { FeaturesItemClasses } from '../FeaturesItem.types';
import FeaturesItemVariant from './FeaturesItemVariant';

const location = 'Features/variants/6';

let classes: FeaturesItemClasses<ClassesProperty> = {};

classes = {
  itemRoot: {
    default: tw`border-secondary relative ml-[20px] flex h-full flex-col border-l-[5px] border-dashed pl-[40px]`,
    md: tw`md:ml-[24px] md:pl-[48px]`,
  },
  itemIndicatorContainer: {
    default: tw`bg-secondary absolute left-0 top-0 flex h-10 w-10 translate-x-[-50%] items-center justify-center rounded-full`,
    lg: tw`lg:h-12 lg:w-12`,
  },
  itemIndicator: {
    default: tw`text-2xl font-bold text-white`,
    lg: tw`lg:text-3xl`,
  },
  itemContentAreaContainer: tw`pb-12`,
};

const featuresVariant: FeaturesItemVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default featuresVariant;
