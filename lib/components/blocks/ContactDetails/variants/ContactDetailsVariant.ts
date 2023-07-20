import { ContactDetailsClasses, ContactDetailsItemClasses } from '../ContactDetails';

interface ContactDetailsVariant {
  classes?: ContactDetailsClasses<string>;
  itemClasses?: ContactDetailsItemClasses<string>;
}

export default ContactDetailsVariant;
