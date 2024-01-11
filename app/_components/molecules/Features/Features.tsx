// eslint-disable-next-line import/no-cycle
import { RenderBlocks } from '@components/Blocks';

import { Headings } from '../Headings';
import { FeaturesProps } from './Features.types';
import { FeaturesItem } from './components/FeaturesItem';
import fallbackStyle from './variants/1';

const Features = ({
  classes = fallbackStyle.classes,
  headings,
  items = [],
  contentArea1 = [],
  contentArea2 = [],
}: FeaturesProps) => (
  <div className={classes?.root}>
    <div className={classes?.rootInner}>
      {headings && (
        <div className={classes?.headingsContainer}>
          <Headings {...headings} />
        </div>
      )}
      {contentArea1?.length > 0 && (
        <div className={classes?.contentAreaContainer}>{contentArea1.map(RenderBlocks)}</div>
      )}
      {items?.length > 0 && (
        <div className={classes?.itemsContainer}>
          {items.map((item: any) => (
            <div key={item.id} className={classes?.itemContainer}>
              <FeaturesItem {...item} />
            </div>
          ))}
        </div>
      )}
      {contentArea2?.length > 0 && (
        <div className={classes?.contentAreaContainer}>{contentArea2.map(RenderBlocks)}</div>
      )}
    </div>
  </div>
);

export default Features;
