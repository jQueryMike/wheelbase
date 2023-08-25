import { ButtonProps, ButtonSize, ButtonStyle } from '@components/blocks/Button';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildBlockClasses from '../buildBlockClasses';

const getSizeKey = (size: string) => {
  switch (size) {
    case 'Large':
      return ButtonSize.Large;
    case 'Medium':
      return ButtonSize.Medium;
    case 'Small':
      return ButtonSize.Small;
    default:
      return undefined;
  }
};

const getStyleKey = (style: string) => {
  switch (style) {
    case 'Primary':
      return ButtonStyle.Primary;
    case 'Accent':
      return ButtonStyle.Accent;
    case 'Plain':
      return ButtonStyle.Plain;
    default:
      return undefined;
  }
};

const buildButtonBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  inheritedThemes,
}: BlockBuilderConfig): (Block & ButtonProps) | undefined => {
  try {
    if (!content) return undefined;

    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.buttonTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build initial block
    const button: Block & ButtonProps = { id, name, target: content?.link[0]?.target || '_self', classes };

    // Add props
    if (content?.link[0]?.url || content?.link[0]?.route?.path)
      button.href = (content.link[0].url || content.link[0].route.path).replace('/home', '');
    if (content?.link[0].title) button.text = content.link[0].title;
    if (content?.buttonSize) button.size = getSizeKey(content.buttonSize);
    if (content?.buttonStyle) button.style = getStyleKey(content.buttonStyle);
    if (content?.leftIcon) button.leftIcon = content.leftIcon;
    if (content?.rightIcon) button.rightIcon = content.rightIcon;
    if (content?.onClick) button.onClick = content.onClick;

    return button;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildButtonBlock;
