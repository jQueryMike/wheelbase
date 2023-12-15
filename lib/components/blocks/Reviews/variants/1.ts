import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ReviewsClasses, ReviewsItemClasses } from '../Reviews';
import ReviewsVariant from './ReviewsVariant';

const location = 'Reviews/variants/1';

let classes: ReviewsClasses<ClassesProperty> = {};
let itemClasses: ReviewsItemClasses<ClassesProperty> = {};

classes = {
  root: tw`px-6 py-12`,
  rootInner: tw`flex flex-col gap-4`,
  headingsContainer: tw`text-center`,
  // review items grid
  itemsContainer: {
    default: tw`grid gap-4`,
    sm: tw`sm:grid-cols-2`,
    xl: tw`xl:grid-cols-4`,
  },
};

itemClasses = {
  // review item style
  itemRoot: tw`bg-accent flex h-full flex-col gap-6 bg-opacity-5 p-6 @container @[200px]:p-16`,
  // review caption
  captionContainer: tw`flex items-center gap-3`,
  avatarContainer: tw`border-accent relative h-14 w-14 overflow-hidden rounded-full border-4`,
  avatarImage: tw`absolute h-full w-full object-cover object-center`,
  citeContainer: tw``,
  cite: tw`text-heading font-bold not-italic leading-[1.1]`,
  date: tw`text-copy not-italic`,
  // blockquote
  blockquoteContainer: tw`flex-1 space-y-1`,
  reviewHeading: tw`text-heading font-semibold`,
  reviewContent: tw`text-copy text-sm leading-normal`,
  // bottom
  bottomContainer: tw`flex items-center justify-between`,
  // source logo
  logoContainer: tw``,
  logo: tw`h-8 w-auto`,
  // star rating
  ratingStars: tw`flex items-center gap-2`,
  star: tw`fas fa-star text-accent text-lg`,
  starDisabled: tw`text-lg text-black text-opacity-25`,
  ratingFigure: tw`rounded-full bg-black p-1 px-2 text-[12px] font-bold text-white`,
};

const reviewsVariant: ReviewsVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default reviewsVariant;
