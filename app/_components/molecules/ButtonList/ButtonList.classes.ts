import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { ButtonListClasses } from './ButtonList.types';

const location = 'ButtonList/ButtonList.classes';

let classes: ButtonListClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  list: tw`flex flex-wrap gap-8`,
};

const buttonListClasses = new ClassesBuilder({ location, classes }).classes;

export default buttonListClasses;
