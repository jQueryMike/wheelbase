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
    | 'itemsContainer'
    | 'itemContainer'
    | 'contentAreaContainer'
    | 'contentArea1Container'
    | 'contentArea2Container']?: T;
};

export type ContactDetailsItemClasses<T> = {
  [key in 'itemRoot' | 'itemLink' | 'itemIconContainer' | 'itemIcon' | 'itemLabelContainer' | 'itemLabel']?: T;
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
      {contactItems && (
        <div className={classes.itemsContainer}>
          {contactItems?.map((item) => (
            <div key={item.id} className={classes.itemContainer}>
              <div className={item.classes?.itemRoot}>
                <NextLink href={item.href} className={item.classes?.itemLink}>
                  {item.icon && (
                    <span className={item.classes?.itemIconContainer}>
                      <Icon className={cn(item.icon, item.classes?.itemIcon)} />
                    </span>
                  )}
                  {item.label && (
                    <span className={item.classes?.itemLabelContainer}>
                      <span className={item.classes?.itemLabel}>{item.label}</span>
                    </span>
                  )}
                </NextLink>
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
);

export default ContactDetails;
