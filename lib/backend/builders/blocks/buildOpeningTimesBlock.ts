import { OpeningTimesItemProps, OpeningTimesProps } from '@components/blocks/OpeningTimes';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildBlockClasses from '../buildBlockClasses';
import extractInheritedTheme from '../extractInheritedTheme';
import buildHeadingsBlock from './buildHeadingsBlock';

const buildOpeningTimesBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  globalConfig,
  inheritedThemes,
}: BlockBuilderConfig): (Block & OpeningTimesProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.openingTimesTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build initial block
    const openingTimes: Block & OpeningTimesProps = { id, name, items: content?.openingTimesItems, classes };

    // Add heading
    const headings = content?.headings?.items[0];
    if (headings) {
      const headingsTheme = globalBlockTheme?.headingsTheme?.items[0]?.content?.properties;

      openingTimes.headings = buildHeadingsBlock({
        id: headings.content.id,
        name: 'Headings',
        content: headings.content.properties,
        settings: headings.settings.properties,
        inheritedThemes: [headingsTheme, ...extractInheritedTheme('headings', inheritedThemes)],
        globalTheme,
        globalConfig,
      });
    }
    // Build items
    const openingTimesItems = content?.items?.items;
    if (openingTimesItems && openingTimesItems.length) {
      openingTimes.items = openingTimesItems.map((item: any) => {
        const itemContent = item.content?.properties;
        const itemSettings = item.settings?.properties;

        let value: string | undefined;

        if (itemContent.displayType === 'Closed') value = 'Closed';
        if (itemContent.displayType === 'Custom Text') value = itemContent.customText;
        if (itemContent.displayType === 'Opening Time - Closing Time')
          value = `${itemContent.openingTime} - ${itemContent.closingTime}`;

        const icon = itemContent.icon || content.icon || undefined;

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
        const openingTimesItem: OpeningTimesItemProps = {
          id: item.content.id,
          label: itemContent.label,
          value,
          closed: itemContent.displayType === 'Closed',
          icon,
          classes: itemClasses,
        };

        if (itemContent.closed) openingTimesItem.closed = itemContent.closed;

        return openingTimesItem;
      });
    }

    openingTimes.contentArea1 = buildAdditionalContent({
      items: content?.contentArea1?.items,
      globalBlockTheme,
      globalTheme,
      globalConfig,
      inheritedThemes,
    });

    openingTimes.contentArea2 = buildAdditionalContent({
      items: content?.contentArea2?.items,
      globalBlockTheme,
      globalTheme,
      globalConfig,
      inheritedThemes,
    });

    return openingTimes;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildOpeningTimesBlock;
