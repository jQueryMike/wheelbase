import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeaderClasses } from '../../Header';

const buildHeaderClasses = () => {
  const classes = {
    root: {
      default: tw`fixed left-0 top-0 flex w-full flex-row justify-center bg-white p-2 shadow-lg`,
      lg: tw`lg:p-4`,
    },
    headerContainer: tw`mx-auto flex w-full max-w-screen-xl flex-row flex-wrap items-center justify-between`,
    navItem: {
      default: tw`p-1 text-sm leading-none text-black transition`,
      hover: tw`hover:text-orange-500`,
      lg: tw`lg:p-3 lg:text-base`,
    },
    logo: {
      default: tw`h-8 w-auto`,
      lg: tw`lg:h-10`,
    },
    contactItem: {
      default: tw`align-center textl flex flex-row text-black transition`,
      hover: tw`hover:text-orange-500`,
      lg: tw`lg:text-xl`,
    },
    contactItemIcon: {
      default: tw`align-center mr-2 inline-flex w-8 w-8 justify-center rounded-full bg-orange-500 fill-white p-2`,
      lg: tw`lg:h-4 lg:w-4 lg:bg-transparent lg:fill-orange-500 lg:p-0`,
    },
    contactItemLabel: {
      default: tw`hidden not-italic`,
      lg: tw`lg:inline-block`,
    },
    menuIconWrapper: {
      default: tw`flex`,
      md: tw`md:hidden`,
    },
    navContainer: {
      default: tw`hidden`,
      md: tw`md:block`,
    },
    hamburger: {
      default: tw`group flex h-8 w-8 items-center justify-center transition`,
    },
    hamburgerWrapper: {
      default: tw`flex h-6 w-6 flex-col items-start justify-between`,
    },
    topBun: {
      default: tw`h-1 w-3/4 rounded-full bg-orange-500 transition ease-in-out group-hover:animate-[burgerHover_1s_infinite_alternate] group-hover:bg-[#ffce00]`,
    },
    meat: {
      default: tw`h-1 w-full rounded-full bg-orange-500 transition group-hover:animate-[burgerHover_1s_infinite_ease-in-out_alternate_forwards_200ms] group-hover:bg-[#ffce00]`,
    },
    bottomBun: {
      default: tw`h-1 w-3/4 rounded-full bg-orange-500 transition group-hover:animate-[burgerHover_1s_infinite_ease-in-out_alternate_forwards_400ms] group-hover:bg-[#ffce00]`,
    },
  } as HeaderClasses<ClassesProperty>;

  return classes;
};

const headerClasses = new ClassesBuilder({
  location: 'Header/themes/2/Header',
  classes: buildHeaderClasses(),
}).classes;

export default headerClasses;
