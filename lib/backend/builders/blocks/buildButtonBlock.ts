import { ButtonProps, ButtonSize, ButtonStyle } from '@components/blocks/Button';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';

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
  parentVariantId,
  parentOverrides,
  globalTheme,
}: BlockBuilderConfig): (Block & ButtonProps) | undefined => {
  try {
    if (!content) return undefined;

    // Shortcut to block theme properties from globalTheme
    const globalButtonThemeProperties = globalTheme?.buttonTheme?.items[0]?.content?.properties;

    // Get active variant from instance > parent > global > default variant id
    const instanceVariantId = content.themeVariant;
    const globalVariantId = globalButtonThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || parentVariantId || globalVariantId || '1';
    const activeVariant = require(`/lib/components/blocks/Button/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalButtonThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const button: Block & ButtonProps = { id, name, target: content?.link[0]?.target || '_self' };

    // Add classes
    button.classes = buildTheme({
      classes: activeVariant.classes,
      globalOverrides,
      parentOverrides,
      instanceOverrides,
    });

    // Add props
    if (content?.link[0]?.url || content?.link[0]?.route?.path)
      button.href = content.link[0].url || content.link[0].route.path;
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
