import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeaderClasses } from '../Header';
import HeaderVariant from './HeaderVariant';

const location = 'Header/variants/2';

let classes: HeaderClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`sticky top-0 z-50 h-16 w-full bg-white p-4`,
    md: tw`md:h-24 md:p-6`,
  },
  container: {
    default: tw`container mx-auto flex h-full items-center gap-4`,
    sm: tw`sm:gap-6`,
    md: tw`md:gap-8`,
    lg: tw`lg:gap-10`,
  },
  drawerNavigationContainer: {
    default: tw`order-1 flex flex-grow justify-end`,
    '2xl': tw`2xl:hidden`,
  },
  logoContainer: {
    default: tw`order-0 relative h-8 w-[150px]`,
    md: tw`md:h-11 md:w-52`,
    lg: tw`lg:h-11 lg:w-60`,
    xl: tw`xl:h-12 xl:w-72`,
  },
  logoLink: tw`relative inline-block h-full w-full`,
  logoImage: tw`object-contain object-left`,
  contentAreaContainer: {
    default: tw`hidden`,
    xs: tw`xs:order-2 xs:flex xs:items-center xs:justify-end xs:gap-8`,
    '2xl': tw`2xl:flex-1`,
  },
};

const headerVariant: HeaderVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default headerVariant;
