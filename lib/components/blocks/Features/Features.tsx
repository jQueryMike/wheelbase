import Block from '@interfaces/Block';
import cn from 'classnames';

import { BlockList } from '../../utility-components/BlockList';
import { Icon } from '../../utility-components/Icon';
import { Headings, HeadingsProps } from '../Headings';
import { Image, ImageProps } from '../Image';

export type FeaturesClasses<T> = {
  [key in
    | 'root'
    | 'headingsContainer'
    | 'headingContainer'
    | 'subheadingContainer'
    | 'itemsContainer'
    | 'itemContainer'
    | 'contentAreaContainer'
    | 'contentArea1Container'
    | 'contentArea2Container']?: T;
};

export type FeaturesItemClasses<T> = {
  [key in
    | 'root'
    | 'indicatorContainer'
    | 'indicator'
    | 'iconContainer'
    | 'icon'
    | 'imageContainer'
    | 'contentAreaContainer'
    | 'headingContainer'
    | 'textContentContainer'
    | 'buttonContainer']?: T;
};

export interface FeaturesItem {
  classes?: FeaturesItemClasses<string>;
  icon?: string;
  id: string;
  indicator?: string;
  content?: Block[];
  image?: ImageProps;
}

export interface FeaturesProps {
  classes?: FeaturesClasses<string>;
  headings?: HeadingsProps;
  items?: FeaturesItem[];
  contentArea1?: Block[];
  contentArea2?: Block[];
}

const Features = ({ classes = {}, headings, items = [], contentArea1 = [], contentArea2 = [] }: FeaturesProps) => (
  <div className={classes.root}>
    {headings && (
      <div className={classes.headingsContainer}>
        <Headings {...headings} />
      </div>
    )}
    {contentArea1?.length > 0 && (
      <div className={cn(classes.contentAreaContainer, classes.contentArea1Container)}>
        <BlockList blocks={contentArea1} />
      </div>
    )}
    {items?.length > 0 && (
      <div className={classes.itemsContainer}>
        {items.map((item) => (
          <div key={item.id} className={classes.itemContainer}>
            <div className={item.classes?.root}>
              {item.indicator && (
                <div className={item.classes?.indicatorContainer}>
                  <div className={item.classes?.indicator}>{item.indicator}</div>
                </div>
              )}
              {item.icon && (
                <div className={item.classes?.iconContainer}>
                  <Icon className={cn(item.icon, item.classes?.icon)} />
                </div>
              )}
              {item.image && (
                <div className={item.classes?.imageContainer}>
                  <Image {...item.image} />
                </div>
              )}
              {item.content && item.content.length > 0 && (
                <div className={cn(item.classes?.contentAreaContainer)}>
                  <BlockList blocks={item.content} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    )}
    {contentArea2?.length > 0 && (
      <div className={cn(classes.contentAreaContainer, classes.contentArea2Container)}>
        <BlockList blocks={contentArea2} />
      </div>
    )}
  </div>
);

export default Features;
