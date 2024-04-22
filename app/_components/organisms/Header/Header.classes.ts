import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { HeaderClasses } from './Header.types';

const location = 'Header/Header.classes';

let classes: HeaderClasses<ClassesProperty> = {};

classes = {
  root: tw``,
};

const headerClasses = new ClassesBuilder({ location, classes }).classes;

export default headerClasses;
