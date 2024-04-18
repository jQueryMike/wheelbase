
import cn from 'classnames';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import gridClasses from './Grid.classes';

import { GridProps } from './Grid.types';

const Grid = ({
  children,
  overrides,
  styling
}: GridProps) => {
  const classes = buildClasses(gridClasses, overrides);
  return (
    <BaseComponent
      as="div"
      className={cn(classes?.root)}
      styling={styling}
      stylingOptions={{ atomicType: 'molecule' }}
    >{children}</BaseComponent>
  )
};

export default Grid;
