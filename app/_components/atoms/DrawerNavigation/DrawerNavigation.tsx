'use client';

import { useToggle } from '@hooks';
import Link from 'next/link';

import { Icon } from '../Icon';
import classes from './DrawerNavigation.classes';
import { DrawerNavigationProps } from './DrawerNavigation.types';

const DrawerNavigation = ({ homeObject }: DrawerNavigationProps) => {
  const [isOpen, toggle] = useToggle();
  const toggleDrawer = () => {
    toggle(!isOpen);
  };

  return (
    <>
      <div className={classes.menuIconWrapper}>
        <button
          data-testid="open-navigation"
          aria-label="Open navigation"
          className={classes.hamburger}
          onClick={toggleDrawer}
        >
          <div className={classes.hamburgerWrapper}>
            <div className={classes.topBun} />
            <div className={classes.meat} />
            <div className={classes.bottomBun} />
          </div>
        </button>
      </div>
      {isOpen && (
        <nav className={classes.nav}>
          <button
            data-testid="close-navigation"
            aria-label="Close navigation"
            className={classes.closeButton}
            onClick={toggleDrawer}
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
