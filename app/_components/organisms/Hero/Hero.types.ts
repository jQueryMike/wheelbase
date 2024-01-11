import { ImageProps } from '@components/atoms';
import { HeadingsProps } from '@components/molecules';
import { Block } from '@types';

export type HeroClasses<T> = {
  [key in
    | 'root'
    | 'rootInner'
    | 'container'
    | 'container'
    | 'heroContentContainer'
    | 'heroContentContainerReverse'
    | 'headingsContainer'
    | 'contentAreaContainer'
    | 'imageContainer'
    | 'imageContainerReverse'
    | 'image']?: T;
};

export interface HeroProps {
  classes?: HeroClasses<string>;
  headings?: HeadingsProps;
  contentArea?: Block[];
  image1?: ImageProps;
  imagePlacement?: 'left' | 'right';
  backgroundColor?: any;
}
