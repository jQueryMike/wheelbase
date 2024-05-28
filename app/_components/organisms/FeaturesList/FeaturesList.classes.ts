import { ClassesBuilder, tw } from '@utils';

import { FeaturesListClasses } from './FeaturesList.types';

const location = 'FeaturesList/FeaturesList.classes';

const classes: FeaturesListClasses = {
  root: tw``,
  container: tw`container mx-auto`,
  headingContainer: tw`text-center`,
  featuresWrapper: tw`grid gap-8 md:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20`,
  imageWrapper: tw`flex h-full w-full items-center object-cover`,
  imageWrapperReverse: tw`order-2 flex h-full w-full items-center object-cover`,
  image: tw`h-full w-full object-cover`,
  featuresListWrapper: tw`flex items-center`,
  featuresListWrapperReverse: tw`order-1 flex items-center`,
  featuresList: tw`space-y-8`,
};

const featuresListClasses = new ClassesBuilder({ location, classes }).classes;

export default featuresListClasses;
