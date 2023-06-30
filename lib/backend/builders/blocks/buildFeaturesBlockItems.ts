import { FeaturesItem } from '@components/blocks/Features/Features';
import { UmbracoBlockGridContentItem, UmbracoBlockGridItemSettings } from '@interfaces/Umbraco';

import buildTheme from '../buildTheme';
import buildHeadingBlock from './buildHeadingBlock';
import buildTextContentBlock from './buildTextContentBlock';

const buildFeaturesBlockItems = (
  items: { content: UmbracoBlockGridContentItem; settings: UmbracoBlockGridItemSettings }[],
  themeVariant: string,
): FeaturesItem[] => {
  try {
    if (!items) return [];

    const featuresItems: FeaturesItem[] = [];
    const baseClasses = require(`/lib/components/blocks/Features/themes/${themeVariant}/featuresItem.classes`).default;

    items.forEach((item) => {
      const itemContent = item.content?.properties;
      const itemSettings = item.settings?.properties;

      const featuresItem: FeaturesItem = { id: item.content.id };

      featuresItem.classes = buildTheme({ classes: baseClasses, overrides: itemSettings });

      const heading = itemContent?.heading?.items[0];
      if (heading) {
        featuresItem.heading = buildHeadingBlock({
          id: heading.id,
          name: 'Heading',
          content: heading.content.properties,
          settings: heading.content.properties,
        });
      }

      const textContent = itemContent?.content?.items[0];
      if (textContent) {
        featuresItem.content = buildTextContentBlock({
          id: textContent.id,
          name: 'TextContent',
          content: textContent.content.properties,
          settings: textContent.content.properties,
        });
      }

      if (itemContent.icon) featuresItem.icon = itemContent.icon;

      featuresItems.push(featuresItem);
    });

    return featuresItems;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default buildFeaturesBlockItems;
