import { TextContentProps } from '@components/blocks/TextContent/TextContent';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildBlockClasses from '../buildBlockClasses';

const buildTextContentBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  inheritedThemes,
}: BlockBuilderConfig): (Block & TextContentProps) | undefined => {
  try {
    if (!content?.content.markup) return undefined;

    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.textContentTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build initial block
    const textContent: Block & TextContentProps = { id, name, classes, content: content.content.markup };

    return textContent;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildTextContentBlock;
