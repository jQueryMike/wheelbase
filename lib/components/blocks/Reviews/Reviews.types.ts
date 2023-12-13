// TODO: Add proper types
export type ReviewsProps = any;

type ReviewsElements =
  | 'root'
  | 'rootInner'
  | 'container'
  | 'reviewsContainer'
  | 'review'
  | 'reviewContent'
  | 'reviewImage'
  | 'reviewName'
  | 'reviewRating'
  | 'reviewText';

export type ReviewsClasses<T = string> = {
  [K in ReviewsElements]?: T;
};
