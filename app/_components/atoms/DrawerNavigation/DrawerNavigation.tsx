'use client';

import { NavigationItem } from '@components/atoms';
import { useState } from 'react';

import classes from './DrawerNavigation.classes';
import { DrawerNavigationProps } from './DrawerNavigation.types';

const DrawerNavigation = ({ homeObject }: DrawerNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex xl:hidden">
        <button aria-label="Open navigation" className={classes.hamburger} onClick={toggleDrawer}>
          <div className={classes.hamburgerWrapper}>
            <div className={classes.topBun} />
            <div className={classes.meat} />
            <div className={classes.bottomBun} />
          </div>
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-40 flex xl:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true" onClick={toggleDrawer} />
          <div className="relative ml-auto flex w-full max-w-xs flex-1 flex-col bg-white">
            <div className="absolute left-0 top-0 -ml-12 pt-2">
              <button
                type="button"
                className="mr-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleDrawer}
              >
                <span className="sr-only">Close sidebar</span>
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="h-0 flex-1 overflow-y-auto p-4">
              <nav className="space-y-1 px-2">
                {homeObject && homeObject.children.map((item: any) => <NavigationItem key={item.id} {...item} />)}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DrawerNavigation;
