import { ImageProps } from '@components/blocks/Image/Image.types';

type ReviewItemElements =
  | 'root'
  | 'review'
  | 'carouselSlideContainer'
  | 'carouselSlide'
  | 'reviewHeader'
  | 'reviewImage'
  | 'reviewer'
  | 'reviewDate'
  | 'reviewContent'
  | 'reviewTitle'
  | 'reviewText'
  | 'reviewRatings'
  | 'reviewSource'
  | 'reviewStarsContainer'
  | 'reviewStars'
  | 'rating'
  | 'star'
  | 'starFaded';

export type ReviewItemClasses<T = string> = {
  [K in ReviewItemElements]?: T;
};

export interface ReviewItemProps {
  id: string;
  classes?: ReviewItemClasses<string>;
  reviewer?: string;
  reviewDate?: string;
  reviewImage?: ImageProps;
  reviewTitle?: string;
  reviewText?: string;
  reviewSource?: string;
  reviewRating?: number;
}
