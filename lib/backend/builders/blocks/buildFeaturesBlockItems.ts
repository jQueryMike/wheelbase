import { FeaturesItem } from '@components/blocks/Features/Features';
import { UmbracoBlockGridContentItem, UmbracoBlockGridItemSettings } from '@interfaces/Umbraco';

import buildTheme from '../buildTheme';

const buildFeaturesBlockItems = (
  items: { content: UmbracoBlockGridContentItem; settings: UmbracoBlockGridItemSettings }[],
  themeVariant: string,
): FeaturesItem[] => {
  try {
    if (!items) return [];

    let classes = {};

    if (themeVariant) {
      classes = require(`/lib/components/blocks/Features/themes/${themeVariant}/featuresItem.classes`).default;
    }

    const featureItems: FeaturesItem[] = [];

    items.forEach((item) => {
      const featuresItemClasses = buildTheme({ classes, overrides: item.settings.properties });
      const featureItem: FeaturesItem = { id: item.content.id, classes: featuresItemClasses };

      if (item.content.properties.heading) featureItem.heading = item.content.properties.heading;
      if (item.content.properties.icon) featureItem.icon = item.content.properties.icon;
      if (item.content.properties.content.markup) featureItem.content = item.content.properties.content.markup;

      featureItems.push(featureItem);
    });

    return featureItems;
  } catch (error) {
    return [];
  }
};

export default buildFeaturesBlockItems;
