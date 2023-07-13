import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeaderClasses } from '../../Header';

const buildHeaderClasses = () => {
  const classes = {
    root: {
      default: tw`fixed left-0 top-0 flex w-full flex-row justify-center bg-[#0c2987] text-white`,
    },
    headerContainer: tw`flex w-full flex-row items-center justify-between`,
    headerLogo: {
      default: tw`ml-4 mr-auto`,
    },
    logo: {
      default: tw`mb-4 mt-4 h-6 w-auto`,
      sm: tw`sm:h-8`,
      md: tw`md:h-10`,
      lg: tw`lg:h-12`,
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
    headerCtaBlock: {
      default: tw`mr-2`,
      sm: tw`sm:mr-8`,
    },
    hamburger: {
      default: tw`group flex h-14 w-14 items-center justify-center transition`,
      md: tw`h-16 md:w-16`,
      lg: tw`lg:h-20 lg:w-20`,
    },
    hamburgerWrapper: {
      default: tw`flex h-7 w-7 flex-col items-start justify-between`,
      md: tw`md:h-5 md:w-5`,
      lg: tw`lg:h-7 lg:w-7`,
    },
    topBun: {
      default: tw`h-1 w-3/4 rounded-full bg-white transition ease-in-out group-hover:animate-[burgerHover_1s_infinite_alternate] group-hover:bg-[#ffce00]`,
    },
    meat: {
      default: tw`h-1 w-full rounded-full bg-white transition group-hover:animate-[burgerHover_1s_infinite_ease-in-out_alternate_forwards_200ms] group-hover:bg-[#ffce00]`,
    },
    bottomBun: {
      default: tw`h-1 w-3/4 rounded-full bg-white transition group-hover:animate-[burgerHover_1s_infinite_ease-in-out_alternate_forwards_400ms] group-hover:bg-[#ffce00]`,
    },
  } as HeaderClasses<ClassesProperty>;

  return classes;
};

const headerClasses = new ClassesBuilder({
  location: 'Header/themes/1/Header',
  classes: buildHeaderClasses(),
}).classes;

export default headerClasses;
