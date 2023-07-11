import { FeaturesItem, FeaturesProps } from '@components/blocks/Features';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildButtonBlock from './buildButtonBlock';
import buildHeadingBlock from './buildHeadingBlock';
import buildSubheadingBlock from './buildSubheadingBlock';
import buildTextContentBlock from './buildTextContentBlock';

const buildFeaturesBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
}: BlockBuilderConfig): FeaturesProps | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalFeaturesThemeProperties = globalTheme?.featuresTheme?.items[0]?.content?.properties;

    // Get active variant from instance > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalFeaturesThemeProperties?.variant;
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
      gridColsOverrides: [{ className: 'itemsContainer', config: content }],
      globalOverrides,
      instanceOverrides,
    });

    // Add heading
    const heading = content?.heading?.items[0];
    if (heading) {
      const headingThemeProperties = globalFeaturesThemeProperties?.headingTheme?.items[0]?.content?.properties;

      features.heading = buildHeadingBlock({
        id: heading.id,
        name: 'Heading',
        content: heading.content.properties,
        settings: heading.settings.properties,
        parentVariantId: headingThemeProperties?.variant,
        parentOverrides: extractClassOverrides(headingThemeProperties),
        globalTheme,
      });
    }

    // Add subheading
    const subheading = content?.subheading?.items[0];
    if (subheading) {
      const subheadingThemeProperties = globalFeaturesThemeProperties?.subheadingTheme?.items[0]?.content?.properties;

      features.subheading = buildSubheadingBlock({
        id: subheading.id,
        name: 'Subheading',
        content: subheading.content.properties,
        settings: subheading.settings.properties,
        parentVariantId: subheadingThemeProperties?.variant,
        parentOverrides: extractClassOverrides(subheadingThemeProperties),
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
        const itemGlobalOverrides = extractClassOverrides(globalOverrides, 'tw_item_');
        const itemInstanceOverrides = extractClassOverrides(itemSettings);

        // Build intiial item
        const featuresItem: FeaturesItem = { id: item.content.id };

        featuresItem.classes = buildTheme({
          classes: activeVariant.itemClasses,
          globalOverrides: itemGlobalOverrides,
          instanceOverrides: itemInstanceOverrides,
        });

        // Add heading
        const itemHeading = itemContent.heading?.items[0];
        if (itemHeading) {
          const itemHeadingThemeProperties =
            globalFeaturesThemeProperties?.itemHeadingTheme?.items[0]?.content?.properties;

          featuresItem.heading = buildHeadingBlock({
            id: itemHeading.id,
            name: 'Heading',
            content: itemHeading.content.properties,
            settings: itemHeading.settings.properties,
            parentVariantId: itemHeadingThemeProperties?.variant,
            parentOverrides: extractClassOverrides(itemHeadingThemeProperties),
            globalTheme,
          });
        }

        // Add text content
        const itemTextContent = itemContent.textContent?.items[0];
        if (itemTextContent) {
          const itemTextContentThemeProperties =
            globalFeaturesThemeProperties?.itemTextContentTheme?.items[0]?.content?.properties;

          featuresItem.textContent = buildTextContentBlock({
            id: itemTextContent.id,
            name: 'TextContent',
            content: itemTextContent.content.properties,
            settings: itemTextContent.settings.properties,
            parentVariantId: itemTextContentThemeProperties?.variant,
            parentOverrides: extractClassOverrides(itemTextContentThemeProperties),
            globalTheme,
          });
        }

        // Add text content
        const itemButton = itemContent.button?.items[0];
        if (itemButton) {
          const itemButtonThemeProperties =
            globalFeaturesThemeProperties?.itemButtonTheme?.items[0]?.content?.properties;

          featuresItem.button = buildButtonBlock({
            id: itemButton.id,
            name: 'Button',
            content: itemButton.content.properties,
            settings: itemButton.settings.properties,
            parentVariantId: itemButtonThemeProperties?.variant,
            parentOverrides: extractClassOverrides(itemButtonThemeProperties),
            globalTheme,
          });
        }

        if (itemContent.icon) featuresItem.icon = itemContent.icon;
        if (itemContent.indicator) featuresItem.indicator = itemContent.indicator;

        return featuresItem;
      });
    }

    features.contentArea1 = buildAdditionalContent({
      items: content?.contentArea1?.items,
      parentThemeProperties: globalFeaturesThemeProperties,
      globalTheme,
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
