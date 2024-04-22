import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { ReviewItemClasses } from './ReviewItem.types';

const location = 'ReviewItem/ReviewItem';

let classes: ReviewItemClasses<ClassesProperty> = {};

classes = {
  root: tw``,
};

const reviewItemClasses = new ClassesBuilder({ location, classes }).classes;

export default reviewItemClasses;
