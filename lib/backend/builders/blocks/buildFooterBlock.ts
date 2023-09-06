import { FooterProps } from '@components/blocks/Footer';
import {
  FooterInfoItem,
  FooterLegalNavigationItem,
  FooterSocialNavigationItem,
} from '@components/blocks/Footer/Footer';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildBlockClasses from '../buildBlockClasses';
import extractInheritedTheme from '../extractInheritedTheme';
import buildImageBlock from './buildImageBlock';

const buildFooterBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  globalConfig,
  inheritedThemes,
}: BlockBuilderConfig): (Block & FooterProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.footerTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build initial block
    const footer: Block & FooterProps = { id, name, classes };

    const footerLogo = content?.logoImage ? content?.logoImage[0] : null;

    if (footerLogo) {
      const footerLogoTheme = globalBlockTheme?.footerLogoTheme?.items[0]?.content?.properties;

      footer.logo = buildImageBlock({
        id: footerLogo.id,
        name: 'Image',
        content: { ...footerLogo },
        inheritedThemes: [footerLogoTheme, ...extractInheritedTheme('image', inheritedThemes)],
        globalTheme,
        globalConfig,
        defaultProps: {
          fill: true,
          style: { objectFit: 'contain' },
        },
      });
    }

    if (content?.logoLink[0] && (content?.logoLink[0]?.url || content?.logoLink[0]?.route?.path)) {
      footer.logoHref = (content.logoLink[0].url || content.logoLink[0].route.path).replace('/home', '');
    }

    footer.contentArea = buildAdditionalContent({
      items: content?.contentArea?.items,
      globalBlockTheme,
      globalTheme,
      globalConfig,
      inheritedThemes,
    });

    // Build info items
    const infoItems = content?.infoItems?.items;
    if (infoItems && infoItems.length) {
      footer.infoItems = infoItems.map((item: any) => {
        const itemContent = item.content?.properties;
        const itemSettings = item.settings?.properties;

        // Build info item classes
        const infoItemClasses = buildBlockClasses({
          name,
          globalBlockTheme,
          inheritedThemes,
          instanceVariant: content?.themeVariant,
          instanceSettings: itemSettings,
          classesIdentifier: 'infoItemClasses',
        });

        // Build intiial item
        const infoItem: FooterInfoItem = { id: item.content.id, classes: infoItemClasses };

        if (itemContent.label) infoItem.label = itemContent.label;
        if (itemContent.value) infoItem.value = itemContent.value;

        return infoItem;
      });
    }

    // Build social navigation items
    const socialNavigationItems = content?.socialNavigationItems?.items;
    if (socialNavigationItems && socialNavigationItems.length) {
      footer.socialNavigationItems = socialNavigationItems
        .map((item: any) => {
          const itemContent = item.content?.properties;
          const itemSettings = item.settings?.properties;

          if (!itemContent.link || !itemContent.link[0]) return null;

          // Build soaicl navigation item classes
          const socialNavigationItemClasses = buildBlockClasses({
            name,
            globalBlockTheme,
            inheritedThemes,
            instanceVariant: content?.themeVariant,
            instanceSettings: itemSettings,
            classesIdentifier: 'socialNavigationItemClasses',
          });

          // Build intiial item
          const socialNavigationItem: FooterSocialNavigationItem = {
            id: item.content.id,
            classes: socialNavigationItemClasses,
          };

          if (itemContent.icon) socialNavigationItem.icon = itemContent.icon;
          if (itemContent.link[0].url || itemContent.link[0].route?.path)
            socialNavigationItem.href = itemContent.link[0].url || itemContent.link[0].route.path;
          if (itemContent.link[0].title) socialNavigationItem.label = itemContent.link[0].title;

          return socialNavigationItem;
        })
        .filter((item: any) => !!item);
    }

    // Build social navigation items
    const legalNavigationItems = content?.legalNavigationItems?.items;

    if (legalNavigationItems && legalNavigationItems.length) {
      footer.legalNavigationItems = legalNavigationItems
        .map((item: any) => {
          const itemContent = item.content?.properties;
          const itemSettings = item.settings?.properties;

          if (!itemContent.link || !itemContent.link[0]) return null;

          // Build legal navigation item classes
          const legalNavigationItemClasses = buildBlockClasses({
            name,
            globalBlockTheme,
            inheritedThemes,
            instanceVariant: content?.themeVariant,
            instanceSettings: itemSettings,
            classesIdentifier: 'legalNavigationItemClasses',
          });

          // Build intiial item
          const legalNavigationItem: FooterLegalNavigationItem = {
            id: item.content.id,
            classes: legalNavigationItemClasses,
          };

          if (itemContent.link[0].url || itemContent.link[0].route?.path)
            legalNavigationItem.href = itemContent.link[0].url || itemContent.link[0].route.path;
          if (itemContent.link[0].title) legalNavigationItem.label = itemContent.link[0].title;

          return legalNavigationItem;
        })
        .filter((item: any) => !!item);
    }

    return footer;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildFooterBlock;
