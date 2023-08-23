import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { OpeningTimesClasses, OpeningTimesItemClasses } from '../OpeningTimes';
import OpeningTimesVariant from './OpeningTimesVariant';

const location = 'OpeningTimes/variants/1';

let classes: OpeningTimesClasses<ClassesProperty> = {};
let itemClasses: OpeningTimesItemClasses<ClassesProperty> = {};

classes = {
  root: tw`@container/opening-times`,
  rootInner: {
    default: tw`space-y-4`,
    '@xl/opening-times': tw`@xl/opening-times:space-y-6`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl/opening-times': tw`@xl/opening-times:space-y-6`,
  },
  itemsContainer: {
    default: tw`space-y-2 py-6`,
  },
};

itemClasses = {
  root: tw`flex items-center justify-between space-x-2 rounded px-3 py-2 text-copy`,
  label: tw`grow`,
  icon: tw`text-accent`,
  value: tw`text-right`,
  closed: tw`opacity-50`,
  highlight: tw`bg-body-alt`,
};

const openingTimesVariant: OpeningTimesVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default openingTimesVariant;
