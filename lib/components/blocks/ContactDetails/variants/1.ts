import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ContactDetailsClasses, ContactDetailsItemClasses } from '../ContactDetails';
import ContactDetailsVariant from './ContactDetailsVariant';

const location = 'ContactDetails/variants/1';

let classes: ContactDetailsClasses<ClassesProperty> = {};
let itemClasses: ContactDetailsItemClasses<ClassesProperty> = {};

classes = {
  root: tw`tw-[100%] @container/contact-details`,
};

itemClasses = {
  root: {
    default: tw`inline-flex flex-row items-center gap-2 rounded-xl bg-slate-100 pb-2 pl-2 pr-4 pt-2 text-[var(--primary)]`,
    hover: tw`hover:text-[var(--accent)]`,
  },
  icon: {
    default: tw`fill-white text-white`,
  },
  label: {
    default: tw`text-lg font-bold not-italic`,
  },
};

const contactDetailsVariant: ContactDetailsVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default contactDetailsVariant;
