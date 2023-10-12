import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import {
  FooterClasses,
  FooterInfoItemClasses,
  FooterLegalNavigationItemClasses,
  FooterSocialNavigationItemClasses,
} from '../Footer';
import FooterVariant from './FooterVariant';

const location = 'Footer/variants/2';

let classes: FooterClasses<ClassesProperty> = {};
let infoItemClasses: FooterInfoItemClasses<ClassesProperty> = {};
let socialNavigationItemClasses: FooterSocialNavigationItemClasses<ClassesProperty> = {};
let legalNavigationItemClasses: FooterLegalNavigationItemClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`bg-primary p-6 py-[3rem]`,
    md: tw`md:py-[4rem]`,
    lg: tw`lg:py-[6rem]`,
  },
  container: {
    default: tw`container mx-auto space-y-6`,
  },
  topSectionContainer: { default: tw`space-y-4` },

  infoItemsContainer: {
    default: tw``,
  },
  infoItemsList: {
    default: tw`flex flex-wrap justify-center gap-y-3 divide-x divide-white divide-opacity-20`,
  },
  infoItemsListItem: {
    default: tw`px-4 leading-none text-white text-white first-of-type:pl-0 last-of-type:pr-0`,
  },
  socialNavigationList: {
    default: tw`flex items-center justify-center space-x-3`,
    md: tw`md:justify-center`,
  },
  bottomSectionContainer: tw`relative space-y-4 border-t border-primary-light pt-6`,

  legalNavigationContainer: tw``,
  legalNavigationList: {
    default: tw`flex flex-wrap justify-center gap-y-3 divide-x divide-white divide-opacity-20`,
    md: tw`md:justify-start`,
  },
  legalNavigationListItem: {
    default: tw`px-4 font-medium leading-none text-white transition first-of-type:pl-0 last-of-type:pr-0 hover:text-opacity-60`,
  },

  copyrightContainer: {
    default: tw`flex flex-wrap justify-center text-sm text-white text-opacity-70`,
    md: tw`md:justify-start`,
  },

  logoLink: {
    default: tw`flex justify-center`,
    md: tw`md:absolute md:right-0 md:top-0 md:inline-flex`,
  },
  logoContainer: {
    default: tw`flex justify-center`,
    md: tw``,
  },
  logoImage: {
    default: tw`inline-block h-10 w-auto`,
  },
};

infoItemClasses = {
  infoItemRoot: tw`space-x-2`,
};

socialNavigationItemClasses = {
  socialNavigationItemRoot: tw`space-x-2`,
  socialNavigationItemLink: {
    default: tw`flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-20 text-[24px] text-white transition hover:bg-accent hover:text-white`,
  },
  socialNavigationItemIcon: tw``,
  socialNavigationItemLabel: tw`hidden`,
};

legalNavigationItemClasses = {
  legalNavigationItemRoot: tw``,
  legalNavigationItemLink: { default: tw`text-sm text-white transition`, hover: tw`hover:text-accent` },
};

const footerVariant: FooterVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  infoItemClasses: new ClassesBuilder({ location, classes: infoItemClasses }).classes,
  socialNavigationItemClasses: new ClassesBuilder({ location, classes: socialNavigationItemClasses }).classes,
  legalNavigationItemClasses: new ClassesBuilder({ location, classes: legalNavigationItemClasses }).classes,
};

export default footerVariant;
