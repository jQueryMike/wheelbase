import { Grid } from '@components/_layouts/Grid';
import { Heading } from '@components/atoms';
// eslint-disable-next-line import/no-cycle
import { FeatureItem } from '@components/molecules/FeatureItem';
import { BaseComponent } from '@components/utils/BaseComponent';
import { Block } from '@types';
import { buildClasses } from '@utils/buildClasses';

import featuresClasses from './Features.classes';
import { FeaturesProps } from './Features.types';

const Features = async ({ heading, subheading, featuresBlock, items, overrides, ...rest }: FeaturesProps & Block) => {
  const classes = buildClasses(featuresClasses, overrides);
  const resolvedHeading = heading ? await Heading(heading) : undefined;
  const resolvedSubheading = subheading
    ? await Heading({ ...subheading, 'data-testid': 'subheading', textType: 'subheading' })
    : undefined;
  return (
    <BaseComponent {...rest}>
      <div className={classes.rootInner}>
        <div className={classes.container}>
          {(heading || subheading) && (
            <div data-testid="headings-container" className={classes.headingContainer}>
              {resolvedHeading}
              {resolvedSubheading}
            </div>
          )}
          <Grid styling={featuresBlock.styling}>
            {items?.length &&
              items?.map((item: any) => (
                <FeatureItem contentArea={item.contentArea} icon={item.icon} styling={item.styling} />
              ))}
          </Grid>
        </div>
      </div>
    </BaseComponent>
  );
};

export default Features;
