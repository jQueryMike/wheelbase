import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { AccordionClasses, AccordionItemClasses } from '../Accordion';
import AccordionVariant from './AccordionVariant';

const location = 'Accordion/variants/2';

let classes: AccordionClasses<ClassesProperty> = {};
let itemClasses: AccordionItemClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  rootInner: {
    default: tw`space-y-14`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
  },
  itemsContainer: {
    default: tw`mx-auto mt-8 w-full max-w-2xl  space-y-4`,
    lg: tw`lg:max-w-3xl`,
  },
};

itemClasses = {
  itemRoot: tw`overflow-hidden border border-gray-200`,
  itemToggleButton: {
    default: tw`flex w-full items-center justify-between p-4`,
    hover: tw`hover:bg-body-alt/50`,
  },
  itemToggleButtonExpanded: tw`border-b border-gray-200`,
  itemToggleButtonCollapsed: tw``,
  itemToggleIconContainer: tw`text-base text-accent transition duration-150`,
  itemToggleIconContainerExpanded: tw`-rotate-180`,
  itemToggleIconContainerCollapsed: tw`rotate-0`,
  itemToggleIcon: tw`fa-solid fa-chevron-down`,
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
