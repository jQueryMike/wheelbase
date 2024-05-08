import { ClassesBuilder, tw } from '@utils';

import { SocialItemClasses } from './SocialItem.types';

const location = 'SocialItem/SocialItem.classes';

const classes: SocialItemClasses = {
  root: tw``,
  iconWrapper: tw`inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-blue-500 transition hover:text-accent`,
};

const socialItemClasses = new ClassesBuilder({ location, classes }).classes;

export default socialItemClasses;
