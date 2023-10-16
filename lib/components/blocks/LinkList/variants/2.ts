import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { LinkListClasses } from '../LinkList';
import LinkListVariant from './LinkListVariant';

const location = 'LinkList/variants/2';

let classes: LinkListClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`hidden bg-red-500`,
    xl: tw`flex`,
  },
  list: tw`flex flex-wrap gap-5`,
  link: {
    default: tw`py-3 font-bold text-primary`,
    hover: tw`hover:text-accent`,
  },
  linkSelected: tw`text-accent`,
};

const linkListVariant: LinkListVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default linkListVariant;
