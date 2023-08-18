import { HeaderProps } from '@components/blocks/Header';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildImageBlock from './buildImageBlock';

const buildHeaderBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
}: BlockBuilderConfig): (Block & HeaderProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalHeaderThemeProperties = globalTheme?.headerTheme?.items[0]?.content?.properties;

    // Get active variant from instance > parent > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalHeaderThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || globalVariantId || '1';
    const activeVariant = require(`/lib/components/blocks/Header/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalHeaderThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const header: Block & HeaderProps = { id, name };

    // Add classes
    header.classes = buildTheme({
      classes: activeVariant.classes,
      globalOverrides,
      instanceOverrides,
    });

    const headerLogo = content?.logoImage ? content?.logoImage[0] : null;

    if (headerLogo) {
      const headerLogoThemeProperties = globalHeaderThemeProperties?.headerLogoTheme?.items[0]?.content?.properties;

      header.logo = buildImageBlock({
        id: headerLogo.id,
        name: 'Image',
        content: { ...headerLogo },
        parentVariantId: headerLogoThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(headerLogoThemeProperties),
        globalTheme,
        defaultProps: {
          fill: true,
          style: { objectFit: 'contain', objectPosition: 'left center' },
        },
      });
    }

    header.contentArea = buildAdditionalContent({
      items: content?.contentArea?.items,
      parentThemeProperties: globalHeaderThemeProperties,
      globalTheme,
    });

    // Add props
    if (content?.enableScrollTransition !== undefined) header.enableScrollTransition = content.enableScrollTransition;
    if (content?.scrollTransitionPosition)
      header.scrollTransitionPosition = parseInt(content.scrollTransitionPosition, 10);

    return header;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildHeaderBlock;
