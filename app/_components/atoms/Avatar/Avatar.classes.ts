import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { AvatarClasses } from './Avatar.types';

const location = 'Avatar/Avatar.classes';

let classes: AvatarClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  avatar: tw`border-4" h-14 w-14 rounded-full border-accent`,
};

const avatarClasses = new ClassesBuilder({ location, classes }).classes;

export default avatarClasses;
