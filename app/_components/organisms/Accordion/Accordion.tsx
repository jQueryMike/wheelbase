'use client';

import { Heading } from '@components/atoms';
// eslint-disable-next-line import/no-cycle
import { AccordionItem } from '@components/molecules';
import { BaseComponent } from '@components/utils';
import { Block } from '@types';
import { buildClasses } from '@utils/buildClasses';
import { useEffect, useState } from 'react';

import accordionClasses from './Accordion.classes';
import { AccordionProps } from './Accordion.types';

const Accordion = ({ heading, subheading, items, fixedIcon, styling, overrides }: AccordionProps & Block) => {
  const classes = buildClasses(accordionClasses, overrides);

  const [expandedItemIds, setExpandedItemIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const toggleAccordionItem = (id: string) => {
    if (expandedItemIds.includes(id)) {
      setExpandedItemIds(expandedItemIds.filter((i) => i !== id));
    } else {
      setExpandedItemIds([...expandedItemIds, id]);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  let resolvedHeading = null;
  let resolvedSubheading = null;

  if (!loading) {
    resolvedHeading = heading ? Heading(heading) : undefined;
    resolvedSubheading = subheading
      ? Heading({ ...subheading, 'data-testid': 'subheading', textType: 'subheading' })
      : undefined;
  }

  return (
    <BaseComponent as="div" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'organisms' }}>
      <div className={classes.container}>
        {(heading || subheading) && (
          <div data-testid="headings-container" className={classes.headingContainer}>
            {resolvedHeading}
            {resolvedSubheading}
          </div>
        )}
        {items.length > 0 && (
          <div className={classes.itemsContainer}>
            {items.map((item: any) => {
              const isExpanded = expandedItemIds.includes(item.id);

              return (
                <AccordionItem
                  {...item}
                  isOpen={isExpanded}
                  onClick={() => toggleAccordionItem(item.id)}
                  icon={fixedIcon}
                  key={item.id}
                />
              );
            })}
          </div>
        )}
      </div>
    </BaseComponent>
  );
};

export default Accordion;
