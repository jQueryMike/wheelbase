import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { AccordionClasses, AccordionItemClasses } from '../Accordion';
import AccordionVariant from './AccordionVariant';

const location = 'Accordion/variants/5';

let classes: AccordionClasses<ClassesProperty> = {};
let itemClasses: AccordionItemClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw` @container/accordion`,
  },
  rootInner: {
    default: tw`space-y-4`,
    '@xl/accordion': tw`@xl/accordion:space-y-6`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl/accordion': tw`@xl/accordion:space-y-6`,
  },
  itemsContainer: {
    default: tw`space-y-4 rounded bg-white p-4 shadow-2xl`,
    md: tw`md:p-6`,
    lg: tw`lg:p-8`,
    xl: tw`xl:rounded-3xl xl:p-12`,
  },
};

itemClasses = {
  itemRoot: tw`overflow-hidden rounded-lg border border-divider`,
  itemToggleButton: {
    default: tw`flex w-full items-center justify-between p-4`,
  },
  itemToggleButtonExpanded: tw``,
  itemToggleButtonCollapsed: tw``,
  itemToggleIconContainer: tw`text-sm text-accent transition duration-150`,
  itemToggleIcon: tw`fa-solid fa-plus`,
  itemContentAreaContainer: {
    default: tw`space-y-4 p-4`,
  },
  itemContentAreaContainerExpanded: tw`block`,
  itemContentAreaContainerCollapsed: tw`hidden`,
};

const accordionVariant: AccordionVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default accordionVariant;
