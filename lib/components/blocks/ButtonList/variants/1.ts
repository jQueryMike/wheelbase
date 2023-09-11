import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ButtonListClasses } from '../ButtonList';
import ButtonListVariant from './ButtonListVariant';

const location = 'ButtonList/variants/1';

let classes: ButtonListClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  list: tw`flex flex-wrap gap-8`,
};

const linkListVariant: ButtonListVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default linkListVariant;
