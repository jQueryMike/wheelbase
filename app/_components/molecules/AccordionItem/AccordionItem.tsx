'use client';

// eslint-disable-next-line import/no-cycle
import BLOCKS from '@components/Blocks';
import { Heading, Icon } from '@components/atoms';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import { useToggle } from 'app/_hooks';
import cn from 'classnames';
import { Suspense, useEffect, useState } from 'react';

import accordionItemClasses from './AccordionItem.classes';
import { AccordionItemProps } from './AccordionItem.types';

const AccordionItem = ({ heading, contentArea = [], styling, overrides, icon }: AccordionItemProps) => {
  const resolvedHeading = heading ? Heading(heading) : undefined;
  const classes = buildClasses(accordionItemClasses, overrides);
  const components = contentArea.map(({ name, id, ...props }: any) => [
    name,
    BLOCKS[name as keyof typeof BLOCKS],
    id,
    props,
  ]);
  const [isOpen, toggle] = useToggle();
  return (
    <BaseComponent as="div" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'molecules' }}>
      <div className="flex cursor-pointer items-center justify-between border border-gray-200 p-4">
        {resolvedHeading}
        <span onClick={() => toggle()}>
          <Icon icon="fa fa-chevron-down" styling={icon.styling} />
        </span>
      </div>
      <div className={cn(!isOpen ? 'hidden' : '', 'overflow-clip bg-gray-100 px-6 py-3')}>
        {components?.length > 0 && (
          <div className={classes?.contentAreaContainer} data-testid="content-area">
            {components.map(([name, Component, id, props]: any) => (
              <Suspense fallback={<div>Loading {name}...</div>} key={id}>
                <Component {...props} />
              </Suspense>
            ))}
          </div>
        )}
      </div>
    </BaseComponent>
  );
};

export default AccordionItem;
