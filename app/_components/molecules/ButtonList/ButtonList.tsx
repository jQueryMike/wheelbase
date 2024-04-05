import { Button } from '@components/atoms';
import { buildClasses } from '@utils/buildClasses';
import { buildStyling } from '@utils/buildStyling';
import { Sizes } from '@utils/constants';
import cn from 'classnames';
import { AtomicType } from '@types';

import { ButtonListProps } from './ButtonList.types';

const BLOCK_TYPE: AtomicType = 'molecule';

const ButtonList = async ({ variant = '1', gap = Sizes.Medium, items = [], overrides, spacing }: ButtonListProps) => {
  if (items.length < 1) return null;
  const {
    default: { classes: variantClasses },
  } = await import(`./variants/${variant}`);
  const classes = buildClasses(variantClasses, overrides);
  return (
    <div className={cn(classes.root, buildStyling({ spacing }, BLOCK_TYPE))}>
      <ul className={cn(classes.list, classes[`gap-${gap}`])}>
        {items.map((item) => (
          <li key={item.id} className={classes.listItem}>
            <Button {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonList;
