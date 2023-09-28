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
    default: tw`bg-primary p-6 py-[4rem]`,
    md: tw`md:py-[6rem]`,
    lg: tw`lg:py-[8rem]`,
  },
  container: {
    default: tw`container mx-auto space-y-8`,
    md: tw`md:space-y-12`,
    lg: tw`lg:space-y-16`,
  },
  topSectionContainer: { default: tw`space-y-4` },
  infoItemsContainer: {
    default: tw`text-sm text-white`,
  },
  infoItemsList: {
    default: tw`flex flex-col items-start space-y-2`,
    md: tw`md:flex-row md:items-center md:justify-center md:space-x-8 md:space-y-0`,
  },
  infoItemsListItem: {
    default: tw``,
  },
  socialNavigationList: {
    default: tw`flex items-center justify-center space-x-3`,
    md: tw`md:justify-center`,
  },
  bottomSectionContainer: tw`relative space-y-4 border-t border-primary-light pt-8`,
  legalNavigationContainer: tw`text-sm`,
  legalNavigationList: tw`flex space-x-8`,
  logoContainer: {
    default: tw`relative h-12 w-72`,
    md: tw`md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2`,
  },
  logoLink: tw`inline-block`,
  copyrightContainer: tw`text-sm text-white text-opacity-70`,
};

infoItemClasses = {
  infoItemRoot: tw`space-x-2`,
  infoItemLabel: tw`after:content-[":"]`,
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
  legalNavigationItemLink: { default: tw`text-white`, hover: tw`hover:text-accent` },
};

const footerVariant: FooterVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  infoItemClasses: new ClassesBuilder({ location, classes: infoItemClasses }).classes,
  socialNavigationItemClasses: new ClassesBuilder({ location, classes: socialNavigationItemClasses }).classes,
  legalNavigationItemClasses: new ClassesBuilder({ location, classes: legalNavigationItemClasses }).classes,
};

export default footerVariant;
