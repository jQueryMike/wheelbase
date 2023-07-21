import Block from '@interfaces/Block';
import cn from 'classnames';
import { useCallback } from 'react';

import { BlockList } from '../../utility-components/BlockList';
import { Icon } from '../../utility-components/Icon';
import { Headings, HeadingsProps } from '../Headings';

export type OpeningTimesClasses<T> = {
  [key in
    | 'root'
    | 'headingsContainer'
    | 'contentAreaContainer'
    | 'contentArea1Container'
    | 'contentArea2Container'
    | 'itemsContainer'
    | 'itemContainer']?: T;
};

export type OpeningTimesItemClasses<T> = {
  [key in 'root' | 'label' | 'value' | 'closed' | 'highlight' | 'icon']?: T;
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
            className={cn(item.classes?.root, {
              [item.classes?.highlight || '']: isCurrentDay(item.label),
              [item.classes?.closed || '']: item.closed,
            })}
          >
            {item.icon && <Icon className={cn(item.icon, item.classes?.icon)} />}
            <div className={item.classes?.label}>{item.label}</div>
            {item.value && <div className={item.classes?.value}>{item.value}</div>}
          </div>
        ))}
      </div>
      {contentArea2?.length > 0 && (
        <div className={cn(classes.contentAreaContainer, classes.contentArea2Container)}>
          <BlockList blocks={contentArea2} />
        </div>
      )}
    </div>
  );
};

export default OpeningTimes;
