import { Block } from '@types';

import { HeadingsProps } from '../Headings';
import { FeaturesItemProps } from './components';

export type FeaturesClasses<T> = {
  [key in
    | 'root'
    | 'rootInner'
    | 'headingsContainer'
    | 'itemsContainer'
    | 'itemContainer'
    | 'contentAreaContainer'
    | 'contentArea1Container'
    | 'contentArea2Container']?: T;
};
export interface FeaturesProps {
  classes?: FeaturesClasses<string>;
  headings?: HeadingsProps;
  items?: FeaturesItemProps[];
  contentArea1?: Block[];
  contentArea2?: Block[];
}
