import { ImageProps } from '@components/atoms';
import { Block } from '@types';

export type FeaturesItemClasses<T> = {
  [key in
    | 'itemRoot'
    | 'itemIndicatorContainer'
    | 'itemIndicator'
    | 'itemIconContainer'
    | 'itemIcon'
    | 'itemImageContainer'
    | 'itemImageContainerInner'
    | 'itemImage'
    | 'itemContentAreaContainer']?: T;
};

export interface FeaturesItemProps {
  classes?: FeaturesItemClasses<string>;
  icon?: string;
  id: string;
  indicator?: string;
  contentArea?: Block[];
  image?: ImageProps;
}
