import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { AccordionClasses, AccordionItemClasses } from '../Accordion';
import AccordionVariant from './AccordionVariant';

const location = 'Accordion/variants/1';

let classes: AccordionClasses<ClassesProperty> = {};
let itemClasses: AccordionItemClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`space-y-4 @container`,
    '@xl': tw`@xl:space-y-6`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl': tw`@xl:space-y-6`,
  },
  itemsContainer: {
    default: tw`space-y-4 py-6`,
  },
};

itemClasses = {
  root: tw`border-divider overflow-hidden rounded-lg border`,
  toggleButton: {
    default: tw`flex w-full items-center justify-between p-4`,
    hover: tw`hover:bg-body-light/50`,
  },
  toggleButtonExpanded: tw`border-divider border-b`,
  toggleButtonCollapsed: tw``,
  toggleIconContainer: tw`text-accent text-sm transition duration-150`,
  toggleIconContainerExpanded: tw`-rotate-180`,
  toggleIconContainerCollapsed: tw`rotate-0`,
  toggleIcon: tw`fa-solid fa-arrow-down`,
  contentAreaContainer: {
    default: tw`space-y-4 p-4`,
    '@xl': tw`@xl:p-5`,
    '@3xl': tw`@3xl:p-6`,
    '@5xl': tw`@5xl:p-8`,
  },
  contentAreaContainerExpanded: tw`block`,
  contentAreaContainerCollapsed: tw`hidden`,
};

const accordionVariant: AccordionVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  itemClasses: new ClassesBuilder({ location, classes: itemClasses }).classes,
};

export default accordionVariant;
