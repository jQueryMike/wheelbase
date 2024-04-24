import { ImageProps } from '@components/atoms';
import { BaseProps } from '@components/types';

export type ReviewItemClasses<T = string> = {
  [key in
    | 'root'
    | 'reviewItem'
    | 'captionContainer'
    | 'avatarContainer'
    | 'avatar'
    | 'citeContainer'
    | 'reviewerName'
    | 'reviewDate'
    | 'reviewContentContainer'
    | 'reviewTitle'
    | 'reviewContent'
    | 'bottomContainer'
    | 'imageLinkContainer'
    | 'ratingContainer'
    | 'ratingStars'
    | 'ratingFigure'
    | 'reviewImage']?: T;
};

export type ReviewItemProps = BaseProps<{
  avatar: ImageProps;
  reviewerName: string;
  reviewDate: string;
  reviewTitle: string;
  reviewContent: string;
  itemRating: number;
  reviewImage: ImageProps;
  classes?: ReviewItemClasses<string>;
  overrides?: {
    [key in keyof ReviewItemClasses]?: string;
  };
}>;
