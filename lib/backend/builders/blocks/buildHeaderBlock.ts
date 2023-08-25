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

    const headerLogo = content?.logoImage ? content?.logoImage[0] : null;

    if (headerLogo) {
      const headerLogoTheme = globalBlockTheme?.headerLogoTheme?.items[0]?.content?.properties;

      header.logo = buildImageBlock({
        id: headerLogo.id,
        name: 'Image',
        content: { ...headerLogo },
        inheritedThemes: [headerLogoTheme, ...extractInheritedTheme('image', inheritedThemes)],
        globalTheme,
        defaultProps: {
          fill: true,
          style: { objectFit: 'contain', objectPosition: 'left center' },
        },
      });
    }

    header.contentArea = buildAdditionalContent({
      items: content?.contentArea?.items,
      globalBlockTheme,
      globalTheme,
      inheritedThemes,
    });

    // Add props
    if (content?.enableScrollTransition !== undefined) header.enableScrollTransition = content.enableScrollTransition;
    if (content?.scrollTransitionPosition)
      header.scrollTransitionPosition = parseInt(content.scrollTransitionPosition, 10);

    if (content?.logoLink[0] && (content?.logoLink[0]?.url || content?.logoLink[0]?.route?.path)) {
      header.logoHref = (content.logoLink[0].url || content.logoLink[0].route.path).replace('/home', '');
    }

    return header;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildHeaderBlock;
