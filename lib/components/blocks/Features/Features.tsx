import Block from '@interfaces/Block';
import cn from 'classnames';

import { BlockList } from '../../utility-components/BlockList';
import { Content } from '../../utility-components/Content';
import { Heading, HeadingTag } from '../../utility-components/Heading';
import { Image, ImageProps } from '../../utility-components/Image';

export type FeaturesClasses<T> = {
  [key in
    | 'root'
    | 'headingContainer'
    | 'heading'
    | 'subheadingContainer'
    | 'subheading'
    | 'itemsContainer'
    | 'itemContainer'
    | 'startContentContainer'
    | 'endContentContainer']?: T;
};

export type FeaturesItemClasses<T> = {
  [key in
    | 'root'
    | 'headingContainer'
    | 'heading'
    | 'imageContainer'
    | 'image'
    | 'contentContainer'
    | 'content'
    | 'iconContainer'
    | 'icon'
    | 'indicatorContainer'
    | 'indicator']?: T;
};

export interface FeaturesItem {
  classes?: FeaturesItemClasses<string>;
  content?: string;
  heading?: string;
  headingTag?: HeadingTag;
  icon?: string;
  image?: ImageProps;
  indicator?: string;
  id: string;
}

export interface FeaturesProps {
  classes?: FeaturesClasses<string>;
  heading?: string;
  headingTag?: HeadingTag;
  subheading?: string;
  subheadingTag?: HeadingTag;
  items?: FeaturesItem[];
  startContent?: Block[];
  endContent?: Block[];
}

const Features = ({
  classes = {},
  heading,
  headingTag = HeadingTag.H2,
  subheading,
  subheadingTag = HeadingTag.H3,
  items = [],
  startContent = [],
  endContent = [],
}: FeaturesProps) => (
  <div className={classes.root}>
    {heading && (
      <div className={classes.headingContainer}>
        <Heading className={classes.heading} tag={headingTag}>
          {heading}
        </Heading>
      </div>
    )}
    {subheading && (
      <div className={classes.subheadingContainer}>
        <Heading className={classes.subheading} tag={subheadingTag}>
          {subheading}
        </Heading>
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
                  <Image className={item.classes?.image} {...item.image} />
                </div>
              )}
              {item.indicator && (
                <div className={item.classes?.indicatorContainer}>
                  <div className={item.classes?.indicator}>{item.indicator}</div>
                </div>
              )}
              {item.heading && (
                <div className={item.classes?.headingContainer}>
                  <Heading className={item.classes?.heading} tag={item.headingTag || HeadingTag.H3}>
                    {item.heading}
                  </Heading>
                </div>
              )}
              {item.content && (
                <div className={item.classes?.contentContainer}>
                  <Content className={item.classes?.content} content={item.content} />
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
