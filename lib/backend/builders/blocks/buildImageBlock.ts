import { ImageProps } from '@components/blocks/Image';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';

const buildImageBlock = ({
  id,
  name,
  content,
  parentVariantId,
  parentOverrides,
  globalTheme,
  defaultProps,
}: BlockBuilderConfig): (Block & ImageProps) | undefined => {
  try {
    if (!content?.url) return undefined;

    // Shortcut to block theme properties from globalTheme
    const globalImageThemeProperties = globalTheme?.imageTheme?.items[0]?.content?.properties;

    // Get active variant from instance > parent > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalImageThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || parentVariantId || globalVariantId || '1';
    const activeVariant = require(`/lib/components/blocks/Image/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalImageThemeProperties);
    const instanceOverrides = {}; // TODO: add settings to image block

    // Build initial block
    const image: Block & ImageProps = {
      id,
      name,
      src: `${process.env.MEDIA_URL}${content.url}`,
      alt: content.alt || content.name,
      fill: true,
      style: { objectFit: 'cover' },
      ...defaultProps,
    };

    // Add classes
    image.classes = buildTheme({
      classes: activeVariant.classes,
      globalOverrides,
      parentOverrides,
      instanceOverrides,
    });

    return image;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildImageBlock;
