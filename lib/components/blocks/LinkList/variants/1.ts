import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { LinkListClasses } from '../LinkList';
import LinkListVariant from './LinkListVariant';

const location = 'LinkList/variants/1';

let classes: LinkListClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  list: tw`flex flex-wrap gap-8`,
  link: {
    default: tw`font-semibold text-link`,
    hover: tw`hover:text-link-light`,
  },
  linkSelected: {
    default: tw`text-primary`,
    hover: tw`hover:text-primary`,
  },
};

const linkListVariant: LinkListVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default linkListVariant;
