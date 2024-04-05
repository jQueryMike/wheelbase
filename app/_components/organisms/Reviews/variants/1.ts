import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { ReviewsClasses } from '../Reviews.types';
import ReviewsVariant from './ReviewsVariant';

const location = 'Reviews/variants/1';

let classes: ReviewsClasses<ClassesProperty> = {};

classes = {
  root: tw``,
};

const reviewsVariant: ReviewsVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default reviewsVariant;
