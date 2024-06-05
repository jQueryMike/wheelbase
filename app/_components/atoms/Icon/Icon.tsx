import { BaseComponent } from '@components/utils/BaseComponent';
import { buildClasses } from '@utils/buildClasses';
import iconClasses from './Icon.classes';
import { IconProps } from './Icon.types';

const Icon = ({ icon, styling, overrides }: IconProps) => {
  const classes = buildClasses(iconClasses, overrides);
  return (
    <BaseComponent
      datatestid="icon"
      className={classes.root}
      as="div"
      styling={styling}
      stylingOptions={{ atomicType: 'atom', textType: 'icon' }}
    >
      {icon && <i className={`${icon}`} data-testid="icon-svg" />}
    </BaseComponent>
  );
};

export default Icon;
