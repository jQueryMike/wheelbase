import { BlockquoteProps } from '@components/blocks/Blockquote';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildButtonBlock from './buildButtonBlock';
import buildHeadingBlock from './buildHeadingBlock';
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
      gridColsOverrides: [{ className: 'itemsContainer', config: content }],
      globalOverrides,
      instanceOverrides,
    });

    console.log(activeVariant.classes);

    // Add heading
    const heading = content?.heading?.items[0];
    if (heading) {
      const headingThemeProperties = globalblockquoteThemeProperties?.headingTheme?.items[0]?.content?.properties;

      blockquote.heading = buildHeadingBlock({
        id: heading.content.id,
        name: 'Heading',
        content: heading.content.properties,
        settings: heading.settings.properties,
        parentVariantId: headingThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(headingThemeProperties),
        globalTheme,
      });
    }

    // Add subheading
    const subheading = content?.subheading?.items[0];
    if (subheading) {
      const subheadingThemeProperties = globalblockquoteThemeProperties?.subheadingTheme?.items[0]?.content?.properties;

      blockquote.subheading = buildSubheadingBlock({
        id: subheading.content.id,
        name: 'Subheading',
        content: subheading.content.properties,
        settings: subheading.settings.properties,
        parentVariantId: subheadingThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(subheadingThemeProperties),
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
