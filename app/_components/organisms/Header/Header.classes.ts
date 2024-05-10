import { ClassesBuilder, tw } from '@utils';

import { HeaderClasses } from './Header.types';

const location = 'Header/Header.classes';

const classes: HeaderClasses = {
  root: tw``,
};

const headerClasses = new ClassesBuilder({ location, classes }).classes;

export default headerClasses;
