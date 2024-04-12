import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { BaseComponentClasses } from './BaseComponent.types';

const location = 'BaseComponent/variants/1';

const classes: BaseComponentClasses<ClassesProperty> = {
  root: tw``,
};

const baseComponentClasses = new ClassesBuilder({ location, classes }).classes;

export default baseComponentClasses;
