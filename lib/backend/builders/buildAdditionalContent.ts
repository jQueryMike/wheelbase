import { HeadingTag } from '@components/blocks/Heading';
import Block from '@interfaces/Block';

import buildButtonBlock from './blocks/buildButtonBlock';
import buildHeadingBlock from './blocks/buildHeadingBlock';
import buildTextContentBlock from './blocks/buildTextContentBlock';
import extractClassOverrides from './extractClassOverrides';

const buildAdditionalContent = ({ items = [], parentThemeProperties = {}, globalTheme = {} }: any) => {
  const additionalContent: Block[] = [];

  items.forEach((item: any) => {
    if (item.content.contentType === 'heading') {
      const headingThemeProperties = parentThemeProperties?.additionalHeadingTheme?.items[0]?.content?.properties;

      item.content.properties.headingSize = item.content?.properties.headingSize || 'Small';
      item.settings.properties.headingTag = item.settings?.properties.headingTag || HeadingTag.H4;

      const heading = buildHeadingBlock({
        id: item.content.id,
        name: 'Heading',
        content: item.content?.properties,
        settings: item.settings?.properties,
        parentVariantId: headingThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(headingThemeProperties),
        globalTheme,
      });

      if (heading) additionalContent.push(heading);
    }

    if (item.content.contentType === 'textContent') {
      const textContentThemeProperties =
        parentThemeProperties?.additionalTextContentTheme?.items[0]?.content?.properties;

      const textContent = buildTextContentBlock({
        id: item.content.id,
        name: 'TextContent',
        content: item.content?.properties,
        settings: item.settings?.properties,
        parentVariantId: textContentThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(textContentThemeProperties),
        globalTheme,
      });

      if (textContent) additionalContent.push(textContent);
    }

    if (item.content.contentType === 'button') {
      const buttonThemeProperties = parentThemeProperties?.additionalButtonTheme?.items[0]?.content?.properties;

      const button = buildButtonBlock({
        id: item.content.id,
        name: 'Button',
        content: item.content?.properties,
        settings: item.settings?.properties,
        parentVariantId: buttonThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(buttonThemeProperties),
        globalTheme,
      });

      if (button) additionalContent.push(button);
    }
  });

  return additionalContent;
};

export default buildAdditionalContent;
