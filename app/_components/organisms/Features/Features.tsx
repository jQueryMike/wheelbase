import cn from 'classnames'
import { Heading } from '@components/atoms';
import { BaseComponent } from '@components/utils/BaseComponent';
import { Grid } from '@components/_layouts/Grid';
// eslint-disable-next-line import/no-cycle
import { FeatureItem } from '@components/molecules/FeatureItem';
import { buildClasses } from '@utils/buildClasses';
import { buildConfig } from '@utils/buildConfig';
import { Block } from '@types';

import featuresClasses from './Features.classes'
import { FeaturesProps } from './Features.types';

const Features = async ({ 
  heading,
  subheading,
  featuresBlock,
  items,
  overrides,
  ...rest }: FeaturesProps & Block) => {
  const classes = buildClasses(featuresClasses, overrides);
  const resolvedHeading = heading ? await Heading(heading) : undefined;
  const resolvedSubheading = subheading
    ? await Heading({ ...subheading, 'data-testid': 'subheading', textType: 'subheading' })
    : undefined;
  // console.log("Expected features: ", { features })
  return (
    <BaseComponent {...rest}>
      <div className={classes.rootInner}>
        <div className={classes.container}>{(heading || subheading) && (
          <div data-testid="headings-container">
            {resolvedHeading}
            {resolvedSubheading}
          </div>
          // Features Block Grid for Items
        )}
          <Grid styling={featuresBlock.styling}>
            {items?.map((item: any, index: number) => {
              // console.log({item}, item.content)
              // eslint-disable-next-line react/no-array-index-key
              return (<FeatureItem contentArea={item.contentArea} icon={item.icon} key={`item-${index}`} styling={item.styling} />)
            })}
          </Grid>
          {/* <div className={cn(classes.featuresBlock, [`gap-${columnGap}`, `sm:grid-cols-1`, `md:grid-cols-2`, `lg:grid-cols-${columns}`])}>
            
          </div> */}
        </div>
      </div>
    </BaseComponent>
  );
};

export default Features;
