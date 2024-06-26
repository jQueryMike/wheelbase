import { Button, ButtonProps } from '@components/atoms';
import { BaseComponent } from '@components/utils';
import { Block } from '@types';
import { buildClasses } from '@utils/buildClasses';
import { Sizes } from '@utils/constants';
import cn from 'classnames';

import ButtonListClasses from './ButtonList.classes';
import { ButtonListProps } from './ButtonList.types';

const ButtonList = ({ gap = Sizes.Medium, items = [], overrides, styling }: ButtonListProps) => {
  if (items.length < 1) return null;
  const classes = buildClasses(ButtonListClasses, overrides);
  return (
    <BaseComponent as="div" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'molecule' }}>
      <ul className={cn(classes.list, classes[`gap-${gap}`])}>
        {items?.length > 0 &&
          items.map((item: ButtonProps & Block) => (
            <li key={item.id} className={classes.listItem}>
              <Button {...item} />
            </li>
          ))}
      </ul>
    </BaseComponent>
  );
};

export default ButtonList;
