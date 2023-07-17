import { BlockList } from '@components/utility-components/BlockList';
import Block from '@interfaces/Block';
import cn from 'classnames';

import { Heading, HeadingProps, HeadingSize, HeadingTag } from '../Heading';
import { Subheading, SubheadingProps } from '../Subheading';

export type OpeningTimesClasses<T> = {
  [key in
    | 'root'
    | 'headingContainer'
    | 'headingsContainer'
    | 'subheadingContainer'
    | 'contentAreaContainer'
    | 'contentArea1Container'
    | 'contentArea2Container'
    | 'timesContainer']?: T;
};

export type OpeningTimesItemClasses<T> = {
  [key in 'timeElement' | 'day' | 'times' | 'closed' | 'highlight' | 'icon']?: T;
};

export interface OpeningTimesItemProps {
  classes?: OpeningTimesItemClasses<string>;
  id: string;
  day: string;
  openingTime: string;
  closingTime: string;
  closed?: Boolean;
}

export interface OpeningTimesProps {
  classes?: OpeningTimesClasses<string>;
  times: OpeningTimesItemProps[];
  heading?: HeadingProps;
  subheading?: SubheadingProps;
  contentArea1?: Block[];
  contentArea2?: Block[];
  icon?: string;
}

export const isCurrentDay = (day: string): boolean => {
  const currentDay = new Date().getDay();
  const days: any[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return day === days[currentDay];
};

const OpeningTimes = ({
  classes = {},
  times,
  icon,
  heading,
  subheading,
  contentArea1,
  contentArea2,
}: OpeningTimesProps) => (
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

    {contentArea1?.length && (
      <div className={cn(classes.contentAreaContainer, classes.contentArea1Container)}>
        <BlockList blocks={contentArea1} />
      </div>
    )}

    {contentArea2?.length && (
      <div className={cn(classes.contentAreaContainer, classes.contentArea2Container)}>
        <BlockList blocks={contentArea2} />
      </div>
    )}
    <div className={classes.timesContainer}>
      {times.map((time) => (
        <div key={time.day} className={time.classes?.timeElement}>
          <p className={cn(time.classes?.day, isCurrentDay(time.day) ? time.classes?.highlight : '')}>
            {icon && <i className={cn(icon, time.classes?.icon)} />}
            {time.day}
          </p>
          {time.closed && <p className={time.classes?.closed}>Closed</p>}
          {!time.closed && <p className={time.classes?.times}>{`${time.openingTime} - ${time.closingTime}`}</p>}
        </div>
      ))}
    </div>
  </div>
);

export default OpeningTimes;
