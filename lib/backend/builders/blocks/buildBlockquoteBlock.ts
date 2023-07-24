import { BlockquoteProps } from '@components/blocks/Blockquote';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildHeadingsBlock from './buildHeadingsBlock';

const buildBlockquoteBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
}: BlockBuilderConfig): (Block & BlockquoteProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalBlockquoteThemeProperties = globalTheme?.blockquoteTheme?.items[0]?.content?.properties;
    // Get active variant from instance > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalBlockquoteThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || globalVariantId || '1';
    const activeVariant = require(`/lib/components/blocks/Blockquote/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalBlockquoteThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const blockquote: Block & BlockquoteProps = {
      id,
      name,
      blockquoteText: content?.blockquoteText?.markup,
      blockquoteName: content?.blockquoteName,
    };

    blockquote.classes = buildTheme({
      classes: activeVariant.classes,
      globalOverrides,
      instanceOverrides,
    });

    // Add headings
    const headings = content?.headings?.items[0];
    if (headings) {
      const headingsThemeProperties = globalBlockquoteThemeProperties?.headingsTheme?.items[0]?.content?.properties;

      blockquote.headings = buildHeadingsBlock({
        id: headings.content.id,
        name: 'Headings',
        content: headings.content.properties,
        settings: headings.settings.properties,
        parentVariantId: headingsThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(headingsThemeProperties),
        globalTheme,
      });
    }

    blockquote.contentArea1 = buildAdditionalContent({
      items: content?.contentArea1?.items,
      parentThemeProperties: globalBlockquoteThemeProperties,
      globalTheme,
    });

    blockquote.contentArea2 = buildAdditionalContent({
      items: content?.contentArea2?.items,
      parentThemeProperties: globalBlockquoteThemeProperties,
      globalTheme,
    });

    return blockquote;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildBlockquoteBlock;
