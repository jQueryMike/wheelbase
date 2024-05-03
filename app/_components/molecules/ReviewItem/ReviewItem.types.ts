import { AvatarProps } from '@components/atoms';
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
  avatar: AvatarProps;
  reviewerName: any;
  reviewDate: any;
  reviewTitle: any;
  reviewContent: any;
  itemRating: any;
  ratingIcon: any;
  imageLink: any;
  fixedIcon?: any;
  classes?: ReviewItemClasses<string>;
  overrides?: {
    [key in keyof ReviewItemClasses]?: string;
  };
}>;
