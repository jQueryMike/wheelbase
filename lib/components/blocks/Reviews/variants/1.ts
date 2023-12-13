import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ReviewsClasses } from '../Reviews.types';
import ReviewsVariant from './ReviewsVariant';

const location = 'Reviews/variants/1';

const classes: ReviewsClasses<ClassesProperty> = {
  root: tw``,
};

const reviewsVariant: ReviewsVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default reviewsVariant;
