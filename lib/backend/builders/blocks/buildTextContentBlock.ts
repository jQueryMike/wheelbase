import { TextContentProps } from '@components/blocks/TextContent/TextContent';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildTheme from '../buildTheme';

const buildTextContentBlock = ({ id, name, content, settings }: BlockBuilderConfig): TextContentProps | undefined => {
  try {
    if (!content?.content.markup) return undefined;

    const textContent: Block & TextContentProps = {
      id,
      name,
      content: content.content.markup,
    };

    const themeVariant = content?.theme[0]?.name.split(' ').at(-1) || '1';
    const baseClasses =
      require(`/lib/components/blocks/TextContent/themes/${themeVariant}/textContent.classes`).default;
    textContent.classes = buildTheme({ classes: baseClasses, overrides: settings });

    return textContent;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildTextContentBlock;
