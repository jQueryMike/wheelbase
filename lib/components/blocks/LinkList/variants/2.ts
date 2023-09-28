import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { LinkListClasses } from '../LinkList';
import LinkListVariant from './LinkListVariant';

const location = 'LinkList/variants/2';

let classes: LinkListClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  list: tw`flex flex-wrap gap-8`,
  link: {
    default: tw`py-3 font-bold text-accent`,
    hover: tw`hover:text-primary`,
  },
  linkSelected: tw`text-primary`,
};

const linkListVariant: LinkListVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default linkListVariant;
