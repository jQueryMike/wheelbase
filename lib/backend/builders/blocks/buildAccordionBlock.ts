import { AccordionItem, AccordionProps } from '@components/blocks/Accordion';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildBlockClasses from '../buildBlockClasses';
import extractInheritedTheme from '../extractInheritedTheme';
import buildHeadingBlock from './buildHeadingBlock';
import buildHeadingsBlock from './buildHeadingsBlock';

const buildAccordionBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  inheritedThemes,
}: BlockBuilderConfig): (Block & AccordionProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.accordionTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build initial block
    const accordion: Block & AccordionProps = { id, name, classes };

    // Add headings
    const headings = content?.headings?.items[0];
    if (headings) {
      const headingsTheme = globalBlockTheme?.headingsTheme?.items[0]?.content?.properties;

      accordion.headings = buildHeadingsBlock({
        id: headings.content.id,
        name: 'Headings',
        content: headings.content.properties,
        settings: headings.settings.properties,
        inheritedThemes: [headingsTheme, ...extractInheritedTheme('headings', inheritedThemes)],
        globalTheme,
      });
    }

    // Build items
    const accordionItems = content?.items?.items;
    if (accordionItems && accordionItems.length) {
      accordion.items = accordionItems.map((item: any) => {
        const itemContent = item.content?.properties;
        const itemSettings = item.settings?.properties;

        // Build item classes
        const itemClasses = buildBlockClasses({
          name,
          globalBlockTheme,
          inheritedThemes,
          instanceVariant: content?.themeVariant,
          instanceSettings: itemSettings,
          classesIdentifier: 'itemClasses',
        });

        // Build intiial item
        const accordionItem: AccordionItem = { id: item.content.id, classes: itemClasses };

        // Add heading
        const itemHeading = itemContent.heading?.items[0];
        if (itemHeading) {
          const itemHeadingTheme = globalBlockTheme?.itemHeadingTheme?.items[0]?.content?.properties;

          accordionItem.heading = buildHeadingBlock({
            id: itemHeading.content.id,
            name: 'Heading',
            content: itemHeading.content.properties,
            settings: itemHeading.settings.properties,
            inheritedThemes: [itemHeadingTheme, ...extractInheritedTheme('heading', inheritedThemes)],
            globalTheme,
          });
        }

        accordionItem.contentArea = buildAdditionalContent({
          items: itemContent.contentArea?.items,
          globalBlockTheme,
          globalTheme,
          inheritedThemes,
        });

        return accordionItem;
      });
    }

    accordion.contentArea1 = buildAdditionalContent({
      items: content?.contentArea1?.items,
      globalBlockTheme,
      globalTheme,
      inheritedThemes,
    });

    accordion.contentArea2 = buildAdditionalContent({
      items: content?.contentArea2?.items,
      globalBlockTheme,
      globalTheme,
      inheritedThemes,
    });

    return accordion;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildAccordionBlock;
