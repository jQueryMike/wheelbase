import { TextContentProps } from '@components/blocks/TextContent/TextContent';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';

const buildTextContentBlock = ({
  id,
  name,
  content,
  settings,
  parentVariantId,
  parentOverrides,
  globalTheme,
  globalConfig,
}: BlockBuilderConfig): (Block & TextContentProps) | undefined => {
  try {
    if (!content?.content.markup) return undefined;

    // Shortcut to block theme properties from globalTheme
    const globalTextContentThemeProperties = globalTheme?.textContentTheme?.items[0]?.content?.properties;

    // Get active variant from instance > parent > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalTextContentThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || parentVariantId || globalVariantId || '1';
    const activeVariant = require(`/lib/components/blocks/TextContent/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalTextContentThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const textContent: Block & TextContentProps = {
      id,
      name,
      content: content.content.markup.replaceAll('{DISPLAY_NAME}', globalConfig?.displayName || ''),
    };

    // Add classes
    textContent.classes = buildTheme({
      classes: activeVariant.classes,
      globalOverrides,
      parentOverrides,
      instanceOverrides,
    });

    return textContent;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildTextContentBlock;
