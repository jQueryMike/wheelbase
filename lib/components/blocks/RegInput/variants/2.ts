import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { RegInputClasses } from '../RegInput';
import RegInputVariant from './RegInputVariant';

const location = 'RegInput/variants/2';

let classes: RegInputClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  rootInner: {
    default: tw`space-y-2`,
  },
  formContainer: tw`w-full max-w-[500px] rounded-2xl bg-white p-4 @container/regInput`,
  form: {
    default: tw`flex flex-col gap-4 @md:flex-row`,
  },
  inputContainer: tw`f-full`,
  input: {
    default: tw`h-14 w-full appearance-none rounded-md border-2 border-black border-opacity-10 bg-yellow-500 p-4 text-center text-[32px] font-extrabold uppercase text-black ring-0 placeholder:text-[32px] placeholder:leading-none placeholder:tracking-tight placeholder:text-black @md:h-16`,
  },
  // buttonContainer: {
  //   default: tw`{buttonContainer} [&>*]:h-full [&>*]:w-full`,
  // },
  buttonContainer: tw``,
  manualLookupLink: {
    default: tw`mt-4 block font-semibold text-white`,
    hover: tw`hover:text-primary`,
  },
  errorMessageContainer: tw`pt-2`,
  errorMessage: tw`text-center text-sm text-error`,
};

const regInputVariant: RegInputVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default regInputVariant;
