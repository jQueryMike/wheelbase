import { OpeningTimesItemProps, OpeningTimesProps } from '@components/blocks/OpeningTimes';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildHeadingBlock from './buildHeadingBlock';
import buildHeadingsBlock from './buildHeadingsBlock';
import buildSubheadingBlock from './buildSubheadingBlock';

export const isCurrentDay = (day: string): boolean => {
  const currentDay = new Date().getDay();
  const days: any[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return day === days[currentDay];
};

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
    const openingTimes: Block & OpeningTimesProps = { id, name, times: content?.openingTimesList };

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
    const openingTimesItems = content?.times?.items;
    if (openingTimesItems && openingTimesItems.length) {
      openingTimes.times = openingTimesItems.map((item: any) => {
        const itemContent = item.content?.properties;
        const itemSettings = item.settings?.properties;

        // Get global and instance overrides
        const itemGlobalOverrides = extractClassOverrides(globalOpeningTimesThemeProperties, 'tw_item__');
        const itemInstanceOverrides = extractClassOverrides(itemSettings);

        // Build intiial item
        const openingTimesItem: OpeningTimesItemProps = {
          id: item.content.id,
          day: itemContent.day,
          openingTime: itemContent.openingTime,
          closingTime: itemContent.closingTime,
        };

        openingTimesItem.isCurrentDay = isCurrentDay(itemContent.day);

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
