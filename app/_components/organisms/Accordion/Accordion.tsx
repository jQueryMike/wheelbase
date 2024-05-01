import { Heading } from '@components/atoms';
// eslint-disable-next-line import/no-cycle
import { AccordionItem } from '@components/molecules';
import { BaseComponent } from '@components/utils';
import { Block } from '@types';
import { buildClasses } from '@utils/buildClasses';

import accordionClasses from './Accordion.classes';
import { AccordionProps } from './Accordion.types';

const Accordion = async ({ heading, subheading, items, fixedIcon, styling, overrides }: AccordionProps & Block) => {
  const classes = buildClasses(accordionClasses, overrides);

  const resolvedHeading = heading ? await Heading(heading) : undefined;
  const resolvedSubheading = subheading
    ? await Heading({ ...subheading, 'data-testid': 'subheading', textType: 'subheading' })
    : undefined;

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
              return <AccordionItem {...item} icon={fixedIcon} key={item.id} />;
            })}
          </div>
        )}
      </div>
    </BaseComponent>
  );
};

export default Accordion;
