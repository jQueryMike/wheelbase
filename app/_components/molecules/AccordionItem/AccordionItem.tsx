'use client';

// eslint-disable-next-line import/no-cycle
import BLOCKS from '@components/Blocks';
import { Heading, Icon } from '@components/atoms';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import cn from 'classnames';
import { Suspense, useEffect, useState } from 'react';

import accordionItemClasses from './AccordionItem.classes';
import { AccordionItemProps } from './AccordionItem.types';

const AccordionItem = ({
  heading,
  contentArea = [],
  styling,
  overrides,
  isOpen,
  onClick,
  icon,
}: AccordionItemProps) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  let resolvedHeading = null;

  if (!loading) {
    resolvedHeading = heading ? Heading(heading) : undefined;
  }
  const classes = buildClasses(accordionItemClasses, overrides);
  const components = contentArea.map(({ name, id, ...props }: any) => [
    name,
    BLOCKS[name as keyof typeof BLOCKS],
    id,
    props,
  ]);
  return (
    <BaseComponent as="div" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'molecules' }}>
      <div className="space-y-0">
        <div className="flex cursor-pointer items-center justify-between border border-gray-200 p-4">
          {resolvedHeading}
          <span className={cn(isOpen ? 'rotate-180' : '', 'transition duration-150')} onClick={onClick}>
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
      </div>
    </BaseComponent>
  );
};

export default AccordionItem;
