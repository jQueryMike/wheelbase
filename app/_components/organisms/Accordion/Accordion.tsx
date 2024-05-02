import { Heading } from '@components/atoms';
// eslint-disable-next-line import/no-cycle
import { AccordionItem } from '@components/molecules';
import { BaseComponent } from '@components/utils';
import { Block } from '@types';
import { buildClasses } from '@utils/buildClasses';

import accordionClasses from './Accordion.classes';
import { AccordionProps } from './Accordion.types';

const Accordion = ({ heading, subheading, items, fixedIcon, styling, overrides }: AccordionProps & Block) => {
  const classes = buildClasses(accordionClasses, overrides);
  return (
    <BaseComponent as="div" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'organism' }}>
      <div className={classes.container}>
        {(heading || subheading) && (
          <div data-testid="headings-container" className={classes.headingContainer}>
            {heading && <Heading {...heading} />}
            {subheading && <Heading {...subheading} data-testid="subheading" textType="subheading" />}
          </div>
        )}
        {items.length > 0 && (
          <div className={classes.itemsContainer}>
            {items.map((item: any) => (
              <AccordionItem {...item} icon={fixedIcon} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </BaseComponent>
  );
};

export default Accordion;