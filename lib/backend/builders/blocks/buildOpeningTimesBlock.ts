import { OpeningTimesItemProps, OpeningTimesProps } from '@components/blocks/OpeningTimes';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildHeadingsBlock from './buildHeadingsBlock';

const buildOpeningTimesBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
}: BlockBuilderConfig): (Block & OpeningTimesProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalOpeningTimesThemeProperties = globalTheme?.openingTimesTheme?.items[0]?.content?.properties;

    // Get active variant from instance > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalOpeningTimesThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || globalVariantId || '1';
    const activeVariant =
      require(`/lib/components/blocks/OpeningTimes/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalOpeningTimesThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const openingTimes: Block & OpeningTimesProps = { id, name, items: content?.openingTimesItems };

    // Add classes
    openingTimes.classes = buildTheme({
      classes: activeVariant.classes,
      globalOverrides,
      instanceOverrides,
    });

    // Add heading
    const headings = content?.headings?.items[0];
    if (headings) {
      const headingsThemeProperties = globalOpeningTimesThemeProperties?.headingsTheme?.items[0]?.content?.properties;

      openingTimes.headings = buildHeadingsBlock({
        id: headings.content.id,
        name: 'Headings',
        content: headings.content.properties,
        settings: headings.settings.properties,
        parentVariantId: headingsThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(headingsThemeProperties),
        globalTheme,
      });
    }
    // Build items
    const openingTimesItems = content?.items?.items;
    if (openingTimesItems && openingTimesItems.length) {
      openingTimes.items = openingTimesItems.map((item: any) => {
        const itemContent = item.content?.properties;
        const itemSettings = item.settings?.properties;

        // Get global and instance overrides
        const itemGlobalOverrides = extractClassOverrides(globalOpeningTimesThemeProperties, 'tw_item__');
        const itemInstanceOverrides = extractClassOverrides(itemSettings);

        let value: string | undefined;

        if (itemContent.displayType === 'Closed') value = 'Closed';
        if (itemContent.displayType === 'Custom Text') value = itemContent.customText;
        if (itemContent.displayType === 'Opening Time - Closing Time')
          value = `${itemContent.openingTime} - ${itemContent.closingTime}`;

        const icon = itemContent.icon || content.icon || undefined;

        // Build intiial item
        const openingTimesItem: OpeningTimesItemProps = {
          id: item.content.id,
          label: itemContent.label,
          value,
          closed: itemContent.displayType === 'Closed',
          icon,
        };

        openingTimesItem.classes = buildTheme({
          classes: activeVariant.itemClasses,
          globalOverrides: itemGlobalOverrides,
          instanceOverrides: itemInstanceOverrides,
        });

        if (itemContent.closed) openingTimesItem.closed = itemContent.closed;

        return openingTimesItem;
      });
    }

    openingTimes.contentArea1 = buildAdditionalContent({
      items: content?.contentArea1?.items,
      parentThemeProperties: globalOpeningTimesThemeProperties,
      globalTheme,
    });

    openingTimes.contentArea2 = buildAdditionalContent({
      items: content?.contentArea2?.items,
      parentThemeProperties: globalOpeningTimesThemeProperties,
      globalTheme,
    });

    return openingTimes;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildOpeningTimesBlock;
