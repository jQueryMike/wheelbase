import Block from '@interfaces/Block';
import cn from 'classnames';
import NextLink from 'next/link';

import { BlockList } from '../../utility-components/BlockList';
import { Icon } from '../../utility-components/Icon';
import { Headings, HeadingsProps } from '../Headings';

export type ContactDetailsClasses<T> = {
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

export type ContactDetailsItemClasses<T> = {
  [key in 'root' | 'link' | 'iconContainer' | 'icon' | 'labelContainer' | 'label']?: T;
};

export interface ContactDetailsProps {
  classes?: ContactDetailsClasses<string>;
  headings?: HeadingsProps;
  contentArea1?: Block[];
  contentArea2?: Block[];
  contactItems?: ContactDetailsItemProps[];
}

export interface ContactDetailsItemProps {
  classes?: ContactDetailsItemClasses<string>;
  id: string;
  icon?: string;
  label: string;
  href: string;
}

const ContactDetails = ({
  classes = {},
  headings,
  contentArea1 = [],
  contentArea2 = [],
  contactItems = [],
}: ContactDetailsProps) => (
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
      {contactItems?.map((item) => (
        <div key={item.id} className={item.classes?.root}>
          <NextLink href={item.href} className={item.classes?.link}>
            {item.icon && (
              <span className={item.classes?.iconContainer}>
                <Icon className={cn(item.icon, item.classes?.icon)} />
              </span>
            )}
            {item.label && (
              <span className={item.classes?.labelContainer}>
                <em className={item.classes?.label}>{item.label}</em>
              </span>
            )}
          </NextLink>
        </div>
      ))}
      {contentArea2?.length > 0 && (
        <div className={cn(classes.contentAreaContainer, classes.contentArea2Container)}>
          <BlockList blocks={contentArea2} />
        </div>
      )}
    </div>
  </div>
);

export default ContactDetails;
