import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { ReviewerNameClasses } from './ReviewerName.types';

const location = 'ReviewerName/ReviewerName.classes';

let classes: ReviewerNameClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  reviewerName: tw`not-italic`,
};

const reviewerNameClasses = new ClassesBuilder({ location, classes }).classes;

export default reviewerNameClasses;
