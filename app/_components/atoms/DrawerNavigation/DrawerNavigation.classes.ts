import { ClassesBuilder, tw } from '@utils';

import { DrawerNavigationClasses } from './DrawerNavigation.types';

const location = 'DrawerNavigation/DrawerNavigation.classes';

const classes: DrawerNavigationClasses = {
  root: tw``,
  hamburger: tw`group`,
  hamburgerWrapper: tw`space-y-1.5`,
  topBun: tw`h-1 w-8 rounded-full bg-[#FFFFFF] transition group-hover:bg-accent group-active:bg-link`,
  meat: tw`h-1 w-8 rounded-full bg-[#FFFFFF] transition group-hover:bg-accent group-active:bg-link`,
  bottomBun: tw`h-1 w-8 rounded-full bg-[#FFFFFF] transition group-hover:bg-accent group-active:bg-link`,
  nav: tw`first-child:divide-y-0 visible absolute inset-0 left-auto flex h-screen w-full flex-col divide-y divide-gray-200 bg-white p-8 pt-16 shadow-xl sm:w-96 xl:static xl:left-0 xl:h-auto xl:w-auto xl:flex-row xl:justify-end xl:gap-6 xl:divide-none xl:bg-transparent xl:p-0 xl:shadow-none`,
  closeButton: tw`absolute right-4 top-4 text-[32px] xl:hidden`,
  navLink: tw`transitionbefore:absolute relative py-3 text-base font-bold text-primary before:-bottom-1 before:h-1 before:w-full before:bg-accent hover:text-accent`,
};

const drawerNavigationClasses = new ClassesBuilder({ location, classes }).classes;

export default drawerNavigationClasses;
