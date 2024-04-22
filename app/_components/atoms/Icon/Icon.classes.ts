import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { IconClasses } from './Icon.types';

const location = 'Icon/Icon.classes';

let classes: IconClasses<ClassesProperty> = {};

classes = {
  root: tw`w-fit`,
};

const iconClasses = new ClassesBuilder({ location, classes }).classes;

export default iconClasses;