import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { ItemRatingClasses } from './ItemRating.types';

const location = 'ItemRating/ItemRating.classes';

let classes: ItemRatingClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  ratingContainer: tw`flex items-center`,
  ratingStars: tw`flex items-center`,
  ratingFigure: tw``,
};

const itemRatingClasses: ItemRatingClasses = new ClassesBuilder({ location, classes }).classes;

export default itemRatingClasses;
