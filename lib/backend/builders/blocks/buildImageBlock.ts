import { ImageProps } from '@components/blocks/Image';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildBlockClasses from '../buildBlockClasses';

const buildImageBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  inheritedThemes,
  defaultProps,
}: BlockBuilderConfig): (Block & ImageProps) | undefined => {
  try {
    if (!content?.url) return undefined;

    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.imageTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build initial block
    const image: Block & ImageProps = {
      id,
      name,
      classes,
      src: `${process.env.MEDIA_URL}${content.url}`,
      alt: content.alt || content.name,
      fill: true,
      style: { objectFit: 'cover' },
      ...defaultProps,
    };

    return image;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildImageBlock;
