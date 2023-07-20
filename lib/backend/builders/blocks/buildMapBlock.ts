import { MapProps } from '@components/blocks/Map';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildHeadingsBlock from './buildHeadingsBlock';

export const extractSrcFromGoogleMaps = (googleMapLink: string): string | undefined => {
  if (!googleMapLink) return undefined;
  const regex = /src="([^"]+)"/;
  const match = googleMapLink.match(regex);

  if (match && match.length >= 2) {
    return match[1];
  }

  return undefined;
};

const buildMapBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
}: BlockBuilderConfig): (Block & MapProps) | undefined => {
  try {
    const googleMapLink = extractSrcFromGoogleMaps(content?.googleMapLink);
    if (!googleMapLink) return undefined;

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
    const map: Block & MapProps = { id, name, googleMapLink };

    // Add classes
    map.classes = buildTheme({
      classes: activeVariant.classes,
      globalOverrides,
      instanceOverrides,
    });

    // Add headings
    const headings = content?.headings?.items[0];
    if (headings) {
      const headingsThemeProperties = globalMapThemeProperties?.headingsTheme?.items[0]?.content?.properties;

      map.headings = buildHeadingsBlock({
        id: headings.content.id,
        name: 'Headings',
        content: headings.content.properties,
        settings: headings.settings.properties,
        parentVariantId: headingsThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(headingsThemeProperties),
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
