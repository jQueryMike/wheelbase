import { HeaderProps } from '@components/blocks/Header';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildBlockClasses from '../buildBlockClasses';
import extractInheritedTheme from '../extractInheritedTheme';
import buildImageBlock from './buildImageBlock';

const buildHeaderBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  globalConfig,
  inheritedThemes,
}: BlockBuilderConfig): (Block & HeaderProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.headerTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build initial block
    const header: Block & HeaderProps = { id, name, classes };

    const headerLogo = content?.logoImage?.items.length ? content?.logoImage.items[0] : null;

    if (headerLogo?.content?.properties?.img?.length > 0) {
      const headerLogoTheme = globalBlockTheme?.headerLogoTheme?.items[0]?.content?.properties;

      header.logo = buildImageBlock({
        id: headerLogo.content.id,
        name: 'Image',
        content: { ...headerLogo.content.properties },
        inheritedThemes: [headerLogoTheme, ...extractInheritedTheme('image', inheritedThemes)],
        globalTheme,
        globalConfig,
        dontApplyClasses: true,
      });

      if (content?.logoLink && content.logoLink[0] && (content.logoLink[0].url || content?.logoLink[0].route?.path)) {
        header.logoHref = (content.logoLink[0].url || content.logoLink[0].route.path).replace('/home', '');
      }
    }

    header.contentArea = buildAdditionalContent({
      items: content?.contentArea?.items,
      globalBlockTheme,
      globalTheme,
      globalConfig,
      inheritedThemes,
    });

    // Add props
    if (content?.enableScrollTransition !== undefined) header.enableScrollTransition = content.enableScrollTransition;
    if (content?.scrollTransitionPosition)
      header.scrollTransitionPosition = parseInt(content.scrollTransitionPosition, 10);

    return header;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildHeaderBlock;
