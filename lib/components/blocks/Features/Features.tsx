import Block from '@interfaces/Block';
import cn from 'classnames';

import { BlockList } from '../../utility-components/BlockList';
import { Heading, HeadingProps, HeadingSize, HeadingTag } from '../Heading';
import { Subheading } from '../Subheading';
import { TextContent, TextContentProps } from '../TextContent';

export type FeaturesClasses<T> = {
  [key in
    | 'root'
    | 'headingsContainer'
    | 'headingContainer'
    | 'subheadingContainer'
    | 'itemsContainer'
    | 'itemContainer'
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
    | 'headingContainer'
    | 'textContentContainer']?: T;
};

export interface FeaturesItem {
  classes?: FeaturesItemClasses<string>;
  textContent?: TextContentProps;
  heading?: HeadingProps;
  icon?: string;
  id: string;
  indicator?: string;
}

export interface FeaturesProps {
  classes?: FeaturesClasses<string>;
  heading?: HeadingProps;
  subheading?: HeadingProps;
  items?: FeaturesItem[];
  contentArea1?: Block[];
  contentArea2?: Block[];
}

const Features = ({
  classes = {},
  heading,
  subheading,
  items = [],
  contentArea1 = [],
  contentArea2 = [],
}: FeaturesProps) => (
  <div className={classes.root}>
    {(heading || subheading) && (
      <div className={classes.headingsContainer}>
        {heading && (
          <div className={classes.headingContainer}>
            <Heading tag={HeadingTag.H2} size={HeadingSize.LG} {...heading} />
          </div>
        )}
        {subheading && (
          <div className={classes.subheadingContainer}>
            <Subheading {...subheading} />
          </div>
        )}
      </div>
    )}
    {contentArea1?.length > 0 && (
      <div className={classes.contentArea1Container}>
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
                  <i className={cn(item.icon, item.classes?.icon)} />
                </div>
              )}
              {item.heading && (
                <div className={item.classes?.headingContainer}>
                  <Heading tag={HeadingTag.H3} size={HeadingSize.MD} {...item.heading} />
                </div>
              )}
              {item.textContent && (
                <div className={item.classes?.textContentContainer}>
                  <TextContent {...item.textContent} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    )}
    {contentArea2?.length > 0 && (
      <div className={classes.contentArea2Container}>
        <BlockList blocks={contentArea2} />
      </div>
    )}
  </div>
);

export default Features;
