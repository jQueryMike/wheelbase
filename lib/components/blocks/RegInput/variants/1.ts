import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { RegInputClasses } from '../RegInput';
import RegInputVariant from './RegInputVariant';

const location = 'RegInput/variants/1';

let classes: RegInputClasses<ClassesProperty> = {};

classes = {
  root: tw`@container/regInput`,
  rootInner: {
    default: tw`space-y-4`,
    '@xl/regInput': tw`@xl/regInput:space-y-6`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl/regInput': tw`@xl/regInput:space-y-6`,
  },
  regContainer: tw`flex w-full`,
  regInputWrapper: tw``,
  regInput: tw`w-full rounded-l-lg border bg-yellow-300 p-2 text-black`,
  regInputButton: tw`w-[140px] rounded-r-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700`,
};

const regInputVariant: RegInputVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default regInputVariant;
