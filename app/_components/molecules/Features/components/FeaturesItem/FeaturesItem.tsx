// eslint-disable-next-line import/no-cycle
import { RenderBlocks } from '@components/Blocks';
import { Image } from '@components/atoms';

import { FeaturesItemProps } from './FeaturesItem.types';
import fallbackStyle from './variants/1';

const FeaturesItem = ({ classes = fallbackStyle.classes, contentArea, image, indicator }: FeaturesItemProps) => (
  <div className={classes?.itemRoot}>
    {indicator && (
      <div className={classes?.itemIndicatorContainer}>
        <div className={classes?.itemIndicator}>{indicator}</div>
      </div>
    )}
    {/* {icon && (
      <div className={classes?.itemIconContainer}>
        <Icon className={cn(icon, classes?.itemIcon)} />
      </div>
    )} */}
    {image && (
      <div className={classes?.itemImageContainer}>
        <div className={classes?.itemImageContainerInner}>
          <Image {...image} className={classes?.itemImage} />
        </div>
      </div>
    )}
    {contentArea && contentArea.length > 0 && (
      <div className={classes?.itemContentAreaContainer}>{contentArea.map(RenderBlocks)}</div>
    )}
  </div>
);

export default FeaturesItem;
