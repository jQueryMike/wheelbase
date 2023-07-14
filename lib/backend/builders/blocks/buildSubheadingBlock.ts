import { SubheadingProps } from '@components/blocks/Subheading';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';

const buildSubheadingBlock = ({
  id,
  name,
  content,
  settings,
  parentVariantId,
  parentOverrides,
  globalTheme,
}: BlockBuilderConfig): (Block & SubheadingProps) | undefined => {
  try {
    if (!content?.subheadingText) return undefined;

    // Shortcut to block theme properties from globalTheme
    const globalSubheadingThemeProperties = globalTheme?.subheadingTheme?.items[0]?.content?.properties;

    // Get active variant from instance > parent > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalSubheadingThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || parentVariantId || globalVariantId || '1';
    const activeVariant = require(`/lib/components/blocks/Subheading/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalSubheadingThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const subheading: Block & SubheadingProps = { id, name, text: content.subheadingText };

    // Add classes
    subheading.classes = buildTheme({
      classes: activeVariant.classes,
      globalOverrides,
      parentOverrides,
      instanceOverrides,
    });

    return subheading;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildSubheadingBlock;
