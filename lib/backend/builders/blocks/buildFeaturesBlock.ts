import { FeaturesItem, FeaturesProps } from '@components/blocks/Features';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildBlockClasses from '../buildBlockClasses';
import extractInheritedTheme from '../extractInheritedTheme';
import buildHeadingsBlock from './buildHeadingsBlock';
import buildImageBlock from './buildImageBlock';

const buildFeaturesBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  globalConfig,
  inheritedThemes,
}: BlockBuilderConfig): (Block & FeaturesProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.featuresTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
      gridColsOverrides: [{ className: 'itemsContainer', content, queryType: 'container' }],
    });

    // Build initial block
    const features: Block & FeaturesProps = { id, name, classes };

    // Add headings
    const headings = content?.headings?.items[0];
    if (headings) {
      const headingsTheme = globalBlockTheme?.headingsTheme?.items[0]?.content?.properties;

      features.headings = buildHeadingsBlock({
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
    const featuresItems = content?.items?.items;
    if (featuresItems && featuresItems.length) {
      features.items = featuresItems.map((item: any) => {
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
        const featuresItem: FeaturesItem = { id: item.content.id, classes: itemClasses };

        featuresItem.contentArea = buildAdditionalContent({
          items: itemContent.contentArea?.items,
          parentThemeProperties: globalBlockTheme,
          globalTheme,
          globalConfig,
        });

        if (itemContent.icon) featuresItem.icon = itemContent.icon;
        if (itemContent.indicator) featuresItem.indicator = itemContent.indicator;

        // Add image
        const itemImage = itemContent?.image?.items.length ? itemContent?.image.items[0] : null;
        if (itemImage?.content?.properties?.img?.length > 0) {
          const itemImageTheme = globalBlockTheme?.itemImageTheme?.items[0]?.content?.properties;

          itemContent.alt = itemImage.name;

          featuresItem.image = buildImageBlock({
            id: itemImage.content.id,
            name: 'Image',
            content: { ...itemImage.content.properties },
            inheritedThemes: [itemImageTheme],
            globalTheme,
            globalConfig,
          });
        }

        return featuresItem;
      });
    }

    features.contentArea1 = buildAdditionalContent({
      items: content?.contentArea1?.items,
      globalBlockTheme,
      globalTheme,
      globalConfig,
      inheritedThemes,
    });

    features.contentArea2 = buildAdditionalContent({
      items: content?.contentArea2?.items,
      globalBlockTheme,
      globalTheme,
      globalConfig,
      inheritedThemes,
    });

    return features;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildFeaturesBlock;
