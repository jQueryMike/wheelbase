import Block from '@interfaces/Block';
import cn from 'classnames';

import { BlockList } from '../../utility-components/BlockList';
import { Heading, HeadingProps } from '../Heading';
import { Image, ImageProps } from '../Image';
import { TextContent, TextContentProps } from '../TextContent';

export type FeaturesClasses<T> = {
  [key in
    | 'root'
    | 'headingContainer'
    | 'subheadingContainer'
    | 'itemsContainer'
    | 'itemContainer'
    | 'startContentContainer'
    | 'endContentContainer']?: T;
};

export type FeaturesItemClasses<T> = {
  [key in
    | 'root'
    | 'headingContainer'
    | 'imageContainer'
    | 'contentContainer'
    | 'iconContainer'
    | 'icon'
    | 'indicatorContainer'
    | 'indicator']?: T;
};

export interface FeaturesItem {
  classes?: FeaturesItemClasses<string>;
  content?: TextContentProps;
  heading?: HeadingProps;
  icon?: string;
  image?: ImageProps;
  indicator?: string;
  id: string;
}

export interface FeaturesProps {
  classes?: FeaturesClasses<string>;
  heading?: HeadingProps;
  subheading?: HeadingProps;
  items?: FeaturesItem[];
  startContent?: Block[];
  endContent?: Block[];
}

const Features = ({
  classes = {},
  heading,
  subheading,
  items = [],
  startContent = [],
  endContent = [],
}: FeaturesProps) => (
  <div className={classes.root}>
    {heading && (
      <div className={classes.headingContainer}>
        <Heading {...heading} />
      </div>
    )}
    {subheading && (
      <div className={classes.subheadingContainer}>
        <Heading {...subheading} />
      </div>
    )}
    {startContent?.length > 0 && (
      <div className={classes.startContentContainer}>
        <BlockList blocks={startContent} />
      </div>
    )}
    {items?.length > 0 && (
      <div className={classes.itemsContainer}>
        {items.map((item) => (
          <div key={item.id} className={classes.itemContainer}>
            <div className={item.classes?.root}>
              {item.icon && (
                <div className={item.classes?.iconContainer}>
                  <i className={cn(item.icon, item.classes?.icon)} />
                </div>
              )}
              {item.image && (
                <div className={item.classes?.imageContainer}>
                  <Image {...item.image} />
                </div>
              )}
              {item.indicator && (
                <div className={item.classes?.indicatorContainer}>
                  <div className={item.classes?.indicator}>{item.indicator}</div>
                </div>
              )}
              {item.heading && (
                <div className={item.classes?.headingContainer}>
                  <Heading {...item.heading} />
                </div>
              )}
              {item.content && (
                <div className={item.classes?.contentContainer}>
                  <TextContent {...item.content} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    )}
    {endContent?.length > 0 && (
      <div className={classes.endContentContainer}>
        <BlockList blocks={endContent} />
      </div>
    )}
  </div>
);

export default Features;
