import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { ReviewItemClasses } from './ReviewItem.types';

const location = 'ReviewItem/ReviewItem';

let classes: ReviewItemClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  reviewItem: tw`flex flex-col gap-6 bg-accent bg-opacity-5 p-6`,
  avatar: tw`rounded-full`,
  captionContainer: tw`flex items-center gap-3`,
  avatarContainer: tw``,
  citeContainer: tw``,
  reviewerName: tw``,
  reviewDate: tw``,
  reviewContentContainer: tw`flex-1 space-y-1`,
  reviewContent: tw``,
  bottomContainer: tw`flex items-center justify-between`,
  imageLinkContainer: tw``,
  ratingContainer: tw`flex items-center gap-2`,
  ratingStars: tw`flex items-center gap-[1px]`,
  ratingFigure: tw`rounded-full bg-black p-1 px-2 text-[12px] font-bold text-white`,
  reviewImage: tw`h-8 w-auto`,
};

const reviewItemClasses = new ClassesBuilder({ location, classes }).classes;

export default reviewItemClasses;
