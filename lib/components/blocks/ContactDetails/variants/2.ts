import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ContactDetailsClasses, ContactDetailsItemClasses } from '../ContactDetails';
import ContactDetailsVariant from './ContactDetailsVariant';

const location = 'ContactDetails/variants/1';

let classes: ContactDetailsClasses<ClassesProperty> = {};
let itemClasses: ContactDetailsItemClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  rootInner: {
    default: tw`space-y-2`,
  },
  contentAreaContainer: {
    default: tw``,
  },
  itemsContainer: tw``,
};

itemClasses = {
  itemRoot: {
    default: tw`flex items-center font-semibold not-italic text-white`,
    hover: tw`hover:text-accent`,
  },
  itemLink: tw`flex items-center space-x-2`,
  itemIcon: {
    default: tw`text-accent`,
  },
  itemLabelContainer: {
    default: tw``,
  },
  itemLabel: {
    default: tw``,
  },
};

const contactDetailsVariant: ContactDetailsVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default contactDetailsVariant;
