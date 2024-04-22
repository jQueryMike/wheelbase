import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { ReviewsClasses } from './Reviews.types';

const location = 'Reviews/Reviews.classes';

let classes: ReviewsClasses<ClassesProperty> = {};

classes = {
  root: tw``,
};

const reviewsClasses = new ClassesBuilder({ location, classes }).classes;

export default reviewsClasses;
