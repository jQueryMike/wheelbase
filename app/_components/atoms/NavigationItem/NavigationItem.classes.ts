import { ClassesBuilder, tw } from '@utils';

import { NavigationItemClasses } from './NavigationItem.types';

const location = 'NavigationItem/NavigationItem.classes';

const classes: NavigationItemClasses = {
  root: tw``,
};

const navigationItemClasses = new ClassesBuilder({ location, classes }).classes;

export default navigationItemClasses;
