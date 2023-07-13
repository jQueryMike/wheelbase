import Block from '@interfaces/Block';
import cn from 'classnames';
import { useState } from 'react';

import { BlockList } from '../../utility-components/BlockList';
import { Icon } from '../../utility-components/Icon';
import { Heading, HeadingProps, HeadingSize, HeadingTag } from '../Heading';
import { Subheading, SubheadingProps } from '../Subheading';

export type AccordionClasses<T> = {
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

export type AccordionItemClasses<T> = {
  [key in
    | 'root'
    | 'toggleButton'
    | 'toggleButtonExpanded'
    | 'toggleButtonCollapsed'
    | 'toggleIconContainer'
    | 'toggleIconContainerExpanded'
    | 'toggleIconContainerCollapsed'
    | 'toggleIcon'
    | 'headingContainer'
    | 'contentContainer'
    | 'contentExpanded'
    | 'contentCollapsed']?: T;
};

export interface AccordionItem {
  classes?: AccordionItemClasses<string>;
  heading?: HeadingProps;
  content?: Block[];
  id: string;
}

export interface AccordionProps {
  classes?: AccordionClasses<string>;
  heading?: HeadingProps;
  subheading?: SubheadingProps;
  items?: AccordionItem[];
  contentArea1?: Block[];
  contentArea2?: Block[];
}

const Accordion = ({
  classes = {},
  heading,
  subheading,
  items = [],
  contentArea1 = [],
  contentArea2 = [],
}: AccordionProps) => {
  const [expandedItemIds, setExpandedItemIds] = useState<string[]>([]);

  const toggleAccordionItem = (id: string) => {
    if (expandedItemIds.includes(id)) {
      setExpandedItemIds(expandedItemIds.filter((i) => i !== id));
    } else {
      setExpandedItemIds([...expandedItemIds, id]);
    }
  };

  return (
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

      <div className={classes.itemsContainer}>
        {items.map((item) => {
          const isExpanded = expandedItemIds.includes(item.id);

          return (
            <div key={item.id} className={classes.itemContainer}>
              <div className={item.classes?.root}>
                <button
                  onClick={() => toggleAccordionItem(item.id)}
                  className={cn(
                    item.classes?.toggleButton,
                    isExpanded ? item.classes?.toggleButtonExpanded : item.classes?.toggleButtonCollapsed,
                  )}
                >
                  {item.heading && (
                    <div className={item.classes?.headingContainer}>
                      <Heading tag={HeadingTag.H3} size={HeadingSize.MD} {...item.heading} />
                    </div>
                  )}
                  <div
                    className={cn(
                      item.classes?.toggleIconContainer,
                      isExpanded
                        ? item.classes?.toggleIconContainerExpanded
                        : item.classes?.toggleIconContainerCollapsed,
                    )}
                  >
                    <Icon className={item.classes?.toggleIcon} />
                  </div>
                </button>
                {item.content && item.content.length > 0 && (
                  <div
                    className={cn(
                      item.classes?.contentContainer,
                      isExpanded ? item.classes?.contentExpanded : item.classes?.contentCollapsed,
                    )}
                  >
                    <BlockList blocks={item.content} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {contentArea2?.length > 0 && (
        <div className={classes.contentArea2Container}>
          <BlockList blocks={contentArea2} />
        </div>
      )}
    </div>
  );
};

export default Accordion;
