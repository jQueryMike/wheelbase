import { ClassesBuilder, tw } from '@utils';

import { ContactClasses } from './Contact.types';

const location = 'Contact/Contact.classes';

const classes: ContactClasses = {
  root: tw``,
};

const contactClasses = new ClassesBuilder({ location, classes }).classes;

export default contactClasses;
