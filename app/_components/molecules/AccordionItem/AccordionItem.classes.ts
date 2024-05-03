import { ClassesBuilder, tw } from '@utils';

import { AccordionItemClasses } from './AccordionItem.types';

const location = 'AccordionItem/AccordionItem.classes';

const classes: AccordionItemClasses = {
  root: tw`container mx-auto`,
};

const accordionItemClasses = new ClassesBuilder({ location, classes }).classes;

export default accordionItemClasses;
