import { BaseProps } from '@components/types';

export type ItemRatingClasses<T = string> = {
  [key in 'root' | 'ratingContainer' | 'ratingStars' | 'ratingFigure']?: T;
};

export type ItemRatingProps = BaseProps<{
  icon: any;
  itemRating: number;
  classes?: ItemRatingClasses<string>;
  overrides?: {
    [key in keyof ItemRatingClasses]?: string;
  };
}>;
