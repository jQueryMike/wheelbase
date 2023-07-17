import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { OpeningTimesClasses, OpeningTimesItemClasses } from '../OpeningTimes';
import OpeningTimesVariant from './OpeningTimesVariant';

const location = 'OpeningTimes/variants/1';

let classes: OpeningTimesClasses<ClassesProperty> = {};
let itemClasses: OpeningTimesItemClasses<ClassesProperty> = {};

classes = {
  root: tw`w-full`,
  headingContainer: tw`mx-auto`,
  timesContainer: tw`mx-auto`,
};

itemClasses = {
  timeElement: tw`flex`,
  day: { default: tw`w-1/2`, md: tw`md:w-3/4` },
  times: { default: tw`w-1/2`, md: tw`md:w-1/4` },
  closed: tw`right-0 font-semibold`,
  highlight: tw`font-bold`,
  icon: tw`mr-2`,
};

const openingTimesVariant: OpeningTimesVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default openingTimesVariant;
