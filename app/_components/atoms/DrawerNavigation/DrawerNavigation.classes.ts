import { ClassesBuilder, tw } from '@utils';

import { DrawerNavigationClasses } from './DrawerNavigation.types';

const location = 'DrawerNavigation/DrawerNavigation.classes';

const classes: DrawerNavigationClasses = {
  root: tw``,
  hamburger: tw`group active:bg-link`,
  hamburgerWrapper: tw`space-y-1.5`,
  topBun: tw`h-1 w-8 rounded-full bg-[#FFFFFF] transition group-hover:bg-accent`,
  meat: tw`h-1 w-8 rounded-full bg-[#FFFFFF] transition group-hover:bg-accent`,
  bottomBun: tw`h-1 w-8 rounded-full bg-[#FFFFFF] transition group-hover:bg-accent`,
};

const drawerNavigationClasses = new ClassesBuilder({ location, classes }).classes;

export default drawerNavigationClasses;
