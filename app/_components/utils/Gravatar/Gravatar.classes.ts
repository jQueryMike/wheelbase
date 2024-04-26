import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { GravatarClasses } from './Gravatar.types';

const location = 'Gravatar/Gravatar.classes';

let classes: GravatarClasses<ClassesProperty> = {};

classes = {
  root: tw``,
};

const gravatarClasses = new ClassesBuilder({ location, classes }).classes;

export default gravatarClasses;
