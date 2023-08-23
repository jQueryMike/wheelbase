import { PrimaryNavigationProps } from '@components/blocks/PrimaryNavigation';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';

const buildPrimaryNavigationBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
}: BlockBuilderConfig): (Block & PrimaryNavigationProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalPrimaryNavigationThemeProperties = globalTheme?.primaryNavigationTheme?.items[0]?.content?.properties;

    // Get active variant from instance > parent > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalPrimaryNavigationThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || globalVariantId || '1';
    const activeVariant =
      require(`/lib/components/blocks/PrimaryNavigation/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalPrimaryNavigationThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const primaryNavigation: Block & PrimaryNavigationProps = { id, name };

    // Add classes
    primaryNavigation.classes = buildTheme({
      classes: activeVariant.classes,
      globalOverrides,
      instanceOverrides,
    });

    if (content?.burgerIcon) primaryNavigation.burgerIcon = content.burgerIcon;

    if (content?.menuText) primaryNavigation.menuText = content.menuText;

    if (content?.closeIcon) primaryNavigation.closeIcon = content.closeIcon;

    if (content?.subMenuIcon) primaryNavigation.subMenuIcon = content.subMenuIcon;

    return primaryNavigation;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildPrimaryNavigationBlock;
