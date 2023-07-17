import { OpeningTimesItemProps, OpeningTimesProps } from '@components/blocks/OpeningTimes';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildHeadingBlock from './buildHeadingBlock';
import buildSubheadingBlock from './buildSubheadingBlock';

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
      gridColsOverrides: [{ className: 'itemsContainer', config: content }],
      globalOverrides,
      instanceOverrides,
    });

    // Add heading
    const heading = content?.heading?.items[0];
    if (heading) {
      const headingThemeProperties = globalOpeningTimesThemeProperties?.headingTheme?.items[0]?.content?.properties;

      openingTimes.heading = buildHeadingBlock({
        id: heading.content.id,
        name: 'Heading',
        content: heading.content.properties,
        settings: heading.settings.properties,
        parentVariantId: headingThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(headingThemeProperties),
        globalTheme,
      });
    }

    // Add subheading
    const subheading = content?.subheading?.items[0];
    if (subheading) {
      const subheadingThemeProperties =
        globalOpeningTimesThemeProperties?.subheadingTheme?.items[0]?.content?.properties;

      openingTimes.subheading = buildSubheadingBlock({
        id: subheading.content.id,
        name: 'Subheading',
        content: subheading.content.properties,
        settings: subheading.settings.properties,
        parentVariantId: subheadingThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(subheadingThemeProperties),
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
          id: itemContent.itemid,
          day: itemContent.day,
          openingTime: itemContent.openingTime,
          closingTime: itemContent.closingTime,
        };

        console.log(openingTimesItem);

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
