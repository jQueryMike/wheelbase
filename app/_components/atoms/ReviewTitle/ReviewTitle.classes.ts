import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { ReviewTitleClasses } from './ReviewTitle.types';

const location = 'ReviewTitle/ReviewTitle.classes';

let classes: ReviewTitleClasses<ClassesProperty> = {};

classes = {
  root: tw``,
};

const reviewTitleClasses: ReviewTitleClasses = new ClassesBuilder({ location, classes }).classes;

export default reviewTitleClasses;
