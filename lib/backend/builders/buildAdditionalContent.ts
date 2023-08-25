import { HeadingTag } from '@components/blocks/Heading';
import Block from '@interfaces/Block';

import buildButtonBlock from './blocks/buildButtonBlock';
import buildHeadingBlock from './blocks/buildHeadingBlock';
import buildTextContentBlock from './blocks/buildTextContentBlock';
import extractInheritedTheme from './extractInheritedTheme';

const buildAdditionalContent = ({
  items = [],
  globalBlockTheme = {},
  globalTheme = {},
  globalConfig,
  inheritedThemes = [],
}: any) => {
  const additionalContent: Block[] = [];

  items.forEach((item: any) => {
    if (item.content.contentType === 'heading') {
      const headingTheme = globalBlockTheme?.additionalHeadingTheme?.items[0]?.content?.properties;

      item.content.properties.headingSize = item.content?.properties.headingSize || 'Small';
      item.settings.properties.headingTag = item.settings?.properties.headingTag || HeadingTag.H4;

      const heading = buildHeadingBlock({
        id: item.content.id,
        name: 'Heading',
        content: item.content?.properties,
        settings: item.settings?.properties,
        inheritedThemes: [headingTheme, ...extractInheritedTheme('heading', inheritedThemes)],
        globalTheme,
      });

      if (heading) additionalContent.push(heading);
    }

    if (item.content.contentType === 'textContent') {
      const textContentTheme = globalBlockTheme?.additionalTextContentTheme?.items[0]?.content?.properties;

      const textContent = buildTextContentBlock({
        id: item.content.id,
        name: 'TextContent',
        content: item.content?.properties,
        settings: item.settings?.properties,
        inheritedThemes: [textContentTheme, ...extractInheritedTheme('textContent', inheritedThemes)],
        globalTheme,
        globalConfig,
      });

      if (textContent) additionalContent.push(textContent);
    }

    if (item.content.contentType === 'button') {
      const buttonTheme = globalBlockTheme?.additionalButtonTheme?.items[0]?.content?.properties;

      const button = buildButtonBlock({
        id: item.content.id,
        name: 'Button',
        content: item.content?.properties,
        settings: item.settings?.properties,
        inheritedThemes: [buttonTheme, ...extractInheritedTheme('button', inheritedThemes)],
        globalTheme,
      });

      if (button) additionalContent.push(button);
    }
  });

  return additionalContent;
};

export default buildAdditionalContent;
