import { BlockList } from '@components/utility-components/BlockList';
import { Icon } from '@components/utility-components/Icon';
import Block from '@interfaces/Block';
import cn from 'classnames';
import NextLink from 'next/link';

import { Heading, HeadingProps, HeadingSize, HeadingTag } from '../Heading';
import { Subheading, SubheadingProps } from '../Subheading';

export type TelephoneNumberClasses<T> = {
  [key in
    | 'root'
    | 'headingsContainer'
    | 'headingContainer'
    | 'subheadingContainer'
    | 'contentAreaContainer'
    | 'contentArea1Container'
    | 'contentArea2Container']?: T;
};

export type TelephoneNumberItemClasses<T> = {
  [key in 'contactItem' | 'contactItemIcon' | 'contactItemLabel']?: T;
};

export interface TelephoneNumberProps {
  classes?: TelephoneNumberClasses<string>;
  heading?: HeadingProps;
  subheading?: SubheadingProps;
  contentArea1?: Block[];
  contentArea2?: Block[];
  contactItems?: TelephoneNumberItemProps[];
  itemIcon?: any;
}

export interface TelephoneNumberItemProps {
  classes: TelephoneNumberItemClasses<string>;
  key: string;
  icon?: string;
  label: string;
  href: string;
}

const TelephoneNumber = ({
  classes = {},
  heading,
  subheading,
  contentArea1,
  contentArea2,
  contactItems,
  itemIcon,
}: TelephoneNumberProps) => (
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
    {contactItems?.map((item) => (
      <NextLink href={item.href} key={item.key} className={item.classes.contactItem} passHref>
        {itemIcon && <Icon className={cn(item.classes.contactItemIcon, itemIcon)}></Icon>}
        <em className={item.classes.contactItemLabel}>{item.label}</em>
      </NextLink>
    ))}
  </div>
);

export default TelephoneNumber;
