import { FeaturesItem } from '@components/blocks/Features/Features';
import { UmbracoBlockGridContentItem, UmbracoBlockGridItemSettings } from '@interfaces/Umbraco';

import buildTheme from '../buildTheme';
import buildHeadingBlock from './buildHeadingBlock';
import buildImageBlock from './buildImageBlock';
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
          id: heading.content.id,
          name: 'Heading',
          content: heading.content?.properties,
          settings: heading.settings?.properties,
        });
      }

      const textContent = itemContent?.content?.items[0];
      if (textContent) {
        featuresItem.content = buildTextContentBlock({
          id: textContent.content.id,
          name: 'TextContent',
          content: textContent.content?.properties,
          settings: textContent.settings?.properties,
        });
      }

      const image = itemContent?.image[0];
      if (image) {
        featuresItem.image = buildImageBlock({
          id: 'some-id',
          name: 'Image',
          content: image,
        });
      }

      if (itemContent.icon) featuresItem.icon = itemContent.icon;
      if (itemContent.indicator) featuresItem.indicator = itemContent.indicator;

      featuresItems.push(featuresItem);
    });

    return featuresItems;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default buildFeaturesBlockItems;
