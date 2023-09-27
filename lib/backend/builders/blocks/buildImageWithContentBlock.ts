import { ImageWithContentProps } from '@components/blocks/ImageWithContent';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildBlockClasses from '../buildBlockClasses';
import extractInheritedTheme from '../extractInheritedTheme';
import buildHeadingsBlock from './buildHeadingsBlock';
import buildImageBlock from './buildImageBlock';

const buildImageWithContentBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  globalConfig,
  inheritedThemes,
}: BlockBuilderConfig): (Block & ImageWithContentProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.imageWithContentTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build initial block
    const imageWithContent: Block & ImageWithContentProps = { id, name, classes };

    // Add content

    const image = content?.image?.items.length ? content?.image.items[0] : null;

    if (image?.content?.properties?.img?.length > 0) {
      const imageTheme = globalBlockTheme?.imageTheme?.items[0]?.content?.properties;

      imageWithContent.image = buildImageBlock({
        id: image.content.id,
        name: 'Image',
        content: { ...image.content.properties },
        inheritedThemes: [imageTheme, ...extractInheritedTheme('image', inheritedThemes)],
        globalTheme,
        globalConfig,
        dontApplyClasses: true,
      });
    }

    // Add headings
    const headings = content?.headings?.items[0];
    if (headings) {
      const headingsTheme = globalBlockTheme?.headingsTheme?.items[0]?.content?.properties;

      imageWithContent.headings = buildHeadingsBlock({
        id: headings.content.id,
        name: 'Headings',
        content: headings.content.properties,
        settings: headings.settings.properties,
        inheritedThemes: [headingsTheme, ...extractInheritedTheme('headings', inheritedThemes)],
        globalTheme,
        globalConfig,
      });
    }

    imageWithContent.contentArea = buildAdditionalContent({
      items: content?.contentArea?.items,
      globalBlockTheme,
      globalTheme,
      globalConfig,
      inheritedThemes,
    });

    return imageWithContent;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildImageWithContentBlock;
