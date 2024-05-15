// eslint-disable-next-line import/no-cycle
import BLOCKS from '@components/Blocks';
import { Icon } from '@components/atoms';
import { BaseComponent } from '@components/utils/BaseComponent';
import { buildClasses } from '@utils/buildClasses';
import { Suspense } from 'react';

import featureItemClasses from './FeatureItem.classes';
import { FeatureItemProps } from './FeatureItem.types';

const FeatureItem = ({ contentArea = [], icon, styling, overrides }: FeatureItemProps) => {
  const classes = buildClasses(featureItemClasses, overrides);
  const components = contentArea.map(({ name, id, ...props }: any) => [
    name,
    BLOCKS[name as keyof typeof BLOCKS],
    id,
    props,
  ]);
  return (
    <BaseComponent
      as="div"
      styling={styling}
      stylingOptions={{ atomicType: 'molecule' }}
      className="{itemContainer}"
      data-testid="feature-item"
    >
      <div className="{root} space-y-2 text-center xs:text-left">
        {icon && <Icon {...icon} data-testid="icon" />}
        {components?.length > 0 && (
          <div className={classes?.contentAreaContainer} data-testid="content-area">
            {components.map(([name, Component, id, props]: any) => (
              <Suspense fallback={<div>Loading {name}...</div>} key={id}>
                <Component {...props} />
              </Suspense>
            ))}
          </div>
        )}
      </div>
    </BaseComponent>
  );
};

export default FeatureItem;
