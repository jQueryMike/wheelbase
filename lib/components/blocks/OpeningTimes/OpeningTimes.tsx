import Block from '@interfaces/Block';
import cn from 'classnames';
import { useCallback } from 'react';

import { BlockList } from '../../utility-components/BlockList';
import { Icon } from '../../utility-components/Icon';
import { Headings, HeadingsProps } from '../Headings';

export type OpeningTimesClasses<T> = {
  [key in
    | 'root'
    | 'rootInner'
    | 'headingsContainer'
    | 'contentAreaContainer'
    | 'contentArea1Container'
    | 'contentArea2Container'
    | 'itemsContainer'
    | 'itemContainer']?: T;
};

export type OpeningTimesItemClasses<T> = {
  [key in 'itemRoot' | 'itemLabel' | 'itemValue' | 'itemClosed' | 'itemHighlight' | 'itemIcon']?: T;
};

export interface OpeningTimesItemProps {
  classes?: OpeningTimesItemClasses<string>;
  id: string;
  label?: string;
  value?: string;
  closed?: Boolean;
  icon?: string;
}

export interface OpeningTimesProps {
  classes?: OpeningTimesClasses<string>;
  items?: OpeningTimesItemProps[];
  headings?: HeadingsProps;
  contentArea1?: Block[];
  contentArea2?: Block[];
}

const OpeningTimes = ({
  classes = {},
  items = [],
  headings,
  contentArea1 = [],
  contentArea2 = [],
}: OpeningTimesProps) => {
  const isCurrentDay = useCallback((day?: string) => {
    const currentDay = new Date().toLocaleDateString('en-GB', { weekday: 'long' });
    return day?.includes(currentDay);
  }, []);

  return (
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
        <div className={classes.itemsContainer}>
          {items.map((item) => (
            <div
              key={item.id}
              className={cn(item.classes?.itemRoot, {
                [item.classes?.itemHighlight || '']: isCurrentDay(item.label),
                [item.classes?.itemClosed || '']: item.closed,
              })}
            >
              {item.icon && <Icon className={cn(item.icon, item.classes?.itemIcon)} />}
              <div className={item.classes?.itemLabel}>{item.label}</div>
              {item.value && <div className={item.classes?.itemValue}>{item.value}</div>}
            </div>
          ))}
        </div>
        {contentArea2?.length > 0 && (
          <div className={cn(classes.contentAreaContainer, classes.contentArea2Container)}>
            <BlockList blocks={contentArea2} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OpeningTimes;
