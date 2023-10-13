import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { RegInputClasses } from '../RegInput';
import RegInputVariant from './RegInputVariant';

const location = 'RegInput/variants/2';

let classes: RegInputClasses<ClassesProperty> = {};

classes = {
  root: tw`@container/regInput`,
  rootInner: {},
  formContainer: tw`max-w-[500px] rounded-2xl bg-body p-4`,
  form: {
    default: tw`flex flex-col gap-4`,
    '@md/regInput': tw`@md/regInput:flex-row`,
  },
  inputContainer: tw`flex-grow`,
  input: {
    default: tw`h-14 w-full rounded-md border-2 border-black/10 bg-custom1 text-center text-[32px] font-bold uppercase text-custom1-contrast outline-none`,
    placeholder: tw`placeholder:text-custom1-contrast`,
    '@md/regInput': tw`@md/regInput:h-16`,
  },
  buttonContainer: tw`skrink-0`,
  manualLookupLink: {
    default: tw`mt-4 inline-block font-semibold text-accent`,
    hover: tw`hover:text-primary`,
  },
  errorMessageContainer: tw`pt-2`,
  errorMessage: tw`text-center text-sm text-error`,
};

const regInputVariant: RegInputVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default regInputVariant;
