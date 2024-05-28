import { Heading, Text } from '@components/atoms';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import featuresListItemClasses from './FeaturesListItem.classes';
import { FeaturesListItemProps } from './FeaturesListItem.types';

const FeaturesListItem = ({ heading, text, indicator, styling, overrides }: FeaturesListItemProps) => {
  const classes = buildClasses(featuresListItemClasses, overrides);
  return (
    <BaseComponent as="div" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'molecule' }}>
      <BaseComponent styling={indicator?.styling} className={classes.indicatorContainer}>
        {indicator?.value}
      </BaseComponent>
      <div className={classes.featureListItem}>
        <Heading {...heading} />
        <Text {...text} />
      </div>
    </BaseComponent>
  );
};

export default FeaturesListItem;
