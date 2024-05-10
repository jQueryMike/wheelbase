import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import Link from 'next/link';

import navigationItemClasses from './NavigationItem.classes';
import { NavigationItemProps } from './NavigationItem.types';

const NavigationItem = ({ name, id, url, styling, overrides }: NavigationItemProps) => {
  const classes = buildClasses(navigationItemClasses, overrides);
  return (
    <BaseComponent as="div" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'atom' }}>
      <Link
        className="transitionbefore:absolute relative py-3 text-base font-bold text-primary before:-bottom-1 before:h-1 before:w-full before:bg-accent hover:text-accent"
        href={url}
        key={id}
      >
        {name}
      </Link>
    </BaseComponent>
  );
};

export default NavigationItem;
