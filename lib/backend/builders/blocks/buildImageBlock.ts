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
}: BlockBuilderConfig): (Block & ImageProps) | undefined => {
  try {
    if (!content?.img[0].url) return undefined;

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

    const img = content.img[0];

    // Build initial block
    const image: Block & ImageProps = {
      id,
      name,
      classes,
      src: `${process.env.MEDIA_URL}${img.url}`,
      alt: content.altText || img.alt || img.name,
      priority: content.priority || false,
    };

    if (content.quality) image.quality = content.quality;
    if (content.loading && !image.priority) image.loading = content.loading;

    const width = content.overrideWidth || img.width || undefined;
    const height = content.overrideHeight || img.height || undefined;

    if (content.fill !== 'true' && width && height) {
      image.fill = false;
      image.width = width;
      image.height = height;
    } else {
      image.fill = true;
    }

    const style: { [propName: string]: any } = {};

    if (content.applyAspectRatio && width && height) style.aspectRatio = `${width} / ${height}`;
    if (content.objectFit) style.objectFit = content.objectFit;
    if (content.objectPosition) style.objectPosition = content.objectPosition;

    image.style = style;

    return image;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildImageBlock;
