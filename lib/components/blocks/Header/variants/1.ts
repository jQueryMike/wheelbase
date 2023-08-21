import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeaderClasses } from '../Header';
import HeaderVariant from './HeaderVariant';

const location = 'Header/variants/1';

let classes: HeaderClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`fixed left-0 right-0 top-0 z-50 bg-body px-8 transition duration-150`,
    md: tw`md:px-12`,
    lg: tw`lg:px-16`,
  },
  rootScrolled: tw`shadow-xl`,
  spacer: tw`h-20`,
  spacerScrolled: tw``,
  container: tw`container mx-auto flex h-20 items-center justify-between`,
  containerScrolled: tw``,
  logoContainer: tw`relative h-12 w-72`,
  contentAreaContainer: tw``,
};

const headerVariant: HeaderVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default headerVariant;
