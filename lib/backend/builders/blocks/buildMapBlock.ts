import { MapProps } from '@components/blocks/Map';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildHeadingBlock from './buildHeadingBlock';
import buildSubheadingBlock from './buildSubheadingBlock';

const buildMapBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
}: BlockBuilderConfig): (Block & MapProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalMapThemeProperties = globalTheme?.mapTheme?.items[0]?.content?.properties;

    // Get active variant from instance > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalMapThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || globalVariantId || '1';
    const activeVariant = require(`/lib/components/blocks/Map/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalMapThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);
    // Build initial block
    const map: Block & MapProps = { id, name, googleMapLink: content?.googleMapLink };

    // Add classes
    map.classes = buildTheme({
      classes: activeVariant.classes,
      gridColsOverrides: [{ className: 'itemsContainer', config: content }],
      globalOverrides,
      instanceOverrides,
    });

    // Add heading
    const heading = content?.heading?.items[0];
    if (heading) {
      const headingThemeProperties = globalMapThemeProperties?.headingTheme?.items[0]?.content?.properties;

      map.heading = buildHeadingBlock({
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
      const subheadingThemeProperties = globalMapThemeProperties?.subheadingTheme?.items[0]?.content?.properties;

      map.subheading = buildSubheadingBlock({
        id: subheading.content.id,
        name: 'Subheading',
        content: subheading.content.properties,
        settings: subheading.settings.properties,
        parentVariantId: subheadingThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(subheadingThemeProperties),
        globalTheme,
      });
    }

    map.contentArea1 = buildAdditionalContent({
      items: content?.contentArea1?.items,
      parentThemeProperties: globalMapThemeProperties,
      globalTheme,
    });

    map.contentArea2 = buildAdditionalContent({
      items: content?.contentArea2?.items,
      parentThemeProperties: globalMapThemeProperties,
      globalTheme,
    });

    return map;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildMapBlock;
