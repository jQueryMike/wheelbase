import { BlockquoteProps } from '@components/blocks/Blockquote';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildBlockClasses from '../buildBlockClasses';
import extractInheritedTheme from '../extractInheritedTheme';
import buildHeadingsBlock from './buildHeadingsBlock';

const buildBlockquoteBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  inheritedThemes,
}: BlockBuilderConfig): (Block & BlockquoteProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.blockquoteTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build initial block
    const blockquote: Block & BlockquoteProps = {
      id,
      name,
      blockquoteText: content?.blockquoteText?.markup,
      blockquoteName: content?.blockquoteName,
      classes,
    };

    // Add headings
    const headings = content?.headings?.items[0];
    if (headings) {
      const headingsTheme = globalBlockTheme?.headingsTheme?.items[0]?.content?.properties;

      blockquote.headings = buildHeadingsBlock({
        id: headings.content.id,
        name: 'Headings',
        content: headings.content.properties,
        settings: headings.settings.properties,
        inheritedThemes: [headingsTheme, ...extractInheritedTheme('headings', inheritedThemes)],
        globalTheme,
      });
    }

    blockquote.contentArea1 = buildAdditionalContent({
      items: content?.contentArea1?.items,
      globalBlockTheme,
      globalTheme,
      inheritedThemes,
    });

    blockquote.contentArea2 = buildAdditionalContent({
      items: content?.contentArea2?.items,
      globalBlockTheme,
      globalTheme,
      inheritedThemes,
    });

    return blockquote;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildBlockquoteBlock;
