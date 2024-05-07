import { ClassesBuilder, tw } from '@utils';

import { EmailAddressClasses } from './EmailAddress.types';

const location = 'EmailAddress/EmailAddress.classes';

const classes: EmailAddressClasses = {
  root: tw``,
};

const emailAddressClasses = new ClassesBuilder({ location, classes }).classes;

export default emailAddressClasses;
