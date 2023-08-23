import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ContactFormClasses } from '../ContactForm';
import ContactFormVariant from './ContactFormVariant';

const location = 'ContactForm/variants/1';

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
    default: tw`max-w-[700px] space-y-4 rounded-lg border border-divider p-4`,
    '@xl/contact-form': tw`@xl/contact-form:space-y-6 @xl/contact-form:p-5`,
    '@3xl/contact-form': tw`@3xl/contact-form:p-6`,
    '@5xl/contact-form': tw`@5xl/contact-form:p-8`,
  },
  formField: {
    default: tw`space-y-2`,
  },
  label: tw`font-semibold text-heading`,
  inputContainer: tw`flex overflow-hidden rounded-lg border border-divider focus-within:border-primary`,
  input: tw`flex-grow px-4 py-2 text-[16px] outline-none`,
  inputErrorMessage: tw`inline-block pt-1 text-sm text-error`,
  thankYouContentAreaContainer: {
    default: tw`max-w-[700px] space-y-4 rounded-lg border border-divider p-4`,
    '@xl/contact-form': tw`@xl/contact-form:space-y-6 @xl/contact-form:p-5`,
    '@3xl/contact-form': tw`@3xl/contact-form:p-6`,
    '@5xl/contact-form': tw`@5xl/contact-form:p-8`,
  },
  errorMessageContainer: tw`rounded-lg border border-error p-2 text-error`,
};

const contactFormVariant: ContactFormVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default contactFormVariant;
