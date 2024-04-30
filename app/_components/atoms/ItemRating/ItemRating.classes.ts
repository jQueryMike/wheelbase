import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { ItemRatingClasses } from './ItemRating.types';

const location = 'ItemRating/ItemRating.classes';

let classes: ItemRatingClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  ratingContainer: tw`flex items-center`,
  ratingStars: tw`flex items-center`,
  ratingFigure: tw`rounded-full bg-black p-1 px-2 text-[12px] font-bold text-white`,
};

const itemRatingClasses: ItemRatingClasses = new ClassesBuilder({ location, classes }).classes;

export default itemRatingClasses;
