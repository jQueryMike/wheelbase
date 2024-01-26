import Block from '@interfaces/Block';

import { HeadingsProps } from '../Headings';
import { ImageProps } from '../../../../app/_components/atoms/Image/Image.types';

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
}
