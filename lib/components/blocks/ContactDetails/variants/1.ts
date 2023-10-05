import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ContactDetailsClasses, ContactDetailsItemClasses } from '../ContactDetails';
import ContactDetailsVariant from './ContactDetailsVariant';

const location = 'ContactDetails/variants/1';

let classes: ContactDetailsClasses<ClassesProperty> = {};
let itemClasses: ContactDetailsItemClasses<ClassesProperty> = {};

classes = {
  root: tw`@container/contact-details`,
  rootInner: {
    default: tw`space-y-4`,
    '@xl/contact-details': tw`@xl/contact-details:space-y-6`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl/contact-details': tw`@xl/contact-details:space-y-6`,
  },
  itemsContainer: tw`flex flex-wrap gap-4 py-4`,
};

itemClasses = {
  itemRoot: {
    default: tw` flex h-10 items-center rounded-lg bg-secondary px-3 text-[18px] font-semibold text-secondary-contrast`,
    hover: tw`hover:bg-primary hover:text-primary-contrast`,
  },
  itemLink: tw`flex items-center space-x-2`,
  itemIcon: {
    default: tw``,
  },
  itemLabel: {
    default: tw``,
  },
  itemLabelContainer: {
    default: tw``,
  },
};

const contactDetailsVariant: ContactDetailsVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default contactDetailsVariant;
