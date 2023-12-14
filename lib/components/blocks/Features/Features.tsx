import Block from '@interfaces/Block';
import cn from 'classnames';

import { BlockList } from '../../utility-components/BlockList';
import { Icon } from '../../utility-components/Icon';
import { Headings, HeadingsProps } from '../Headings';
import { Image, ImageProps } from '../Image';

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

export type FeaturesItemClasses<T> = {
  [key in
    | 'itemRoot'
    | 'itemIndicatorContainer'
    | 'itemIndicator'
    | 'itemIconContainer'
    | 'itemIcon'
    | 'itemImageContainer'
    | 'itemContentAreaContainer']?: T;
};

export interface FeaturesItem {
  classes?: FeaturesItemClasses<string>;
  icon?: string;
  id: string;
  indicator?: string;
  contentArea?: Block[];
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
  <div className="p-4 py-10 md:p-6 md:py-16 lg:py-20 xl:py-24">
    <div className="container mx-auto">
      <div className={classes.root}>
        <div className={classes.rootInner}>
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
                  <div className={item.classes?.itemRoot}>
                    {item.indicator && (
                      <div className={item.classes?.itemIndicatorContainer}>
                        <div className={item.classes?.itemIndicator}>{item.indicator}</div>
                      </div>
                    )}
                    {item.icon && (
                      <div className={item.classes?.itemIconContainer}>
                        <Icon className={cn(item.icon, item.classes?.itemIcon)} />
                      </div>
                    )}
                    {item.image && (
                      <div className={item.classes?.itemImageContainer}>
                        <Image {...item.image} />
                      </div>
                    )}
                    {item.contentArea && item.contentArea.length > 0 && (
                      <div className={cn(item.classes?.itemContentAreaContainer)}>
                        <BlockList blocks={item.contentArea} />
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
      </div>
    </div>
  </div>
);

export default Features;
