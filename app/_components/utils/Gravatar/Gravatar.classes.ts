import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { GravatarClasses } from './Gravatar.types';

const location = 'Gravatar/Gravatar.classes';

let classes: GravatarClasses<ClassesProperty> = {};

classes = {
  root: tw`inline-block h-14 w-14 overflow-hidden rounded-full border-4 bg-gray-300`,
  gravatar: tw`flex h-full w-full items-center justify-center text-xl font-bold text-gray-700`,
};

const gravatarClasses = new ClassesBuilder({ location, classes }).classes;

export default gravatarClasses;
