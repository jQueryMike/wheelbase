import { RegInputProps } from '@components/blocks/RegInput';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';
import { v4 as uuidv4 } from 'uuid';

import buildBlockClasses from '../buildBlockClasses';
import extractInheritedTheme from '../extractInheritedTheme';
import buildButtonBlock from './buildButtonBlock';

const buildRegInputBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  globalConfig,
  inheritedThemes,
}: BlockBuilderConfig): (Block & RegInputProps) | undefined => {
  try {
    if (!globalConfig.clickBuySubdomain) return undefined;

    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.regInputTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    const buttonTheme = globalBlockTheme?.submitButtonTheme?.items[0]?.content?.properties;

    const submitButton = buildButtonBlock({
      id: uuidv4(),
      name: 'Button',
      content: {
        type: 'submit',
        link: [
          {
            title: content?.buttonText || 'Get valuation',
          },
        ],
      },
      settings: {},
      inheritedThemes: [buttonTheme, ...extractInheritedTheme('button', inheritedThemes)],
      globalTheme,
      globalConfig,
    })!;

    // Build initial block
    const regInput: Block & RegInputProps = {
      id,
      name,
      classes,
      clickBuyUrl: `https://${globalConfig.clickBuySubdomain}.${process.env.CLICK_BUY_URL!}/vrm-lookup`,
      submitButton,
    };

    if (content?.placeholderText) regInput.placeholderText = content.placeholderText;

    return regInput;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildRegInputBlock;
