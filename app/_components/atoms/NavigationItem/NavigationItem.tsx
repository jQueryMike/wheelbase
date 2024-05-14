import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import Link from 'next/link';

import navigationItemClasses from './NavigationItem.classes';
import { NavigationItemProps } from './NavigationItem.types';

const NavigationItem = ({ name, id, url, styling, overrides }: NavigationItemProps) => {
  const classes = buildClasses(navigationItemClasses, overrides);
  return (
    <BaseComponent as="div" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'atom' }}>
      <Link className={classes.link} href={url} key={id}>
        {name}
      </Link>
    </BaseComponent>
  );
};

export default NavigationItem;
