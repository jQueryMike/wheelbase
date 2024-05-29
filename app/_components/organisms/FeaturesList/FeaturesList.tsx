import { Grid } from '@components/_layouts';
import { Heading, Image } from '@components/atoms';
import { FeaturesListItem } from '@components/molecules/FeaturesListItem';
import { BaseComponent } from '@components/utils';
import { Block } from '@types';
import { buildClasses } from '@utils/buildClasses';

import featuresListClasses from './FeaturesList.classes';
import { FeaturesListProps } from './FeaturesList.types';

const FeaturesList = ({
  heading,
  subheading,
  image1,
  indicator,
  featuresListBlock,
  items,
  overrides,
  styling,
  reverse,
}: FeaturesListProps & Block) => {
  const classes = buildClasses(featuresListClasses, overrides);
  const indicatorStyling = indicator.styling;
  return (
    <BaseComponent as="section" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'organism' }}>
      {(heading || subheading) && (
        <div data-testid="headings-container" className={classes.headingContainer}>
          {heading && <Heading {...heading} />}
          {subheading && <Heading {...subheading} data-testid="subheading" textType="subheading" />}
        </div>
      )}
      <div className={classes.container}>
        <Grid styling={featuresListBlock.styling}>
          <div className={reverse ? classes.imageWrapperReverse : classes.imageWrapper}>
            {image1?.src && <Image {...image1} />}
          </div>
          <div className={reverse ? classes.featuresListWrapperReverse : classes.featuresListWrapper}>
            <div className={classes.featuresList}>
              {items.length > 0 &&
                items.map((item: any, index: number) => (
                  <FeaturesListItem
                    {...item}
                    id={item.id}
                    indicator={{ value: index + 1, styling: indicatorStyling }}
                  />
                ))}
            </div>
          </div>
        </Grid>
      </div>
    </BaseComponent>
  );
};

export default FeaturesList;
