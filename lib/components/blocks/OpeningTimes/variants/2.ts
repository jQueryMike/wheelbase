import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { OpeningTimesClasses, OpeningTimesItemClasses } from '../OpeningTimes';
import OpeningTimesVariant from './OpeningTimesVariant';

const location = 'OpeningTimes/variants/2';

let classes: OpeningTimesClasses<ClassesProperty> = {};
let itemClasses: OpeningTimesItemClasses<ClassesProperty> = {};

classes = {
  root: tw`@container/opening-times`,
  rootInner: {
    default: tw`space-y-4`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
  },
  itemsContainer: {
    default: tw`space-y-4 bg-accent bg-opacity-5 p-4 text-primary md:p-6 lg:space-y-6 lg:p-8`,
  },
};

itemClasses = {
  itemRoot: tw`flex items-center justify-between space-x-2 rounded`,
  itemLabel: tw`grow `,
  itemIcon: tw`text-accent`,
  itemValue: tw`text-right font-bold`,
  itemClosed: tw``,
  itemHighlight: tw`text-accent`,
};

const openingTimesVariant: OpeningTimesVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default openingTimesVariant;
