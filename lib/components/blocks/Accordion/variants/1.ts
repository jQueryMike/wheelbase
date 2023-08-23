import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { AccordionClasses, AccordionItemClasses } from '../Accordion';
import AccordionVariant from './AccordionVariant';

const location = 'Accordion/variants/1';

let classes: AccordionClasses<ClassesProperty> = {};
let itemClasses: AccordionItemClasses<ClassesProperty> = {};

classes = {
  root: tw`@container/accordion`,
  rootInner: {
    default: tw`space-y-4`,
    '@xl/accordion': tw`@xl/accordion:space-y-6`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl/accordion': tw`@xl/accordion:space-y-6`,
  },
  itemsContainer: {
    default: tw`space-y-4 py-6`,
  },
};

itemClasses = {
  root: tw`overflow-hidden rounded-lg border border-divider`,
  toggleButton: {
    default: tw`flex w-full items-center justify-between p-4`,
    hover: tw`hover:bg-body-alt/50`,
  },
  toggleButtonExpanded: tw`border-b border-divider`,
  toggleButtonCollapsed: tw``,
  toggleIconContainer: tw`text-sm text-accent transition duration-150`,
  toggleIconContainerExpanded: tw`-rotate-180`,
  toggleIconContainerCollapsed: tw`rotate-0`,
  toggleIcon: tw`fa-solid fa-arrow-down`,
  contentAreaContainer: {
    default: tw`space-y-4 p-4`,
    '@xl/accordion': tw`@xl/accordion:p-5`,
    '@3xl/accordion': tw`@3xl/accordion:p-6`,
    '@5xl/accordion': tw`@5xl/accordion:p-8`,
  },
  contentAreaContainerExpanded: tw`block`,
  contentAreaContainerCollapsed: tw`hidden`,
};

const accordionVariant: AccordionVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default accordionVariant;
