import { ClassesBuilder, tw } from '@utils';

import { NavigationItemClasses } from './NavigationItem.types';

const location = 'NavigationItem/NavigationItem.classes';

const classes: NavigationItemClasses = {
  root: tw``,
  link: tw`transitionbefore:absolute relative py-3 font-bold text-link before:-bottom-1 before:h-1 before:w-full before:bg-accent hover:text-link-light`,
};

const navigationItemClasses = new ClassesBuilder({ location, classes }).classes;

export default navigationItemClasses;
