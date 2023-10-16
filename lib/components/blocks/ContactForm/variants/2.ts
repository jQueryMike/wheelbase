import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ContactFormClasses } from '../ContactForm';
import ContactFormVariant from './ContactFormVariant';

const location = 'ContactForm/variants/2';

let classes: ContactFormClasses<ClassesProperty> = {};

classes = {
  root: tw`@container/contact-form`,
  rootInner: {
    default: tw`space-y-4`,
    '@xl/contact-form': tw`@xl/contact-form:space-y-6`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl/contact-form': tw`@xl/contact-form:space-y-6`,
  },
  form: {
    default: tw`max-w-[700px] space-y-4 bg-accent bg-opacity-5 p-6`,
    '@xl/contact-form': tw`@xl/contact-form:space-y-6 @xl/contact-form:p-8`,
  },
  formField: {
    default: tw`space-y-2`,
  },
  formFieldErrorMessage: tw`inline-block pt-1 text-sm text-error`,
  label: tw`font-semibold text-heading`,
  inputContainer: tw`flex overflow-hidden rounded-md border border-divider focus-within:border-accent`,
  input: tw`flex-grow px-4 py-2 text-[16px] outline-none`,
  textarea: tw`h-32 flex-grow px-4 py-2 text-[16px] outline-none`,
  thankYouContentAreaContainer: {
    default: tw`max-w-[700px] space-y-4 rounded-md border border-divider p-4`,
  },
  errorMessageContainer: tw`rounded-md border border-error p-2 text-error`,
};

const contactFormVariant: ContactFormVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default contactFormVariant;
