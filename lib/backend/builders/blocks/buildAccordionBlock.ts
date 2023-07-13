import { AccordionItem, AccordionProps } from '@components/blocks/Accordion';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildHeadingBlock from './buildHeadingBlock';
import buildSubheadingBlock from './buildSubheadingBlock';

const buildAccordionBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
}: BlockBuilderConfig): AccordionProps | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalAccordionThemeProperties = globalTheme?.accordionTheme?.items[0]?.content?.properties;

    // Get active variant from instance > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalAccordionThemeProperties?.variant;
    const blockVariantId = instanceVariantId || globalVariantId || '1';
    const activeVariant = require(`/lib/components/blocks/Accordion/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalAccordionThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const accordion: Block & AccordionProps = { id, name };

    // Add classes
    accordion.classes = buildTheme({
      classes: activeVariant.classes,
      globalOverrides,
      instanceOverrides,
    });

    // Add heading
    const heading = content?.heading?.items[0];
    if (heading) {
      const headingThemeProperties = globalAccordionThemeProperties?.headingTheme?.items[0]?.content?.properties;

      accordion.heading = buildHeadingBlock({
        id: heading.content.id,
        name: 'Heading',
        content: heading.content.properties,
        settings: heading.settings.properties,
        parentVariantId: headingThemeProperties?.variant,
        parentOverrides: extractClassOverrides(headingThemeProperties),
        globalTheme,
      });
    }

    // Add subheading
    const subheading = content?.subheading?.items[0];
    if (subheading) {
      const subheadingThemeProperties = globalAccordionThemeProperties?.subheadingTheme?.items[0]?.content?.properties;

      accordion.subheading = buildSubheadingBlock({
        id: subheading.content.id,
        name: 'Subheading',
        content: subheading.content.properties,
        settings: subheading.settings.properties,
        parentVariantId: subheadingThemeProperties?.variant,
        parentOverrides: extractClassOverrides(subheadingThemeProperties),
        globalTheme,
      });
    }

    // Build items
    const accordionItems = content?.items?.items;
    if (accordionItems && accordionItems.length) {
      accordion.items = accordionItems.map((item: any) => {
        const itemContent = item.content?.properties;
        const itemSettings = item.settings?.properties;

        // Get global and instance overrides
        const itemGlobalOverrides = extractClassOverrides(globalOverrides, 'tw_item_');
        const itemInstanceOverrides = extractClassOverrides(itemSettings);

        // Build intiial item
        const accordionItem: AccordionItem = { id: item.content.id };

        accordionItem.classes = buildTheme({
          classes: activeVariant.itemClasses,
          globalOverrides: itemGlobalOverrides,
          instanceOverrides: itemInstanceOverrides,
        });

        // Add heading
        const itemHeading = itemContent.heading?.items[0];
        if (itemHeading) {
          const itemHeadingThemeProperties =
            globalAccordionThemeProperties?.itemHeadingTheme?.items[0]?.content?.properties;

          accordionItem.heading = buildHeadingBlock({
            id: itemHeading.content.id,
            name: 'Heading',
            content: itemHeading.content.properties,
            settings: itemHeading.settings.properties,
            parentVariantId: itemHeadingThemeProperties?.variant,
            parentOverrides: extractClassOverrides(itemHeadingThemeProperties),
            globalTheme,
          });
        }

        accordionItem.content = buildAdditionalContent({
          items: itemContent.content?.items,
          parentThemeProperties: globalAccordionThemeProperties,
          globalTheme,
        });

        return accordionItem;
      });
    }

    accordion.contentArea1 = buildAdditionalContent({
      items: content?.contentArea1?.items,
      parentThemeProperties: globalAccordionThemeProperties,
      globalTheme,
    });

    accordion.contentArea2 = buildAdditionalContent({
      items: content?.contentArea2?.items,
      parentThemeProperties: globalAccordionThemeProperties,
      globalTheme,
    });

    return accordion;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildAccordionBlock;
