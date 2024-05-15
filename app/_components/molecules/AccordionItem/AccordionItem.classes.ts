import { ClassesBuilder, tw } from '@utils';

import { AccordionItemClasses } from './AccordionItem.types';

const location = 'AccordionItem/AccordionItem.classes';

const classes: AccordionItemClasses = {
  root: tw`mx-auto `,
  accordionHeading: tw`flex cursor-pointer items-center justify-between p-4`,
};

const accordionItemClasses = new ClassesBuilder({ location, classes }).classes;

export default accordionItemClasses;
