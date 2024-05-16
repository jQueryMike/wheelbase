import { ClassesBuilder, tw } from '@utils';

import { ReviewDetailClasses } from './ReviewDetail.types';

const location = 'ReviewDetail/ReviewDetail.classes';

const classes: ReviewDetailClasses = {
  root: tw`not-italic`,
};

const reviewDetailClasses = new ClassesBuilder({ location, classes }).classes;

export default reviewDetailClasses;
