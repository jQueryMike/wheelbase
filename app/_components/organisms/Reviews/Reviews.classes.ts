import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { ReviewsClasses } from './Reviews.types';

const location = 'Reviews/Reviews.classes';

let classes: ReviewsClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  headingContainer: tw`text-center`,
  reviews: tw`container mx-auto`,
};

const reviewsClasses = new ClassesBuilder({ location, classes }).classes;

export default reviewsClasses;
