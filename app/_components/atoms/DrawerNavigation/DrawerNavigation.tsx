'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Icon } from '../Icon';
import classes from './DrawerNavigation.classes';
import { DrawerNavigationProps } from './DrawerNavigation.types';

const DrawerNavigation = ({ homeObject }: DrawerNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={classes.menuIconWrapper}>
        <button aria-label="Open navigation" className={classes.hamburger} onClick={toggleDrawer}>
          <div className={classes.hamburgerWrapper}>
            <div className={classes.topBun} />
            <div className={classes.meat} />
            <div className={classes.bottomBun} />
          </div>
        </button>
      </div>
      {isOpen && (
        <nav className={classes.nav}>
          <button aria-label="Close navigation" className={classes.closeButton} onClick={toggleDrawer}>
            <Icon icon="fa fa-times" styling={{}} />
          </button>
          {homeObject &&
            homeObject.children.map((item: any) => (
              <Link key={item.id} className={classes.navLink} href={item.url}>
                {item.name}
              </Link>
            ))}
        </nav>
      )}
    </>
  );
};

export default DrawerNavigation;
