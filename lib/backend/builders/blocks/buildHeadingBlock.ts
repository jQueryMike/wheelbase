import { HeadingProps } from '@components/blocks/Heading';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildTheme from '../buildTheme';

const buildHeadingBlock = ({ id, name, content, settings }: BlockBuilderConfig): HeadingProps | undefined => {
  try {
    if (!content?.headingText) return undefined;

    const heading: Block & HeadingProps = { id, name, text: content.headingText };

    const themeVariant = content?.themeVariant;
    const baseClasses = themeVariant
      ? require(`/lib/components/blocks/Heading/themes/${themeVariant}/heading.classes`).default
      : {};
    heading.classes = buildTheme({ classes: baseClasses, overrides: settings });

    heading.tag = settings?.headingTag || 'h3';

    return heading;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildHeadingBlock;
