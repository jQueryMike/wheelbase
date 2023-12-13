import Block from '@interfaces/Block';

import { HeadingsProps } from '../Headings';
import { ImageProps } from '../Image/Image.types';

export type HeroClasses<T> = {
  [key in
    | 'root'
    | 'rootInner'
    | 'container'
    | 'heroContentContainer'
    | 'headingsContainer'
    | 'contentAreaContainer'
    | 'imageContainer'
    | 'image']?: T;
};

export interface HeroProps {
  classes?: HeroClasses<string>;
  headings?: HeadingsProps;
  contentArea?: Block[];
  image?: ImageProps;
}
