import { BaseComponent } from '@components/utils/BaseComponent';
import { buildClasses } from '@utils/buildClasses';
import iconClasses from './Icon.classes';

import { IconProps } from './Icon.types';

const Icon = ({ icon, styling, overrides }: IconProps) => {
  const classes = buildClasses(iconClasses, overrides);
  return (
    <BaseComponent className={classes.root} as="div" styling={styling} stylingOptions={{ atomicType: 'atom' }}>
      <i className={`${icon}`} />
    </BaseComponent>
  );
};

export default Icon;
