import { Button } from '@components/atoms';
import { buildClasses } from '@utils/buildClasses';
import { Sizes } from '@utils/constants';
import cx from 'classnames';

import { ButtonListProps } from './ButtonList.types';

const ButtonList = async ({ variant = '1', gap = Sizes.Medium, items = [], overrides }: ButtonListProps) => {
  if (items.length < 1) return null;
  const {
    default: { classes: variantClasses },
  } = await import(`./variants/${variant}`);
  const classes = buildClasses(variantClasses, overrides);
  return (
    <div className={classes.root}>
      <ul className={cx(classes.list, classes[`gap-${gap}`])}>
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
