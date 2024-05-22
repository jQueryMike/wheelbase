import { ClassesBuilder, tw } from '@utils';

import { ContactClasses } from './Contact.types';

const location = 'Contact/Contact.classes';

const classes: ContactClasses = {
  root: tw``,
  container: tw`container mx-auto`,
  contactWrapper: tw`grid bg-primary md:grid-cols-12`,
  contact: tw`col-span-12 space-y-4 p-8 md:p-10 lg:col-span-5 lg:p-12 xl:col-span-4`,
  contactInfoContainer: tw`font-bold`,
  contactInfo: tw``,
  socialsContainer: tw``,
  socials: tw`flex gap-1.5`,
};

const contactClasses = new ClassesBuilder({ location, classes }).classes;

export default contactClasses;
