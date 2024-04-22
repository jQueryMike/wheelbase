import { Button } from '@components/atoms';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import { Sizes } from '@utils/constants';
import cn from 'classnames';

import ButtonListClasses from './ButtonList.classes';
import { ButtonListProps } from './ButtonList.types';

const ButtonList = async ({ gap = Sizes.Medium, items = [], overrides, styling }: ButtonListProps) => {
  if (items.length < 1) return null;
  const classes = buildClasses(ButtonListClasses, overrides);
  return (
    <BaseComponent as="div" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'molecule' }}>
      <ul className={cn(classes.list, classes[`gap-${gap}`])}>
        {items.map((item) => (
          <li key={item.id} className={classes.listItem}>
            <Button {...item} />
          </li>
        ))}
      </ul>
    </BaseComponent>
  );
};

export default ButtonList;
