import { ContentBlockProps } from '@components/blocks/ContentBlock';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildHeadingsBlock from './buildHeadingsBlock';
import buildImageBlock from './buildImageBlock';

const buildContentBlockBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
}: BlockBuilderConfig): (Block & ContentBlockProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalContentBlockThemeProperties = globalTheme?.contentBlockTheme?.items[0]?.content?.properties;

    // Get active variant from instance > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalContentBlockThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || globalVariantId || '1';
    const activeVariant =
      require(`/lib/components/blocks/ContentBlock/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalContentBlockThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const contentBlock: Block & ContentBlockProps = { id, name };
    // Add content
    if (content?.contentBody) contentBlock.bodyContent = content.contentBody;

    if (content?.contentImage[0])
      contentBlock.contentImage = {
        src: `${process.env.MEDIA_URL}${content?.contentImage[0].url}`,
        width: content?.contentImage[0].width,
        height: content?.contentImage[0].height,
        alt: content?.contentImage[0].name,
      };

    if (content?.contentSubImage[0])
      contentBlock.contentSubImage = {
        src: `${process.env.MEDIA_URL}${content?.contentSubImage[0].url}`,
        width: content?.contentSubImage[0].width,
        height: content?.contentSubImage[0].height,
        alt: content?.contentSubImage[0].name,
      };
    // Add classes
    contentBlock.classes = buildTheme({
      classes: activeVariant.classes,
      gridColsOverrides: [{ className: 'itemsContainer', content, queryType: 'container' }],
      globalOverrides,
      instanceOverrides,
    });

    // Add headings
    const headings = content?.headings?.items[0];
    if (headings) {
      const headingsThemeProperties = globalContentBlockThemeProperties?.headingsTheme?.items[0]?.content?.properties;

      contentBlock.headings = buildHeadingsBlock({
        id: headings.content.id,
        name: 'Headings',
        content: headings.content.properties,
        settings: headings.settings.properties,
        parentVariantId: headingsThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(headingsThemeProperties),
        globalTheme,
      });
    }

    contentBlock.contentArea1 = buildAdditionalContent({
      items: content?.contentArea1?.items,
      parentThemeProperties: globalContentBlockThemeProperties,
      globalTheme,
    });

    contentBlock.contentArea2 = buildAdditionalContent({
      items: content?.contentArea2?.items,
      parentThemeProperties: globalContentBlockThemeProperties,
      globalTheme,
    });

    return contentBlock;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildContentBlockBlock;
