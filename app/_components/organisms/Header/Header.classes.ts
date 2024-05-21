import { ClassesBuilder, tw } from '@utils';

import { HeaderClasses } from './Header.types';

const location = 'Header/Header.classes';

const classes: HeaderClasses = {
  root: tw`sticky top-0 z-50 h-16 w-full md:h-24`,
  headerContainer: tw`container mx-auto h-full`,
  component: tw`flex h-full items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10`,
  logoContainer: tw``,
  headerLogo: tw``,
  navContainer: tw`flex flex-1 justify-end`,
  nav: tw`first-child:divide-y-0 invisible absolute inset-0  -left-full left-auto flex h-screen w-full flex-col divide-y divide-gray-200 p-8 pt-16 shadow-xl transition sm:w-96 xl:visible xl:static xl:-left-96 xl:h-auto xl:w-auto xl:flex-row xl:justify-end xl:gap-6 xl:divide-none xl:bg-transparent xl:p-0 xl:shadow-none`,
  menuIconWrapper: tw`flex items-center xl:hidden`,
  headerSlot: tw`hidden xs:flex`,
  hamburger: tw`group`,
  hamburgerWrapper: tw`space-y-1.5`,
  topBun: tw`h-1 w-8 rounded-full bg-primary transition group-hover:bg-accent`,
  meat: tw`h-1 w-8 rounded-full bg-primary transition group-hover:bg-accent`,
  bottomBun: tw`h-1 w-8 rounded-full bg-primary transition group-hover:bg-accent`,
};

const headerClasses = new ClassesBuilder({ location, classes }).classes;

export default headerClasses;
