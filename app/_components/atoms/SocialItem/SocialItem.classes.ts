import { ClassesBuilder, tw } from '@utils';

import { SocialItemClasses } from './SocialItem.types';

const location = 'SocialItem/SocialItem.classes';

const classes: SocialItemClasses = {
  root: tw``,
  iconWrapper: tw`inline-flex items-center justify-center`,
};

const socialItemClasses = new ClassesBuilder({ location, classes }).classes;

export default socialItemClasses;
