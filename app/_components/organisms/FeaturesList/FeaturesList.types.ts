import { BaseProps } from '@components/types';

export type FeaturesListClasses<T = string> = {
  [key in
    | 'root'
    | 'container'
    | 'headingContainer'
    | 'featuresWrapper'
    | 'imageWrapper'
    | 'imageWrapperReverse'
    | 'image'
    | 'featuresListWrapper'
    | 'featuresListWrapperReverse'
    | 'featuresList']?: T;
};

export type FeaturesListProps = BaseProps<{
  title: string;
  overrides?: {
    [key in keyof FeaturesListClasses]?: string;
  };
}>;
