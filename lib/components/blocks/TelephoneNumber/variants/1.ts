import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { TelephoneNumberClasses, TelephoneNumberItemClasses } from '../TelephoneNumber';
import TelephoneNumberVariant from './TelephoneNumberVariant';

const location = 'TelephoneNumber/variants/1';

let classes: TelephoneNumberClasses<ClassesProperty> = {};
let itemClasses: TelephoneNumberItemClasses<ClassesProperty> = {};

classes = {
  root: tw`w-[100%]`,
};

itemClasses = {
  contactItem: {
    default: tw`inline-flex flex-row items-center gap-2 rounded-xl bg-slate-100 pb-2 pl-2 pr-4 pt-2 text-[var(--primary)]`,
    hover: tw`hover:text-[var(--accent)]`,
  },
  contactItemIcon: {
    default: tw`fill-white text-white`,
  },
  contactItemLabel: {
    default: tw`text-lg font-bold not-italic`,
  },
};

const telephoneNumberVariant: TelephoneNumberVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default telephoneNumberVariant;
