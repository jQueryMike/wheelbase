import { FeaturesItem, FeaturesProps } from '@components/blocks/Features';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildHeadingsBlock from './buildHeadingsBlock';
import buildImageBlock from './buildImageBlock';

const buildFeaturesBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  globalConfig,
}: BlockBuilderConfig): (Block & FeaturesProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalFeaturesThemeProperties = globalTheme?.featuresTheme?.items[0]?.content?.properties;

    // Get active variant from instance > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalFeaturesThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || globalVariantId || '1';
    const activeVariant = require(`/lib/components/blocks/Features/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalFeaturesThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const features: Block & FeaturesProps = { id, name };

    // Add classes
    features.classes = buildTheme({
      classes: activeVariant.classes,
      gridColsOverrides: [{ className: 'itemsContainer', content, queryType: 'container' }],
      globalOverrides,
      instanceOverrides,
    });

    // Add headings
    const headings = content?.headings?.items[0];
    if (headings) {
      const headingsThemeProperties = globalFeaturesThemeProperties?.headingsTheme?.items[0]?.content?.properties;

      features.headings = buildHeadingsBlock({
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
    const featuresItems = content?.items?.items;
    if (featuresItems && featuresItems.length) {
      features.items = featuresItems.map((item: any) => {
        const itemContent = item.content?.properties;
        const itemSettings = item.settings?.properties;

        // Get global and instance overrides
        const itemGlobalOverrides = extractClassOverrides(globalFeaturesThemeProperties, 'tw_item__');
        const itemInstanceOverrides = extractClassOverrides(itemSettings);

        // Build intiial item
        const featuresItem: FeaturesItem = { id: item.content.id };

        featuresItem.classes = buildTheme({
          classes: activeVariant.itemClasses,
          globalOverrides: itemGlobalOverrides,
          instanceOverrides: itemInstanceOverrides,
        });

        featuresItem.contentArea = buildAdditionalContent({
          items: itemContent.contentArea?.items,
          parentThemeProperties: globalFeaturesThemeProperties,
          globalTheme,
        });

        if (itemContent.icon) featuresItem.icon = itemContent.icon;
        if (itemContent.indicator) featuresItem.indicator = itemContent.indicator;

        // Add image
        const itemImage = itemContent.image ? itemContent.image[0] : null;
        if (itemImage) {
          const itemImageThemeProperties = globalFeaturesThemeProperties?.itemImageTheme?.items[0]?.content?.properties;

          itemContent.alt = itemImage.name;

          featuresItem.image = buildImageBlock({
            id: itemImage.id,
            name: 'Image',
            content: { ...itemImage },
            parentVariantId: itemImageThemeProperties?.themeVariant,
            parentOverrides: extractClassOverrides(itemImageThemeProperties),
            globalTheme,
          });
        }

        return featuresItem;
      });
    }

    features.contentArea1 = buildAdditionalContent({
      items: content?.contentArea1?.items,
      parentThemeProperties: globalFeaturesThemeProperties,
      globalTheme,
      globalConfig,
    });

    features.contentArea2 = buildAdditionalContent({
      items: content?.contentArea2?.items,
      parentThemeProperties: globalFeaturesThemeProperties,
      globalTheme,
    });

    return features;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildFeaturesBlock;
