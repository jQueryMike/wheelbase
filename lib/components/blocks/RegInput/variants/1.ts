import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { RegInputClasses } from '../RegInput';
import RegInputVariant from './RegInputVariant';

const location = 'RegInput/variants/1';

let classes: RegInputClasses<ClassesProperty> = {};

classes = {
  root: tw`max-w-[500px] @container/regInput`,
  rootInner: {},
  formContainer: tw``,
  form: {
    default: tw`flex flex-col items-stretch justify-between space-y-3 rounded-xl border border-primary bg-body p-3`,
    '@md/regInput': tw`@md/regInput:flex-row @md/regInput:items-center @md/regInput:justify-between @md/regInput:space-y-0`,
  },
  inputContainer: tw`flex-grow`,
  input: tw`h-8 w-full bg-transparent text-center text-xl font-bold uppercase text-heading outline-none`,
  errorMessageContainer: tw`pt-2`,
  errorMessage: tw`text-center text-sm text-error`,
};

const regInputVariant: RegInputVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default regInputVariant;
