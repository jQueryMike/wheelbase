import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { HeaderClasses } from '../Header.types';
import HeaderVariant from './HeaderVariant';

const location = 'Header/variants/1';

let classes: HeaderClasses<ClassesProperty> = {};

classes = {
  root: tw``,
};

const headerVariant: HeaderVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default headerVariant;
