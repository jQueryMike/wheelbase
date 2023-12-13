import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeaderClasses } from '../Header';
import HeaderVariant from './HeaderVariant';

const location = 'Header/variants/1';

let classes: HeaderClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`sticky top-0 w-full p-4 bg-white z-50`,
    md: tw`md:p-6`,
  },
  container: tw`container mx-auto flex items-center`,
  containerScrolled: tw``,
  drawerNavigationContainer: {
    default: tw`mr-4`,
    md: tw`md:mr-6`,
  },
  logoContainer: tw``,
  logoImage: {
    default: tw`h-6 w-auto`,
    md: tw`md:h-10`,
    lg: tw`md:h-10`,
  },
  contentAreaContainer: tw`flex flex-grow items-center justify-end space-x-10`,
};

const headerVariant: HeaderVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default headerVariant;
