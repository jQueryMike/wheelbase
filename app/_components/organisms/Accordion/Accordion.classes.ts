import { ClassesBuilder, tw } from '@utils';

import { AccordionClasses } from './Accordion.types';

const location = 'Accordion/Accordion.classes';

const classes: AccordionClasses = {
  root: tw``,
  headingContainer: tw`text-center`,
  container: tw`container mx-auto`,
};

const accordionClasses = new ClassesBuilder({ location, classes }).classes;

export default accordionClasses;
