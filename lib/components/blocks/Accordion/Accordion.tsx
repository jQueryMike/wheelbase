import Block from '@interfaces/Block';
import cn from 'classnames';
import { useState } from 'react';

import { BlockList } from '../../utility-components/BlockList';
import { Icon } from '../../utility-components/Icon';
import { Heading, HeadingProps, HeadingSize, HeadingTag } from '../Heading';
import { Headings, HeadingsProps } from '../Headings';

export type AccordionClasses<T> = {
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

export type AccordionItemClasses<T> = {
  [key in
    | 'itemRoot'
    | 'itemToggleButton'
    | 'itemToggleButtonExpanded'
    | 'itemToggleButtonCollapsed'
    | 'itemToggleIconContainer'
    | 'itemToggleIconContainerExpanded'
    | 'itemToggleIconContainerCollapsed'
    | 'itemToggleIcon'
    | 'itemHeadingContainer'
    | 'itemContentAreaContainer'
    | 'itemContentAreaContainerExpanded'
    | 'itemContentAreaContainerCollapsed']?: T;
};

export interface AccordionItem {
  classes?: AccordionItemClasses<string>;
  heading?: HeadingProps;
  contentArea?: Block[];
  id: string;
}

export interface AccordionProps {
  classes?: AccordionClasses<string>;
  headings?: HeadingsProps;
  items?: AccordionItem[];
  contentArea1?: Block[];
  contentArea2?: Block[];
}

const Accordion = ({ classes = {}, headings, items = [], contentArea1 = [], contentArea2 = [] }: AccordionProps) => {
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
          {items.map((item) => {
            const isExpanded = expandedItemIds.includes(item.id);

            return (
              <div key={item.id} className={classes.itemContainer}>
                <div className={item.classes?.itemRoot}>
                  <button
                    onClick={() => toggleAccordionItem(item.id)}
                    className={cn(
                      item.classes?.itemToggleButton,
                      isExpanded ? item.classes?.itemToggleButtonExpanded : item.classes?.itemToggleButtonCollapsed,
                    )}
                  >
                    {item.heading && (
                      <div className={item.classes?.itemHeadingContainer}>
                        <Heading tag={HeadingTag.H4} size={HeadingSize.Small} {...item.heading} />
                      </div>
                    )}
                    <div
                      className={cn(
                        item.classes?.itemToggleIconContainer,
                        isExpanded
                          ? item.classes?.itemToggleIconContainerExpanded
                          : item.classes?.itemToggleIconContainerCollapsed,
                      )}
                    >
                      <Icon className={item.classes?.itemToggleIcon} />
                    </div>
                  </button>
                  {item.contentArea && item.contentArea.length > 0 && (
                    <div
                      className={cn(
                        item.classes?.itemContentAreaContainer,
                        isExpanded
                          ? item.classes?.itemContentAreaContainerExpanded
                          : item.classes?.itemContentAreaContainerCollapsed,
                      )}
                    >
                      <BlockList blocks={item.contentArea} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
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

export default Accordion;
