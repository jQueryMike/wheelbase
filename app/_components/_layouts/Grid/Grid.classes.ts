import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { GridClasses } from './Grid.types';

const location = 'Grid/Grid.classes';

let classes: GridClasses<ClassesProperty> = {};

classes = {
  root: tw`grid`,
};

const gridClasses: GridClasses = new ClassesBuilder({ location, classes }).classes;

export default gridClasses;
