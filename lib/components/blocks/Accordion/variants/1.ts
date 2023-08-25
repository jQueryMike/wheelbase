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
  itemRoot: tw`overflow-hidden rounded-lg border border-divider`,
  itemToggleButton: {
    default: tw`flex w-full items-center justify-between p-4`,
    hover: tw`hover:bg-body-alt/50`,
  },
  itemToggleButtonExpanded: tw`border-b border-divider`,
  itemToggleButtonCollapsed: tw``,
  itemToggleIconContainer: tw`text-sm text-accent transition duration-150`,
  itemToggleIconContainerExpanded: tw`-rotate-180`,
  itemToggleIconContainerCollapsed: tw`rotate-0`,
  itemToggleIcon: tw`fa-solid fa-arrow-down`,
  itemContentAreaContainer: {
    default: tw`space-y-4 p-4`,
    '@xl/accordion': tw`@xl/accordion:p-5`,
    '@3xl/accordion': tw`@3xl/accordion:p-6`,
    '@5xl/accordion': tw`@5xl/accordion:p-8`,
  },
  itemContentAreaContainerExpanded: tw`block`,
  itemContentAreaContainerCollapsed: tw`hidden`,
};

const accordionVariant: AccordionVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default accordionVariant;
