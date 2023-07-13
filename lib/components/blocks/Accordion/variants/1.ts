import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { AccordionClasses, AccordionItemClasses } from '../Accordion';
import AccordionVariant from './AccordionVariant';

const location = 'Accordion/variants/1';

let classes: AccordionClasses<ClassesProperty> = {};
let itemClasses: AccordionItemClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`space-y-4`,
    sm: tw`sm:space-y-6`,
    lg: tw`lg:space-y-8`,
  },
  headingsContainer: tw`flex flex-col-reverse space-y-2 space-y-reverse`,
  itemsContainer: tw`space-y-4`,
  contentArea2Container: tw`space-y-4`,
};

itemClasses = {
  root: tw`overflow-hidden rounded-lg border border-gray-200`,
  toggleButton: {
    default: tw`flex w-full items-center justify-between p-4`,
    hover: tw`hover:bg-gray-50`,
  },
  toggleButtonExpanded: tw`border-b border-gray-200`,
  toggleButtonCollapsed: tw``,
  toggleIconContainer: tw`text-sm text-accent transition duration-150`,
  toggleIconContainerExpanded: tw`-rotate-180`,
  toggleIconContainerCollapsed: tw`rotate-0`,
  toggleIcon: tw`fa-solid fa-arrow-down`,
  contentContainer: tw`space-y-4 p-4`,
  contentExpanded: tw`block`,
  contentCollapsed: tw`hidden`,
};

const accordionVariant: AccordionVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default accordionVariant;
