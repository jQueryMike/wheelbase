import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { AvatarClasses } from './Avatar.types';

const location = 'Avatar/Avatar.classes';

let classes: AvatarClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  avatar: tw`h-14 w-14`,
};

const avatarClasses = new ClassesBuilder({ location, classes }).classes;

export default avatarClasses;
