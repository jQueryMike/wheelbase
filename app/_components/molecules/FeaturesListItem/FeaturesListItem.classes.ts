import { ClassesBuilder, tw } from '@utils';

import { FeaturesListItemClasses } from './FeaturesListItem.types';

const location = 'FeaturesListItem/FeaturesListItem.classes';

const classes: FeaturesListItemClasses = {
  root: tw``,
  indicatorContainer: tw`float-left inline-flex h-16 w-16 items-center justify-center`,
  featureListItem: tw`ml-20`,
};

const featuresListItemClasses = new ClassesBuilder({ location, classes }).classes;

export default featuresListItemClasses;
