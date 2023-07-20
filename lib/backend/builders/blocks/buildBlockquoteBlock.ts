import { BlockquoteProps } from '@components/blocks/Blockquote';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildButtonBlock from './buildButtonBlock';
import buildHeadingBlock from './buildHeadingBlock';
import buildHeadingsBlock from './buildHeadingsBlock';
import buildSubheadingBlock from './buildSubheadingBlock';
import buildTextContentBlock from './buildTextContentBlock';

const buildBlockquoteBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
}: BlockBuilderConfig): (Block & BlockquoteProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalblockquoteThemeProperties = globalTheme?.blockquoteTheme?.items[0]?.content?.properties;
    // Get active variant from instance > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalblockquoteThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || globalVariantId || '1';
    const activeVariant = require(`/lib/components/blocks/Blockquote/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalblockquoteThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const blockquote: Block & BlockquoteProps = {
      id,
      name,
      blockquoteText: content?.blockquoteText,
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
      const headingsThemeProperties = globalblockquoteThemeProperties?.headingsTheme?.items[0]?.content?.properties;

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
      parentThemeProperties: globalblockquoteThemeProperties,
      globalTheme,
    });

    blockquote.contentArea2 = buildAdditionalContent({
      items: content?.contentArea2?.items,
      parentThemeProperties: globalblockquoteThemeProperties,
      globalTheme,
    });

    return blockquote;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildBlockquoteBlock;
