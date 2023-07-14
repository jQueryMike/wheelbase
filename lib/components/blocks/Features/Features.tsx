import Block from '@interfaces/Block';
import cn from 'classnames';

import { BlockList } from '../../utility-components/BlockList';
import { Icon } from '../../utility-components/Icon';
import { Button, ButtonProps } from '../Button';
import { Heading, HeadingProps, HeadingSize, HeadingTag } from '../Heading';
import { Subheading, SubheadingProps } from '../Subheading';
import { TextContent, TextContentProps } from '../TextContent';

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
    | 'headingContainer'
    | 'textContentContainer'
    | 'buttonContainer']?: T;
};

export interface FeaturesItem {
  classes?: FeaturesItemClasses<string>;
  heading?: HeadingProps;
  textContent?: TextContentProps;
  button?: ButtonProps;
  icon?: string;
  id: string;
  indicator?: string;
}

export interface FeaturesProps {
  classes?: FeaturesClasses<string>;
  heading?: HeadingProps;
  subheading?: SubheadingProps;
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
            <Heading tag={HeadingTag.H2} size={HeadingSize.Large} {...heading} />
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
              {item.heading && (
                <div className={item.classes?.headingContainer}>
                  <Heading tag={HeadingTag.H3} size={HeadingSize.Medium} {...item.heading} />
                </div>
              )}
              {item.textContent && (
                <div className={item.classes?.textContentContainer}>
                  <TextContent {...item.textContent} />
                </div>
              )}{' '}
              {item.button && (
                <div className={item.classes?.buttonContainer}>
                  <Button {...item.button} />
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
