import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { ReviewDateClasses } from './ReviewDate.types';

const location = 'ReviewDate/ReviewDate.classes';

let classes: ReviewDateClasses<ClassesProperty> = {};

classes = {
  root: tw``,
};

const reviewDateClasses: ReviewDateClasses = new ClassesBuilder({ location, classes }).classes;

export default reviewDateClasses;
