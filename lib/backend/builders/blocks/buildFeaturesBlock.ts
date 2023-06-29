import { FeaturesProps } from '@components/blocks/Features';
import Block from '@interfaces/Block';
import { UmbracoBlockGridItem } from '@interfaces/Umbraco';

import buildBlocks from '../buildBlocks';
import buildTheme from '../buildTheme';
import buildFeaturesBlockItems from './buildFeaturesBlockItems';

const buildFeaturesBlock = (name: string, item: UmbracoBlockGridItem): FeaturesProps | undefined => {
  try {
    if (!item) return undefined;

    let featuresClasses = {};
    const themeVariant = item.content.properties.theme[0]?.name.split(' ').at(-1);

    if (themeVariant) {
      const classes = require(`/lib/components/blocks/Features/themes/${themeVariant}/features.classes`).default;
      featuresClasses = buildTheme({
        classes,
        gridColsOverrides: [{ className: 'itemsContainer', config: item.content.properties }],
        overrides: item.settings.properties,
      });
    }

    const items = buildFeaturesBlockItems(item.content.properties.items.items, themeVariant) || [];
    const startContent = buildBlocks(item.content.properties.startContent.items) || [];
    const endContent = buildBlocks(item.content.properties.endContent?.items) || [];

    const featuresBlock: Block & FeaturesProps = {
      id: item.content.id,
      name,

      heading: item.content.properties.headingText || undefined,
      headingTag: item.settings.properties.headingTag || undefined,

      subheading: item.content.properties.subheadingText || undefined,
      subheadingTag: item.settings.properties.subheadingTag || undefined,

      classes: featuresClasses,
      items,

      startContent,
      endContent,
    };

    return featuresBlock;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildFeaturesBlock;
