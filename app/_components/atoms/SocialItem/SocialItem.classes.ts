import { ClassesBuilder, tw } from '@utils';

import { SocialItemClasses } from './SocialItem.types';

const location = 'SocialItem/SocialItem.classes';

const classes: SocialItemClasses = {
  root: tw``,
};

const socialItemClasses = new ClassesBuilder({ location, classes }).classes;

export default socialItemClasses;
