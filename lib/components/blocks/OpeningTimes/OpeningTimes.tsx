import { BlockList } from '@components/utility-components/BlockList';
import Block from '@interfaces/Block';
import cn from 'classnames';

import { Headings, HeadingsProps } from '../Headings';

export type OpeningTimesClasses<T> = {
  [key in
    | 'root'
    | 'headingsContainer'
    | 'subheadingContainer'
    | 'contentAreaContainer'
    | 'contentArea1Container'
    | 'contentArea2Container'
    | 'timesContainer']?: T;
};

export type OpeningTimesItemClasses<T> = {
  [key in 'root' | 'day' | 'times' | 'closed' | 'highlight' | 'icon']?: T;
};

export interface OpeningTimesItemProps {
  classes?: OpeningTimesItemClasses<string>;
  id: string;
  day: string;
  openingTime: string;
  closingTime: string;
  closed?: Boolean;
  isCurrentDay?: Boolean;
}

export interface OpeningTimesProps {
  classes?: OpeningTimesClasses<string>;
  times: OpeningTimesItemProps[];
  headings?: HeadingsProps;
  contentArea1?: Block[];
  contentArea2?: Block[];
  icon?: string;
}

export const isCurrentDay = (day: string): boolean => {
  const currentDay = new Date().getDay();
  const days: any[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return day === days[currentDay];
};

const OpeningTimes = ({ classes = {}, times, icon, headings, contentArea1, contentArea2 }: OpeningTimesProps) => (
  <div className={classes.root}>
    {headings && (
      <div className={classes.headingsContainer}>
        <Headings {...headings} />
      </div>
    )}

    {contentArea1?.length && (
      <div className={cn(classes.contentAreaContainer, classes.contentArea1Container)}>
        <BlockList blocks={contentArea1} />
      </div>
    )}

    <div className={classes.timesContainer}>
      {times.map((time) => (
        <div key={time.day} className={time.classes?.root}>
          <p className={cn(time.classes?.day, time.isCurrentDay ? time.classes?.highlight : '')}>
            {icon && <i className={cn(icon, time.classes?.icon)} />}
            {time.day}
          </p>
          {time.closed && <p className={time.classes?.closed}>Closed</p>}
          {!time.closed && <p className={time.classes?.times}>{`${time.openingTime} - ${time.closingTime}`}</p>}
        </div>
      ))}
    </div>

    {contentArea2?.length && (
      <div className={cn(classes.contentAreaContainer, classes.contentArea2Container)}>
        <BlockList blocks={contentArea2} />
      </div>
    )}
  </div>
);

export default OpeningTimes;
