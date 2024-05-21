'use client';

import { useToggle } from '@hooks';
import Link from 'next/link';

import { Icon } from '../Icon';
import classes from './DrawerNavigation.classes';
import { DrawerNavigationProps } from './DrawerNavigation.types';

const DrawerNavigation = ({ homeObject, icon }: DrawerNavigationProps) => {
  const [isOpen, toggle] = useToggle();

  return (
    <>
      <div className={classes.menuIconWrapper}>
        <button
          data-testid="open-navigation"
          aria-label="Open navigation"
          className={classes.hamburger}
          onClick={toggle}
        >
          {icon && <Icon icon={icon.icon} styling={icon.styling} />}
        </button>
      </div>
      {isOpen && (
        <nav className={classes.nav}>
          <button
            data-testid="close-navigation"
            aria-label="Close navigation"
            className={classes.closeButton}
            onClick={toggle}
          >
            <Icon icon="fa fa-times" styling={{}} />
          </button>
          {homeObject &&
            homeObject.children.map((item: any) => (
              <Link
                key={item.id}
                data-testid={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={classes.navLink}
                href={item.url}
              >
                {item.name}
              </Link>
            ))}
        </nav>
      )}
    </>
  );
};

export default DrawerNavigation;
