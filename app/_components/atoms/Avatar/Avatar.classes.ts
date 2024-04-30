import { ClassesBuilder, ClassesProperty, tw } from '@utils';
// eslint-disable-next-line import/no-cycle
import { AvatarClasses } from './Avatar.types';


const location = 'Avatar/Avatar.classes';

let classes: AvatarClasses<ClassesProperty> = {};

classes = {
  root: tw`overflow-hidden`,
  avatar: tw`h-14 w-14`,
};

const avatarClasses = new ClassesBuilder({ location, classes }).classes;

export default avatarClasses;
