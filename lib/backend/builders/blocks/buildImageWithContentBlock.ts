import { ImageWithContentProps } from '@components/blocks/ImageWithContent';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildHeadingsBlock from './buildHeadingsBlock';
import buildImageBlock from './buildImageBlock';

const buildImageWithContentBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
}: BlockBuilderConfig): (Block & ImageWithContentProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalImageWithContentThemeProperties = globalTheme?.imageWithContentTheme?.items[0]?.content?.properties;

    // Get active variant from instance > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalImageWithContentThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || globalVariantId || '1';
    const activeVariant =
      require(`/lib/components/blocks/ImageWithContent/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalImageWithContentThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const imageWithContent: Block & ImageWithContentProps = { id, name };

    // Add classes
    imageWithContent.classes = buildTheme({
      classes: activeVariant.classes,
      globalOverrides,
      instanceOverrides,
    });

    // Add content

    const image = content?.image ? content.image[0] : null;

    if (image) {
      const imageThemeProperties = globalImageWithContentThemeProperties?.imageTheme?.items[0]?.content?.properties;
      imageWithContent.image = buildImageBlock({
        id: image.id,
        name: 'Image',
        content: { ...image },
        parentVariantId: imageThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(imageThemeProperties),
        globalTheme,
        defaultProps: {
          fill: true,
          style: { objectFit: 'contain', objectPosition: 'right center' },
        },
      });
    }

    // Add headings
    const headings = content?.headings?.items[0];
    if (headings) {
      const headingsThemeProperties =
        globalImageWithContentThemeProperties?.headingsTheme?.items[0]?.content?.properties;

      imageWithContent.headings = buildHeadingsBlock({
        id: headings.content.id,
        name: 'Headings',
        content: headings.content.properties,
        settings: headings.settings.properties,
        parentVariantId: headingsThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(headingsThemeProperties),
        globalTheme,
      });
    }

    imageWithContent.contentArea = buildAdditionalContent({
      items: content?.contentArea?.items,
      parentThemeProperties: globalImageWithContentThemeProperties,
      globalTheme,
    });

    return imageWithContent;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildImageWithContentBlock;
