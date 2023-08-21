import { FooterProps } from '@components/blocks/Footer';
import {
  FooterInfoItem,
  FooterLegalNavigationItem,
  FooterSocialNavigationItem,
} from '@components/blocks/Footer/Footer';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildImageBlock from './buildImageBlock';

const buildFooterBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
}: BlockBuilderConfig): (Block & FooterProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalFooterThemeProperties = globalTheme?.footerTheme?.items[0]?.content?.properties;

    // Get active variant from instance > parent > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalFooterThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || globalVariantId || '1';
    const activeVariant = require(`/lib/components/blocks/Footer/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalFooterThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const footer: Block & FooterProps = { id, name };

    // Add classes
    footer.classes = buildTheme({
      classes: activeVariant.classes,
      globalOverrides,
      instanceOverrides,
    });

    const footerLogo = content?.logoImage ? content?.logoImage[0] : null;

    if (footerLogo) {
      const footerLogoThemeProperties = globalFooterThemeProperties?.footerLogoTheme?.items[0]?.content?.properties;

      footer.logo = buildImageBlock({
        id: footerLogo.id,
        name: 'Image',
        content: { ...footerLogo },
        parentVariantId: footerLogoThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(footerLogoThemeProperties),
        globalTheme,
        defaultProps: {
          fill: true,
          style: { objectFit: 'contain' },
        },
      });
    }

    footer.contentArea = buildAdditionalContent({
      items: content?.contentArea?.items,
      parentThemeProperties: globalFooterThemeProperties,
      globalTheme,
    });

    // Build info items
    const infoItems = content?.infoItems?.items;
    if (infoItems && infoItems.length) {
      footer.infoItems = infoItems.map((item: any) => {
        const itemContent = item.content?.properties;
        const itemSettings = item.settings?.properties;

        // Get global and instance overrides
        const itemGlobalOverrides = extractClassOverrides(globalFooterThemeProperties, 'tw_item__');
        const itemInstanceOverrides = extractClassOverrides(itemSettings);

        // Build intiial item
        const infoItem: FooterInfoItem = { id: item.content.id };

        infoItem.classes = buildTheme({
          classes: activeVariant.infoItemClasses,
          globalOverrides: itemGlobalOverrides,
          instanceOverrides: itemInstanceOverrides,
        });

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

          // Get global and instance overrides
          const itemGlobalOverrides = extractClassOverrides(globalFooterThemeProperties, 'tw_item__');
          const itemInstanceOverrides = extractClassOverrides(itemSettings);

          // Build intiial item
          const socialNavigationItem: FooterSocialNavigationItem = { id: item.content.id };

          socialNavigationItem.classes = buildTheme({
            classes: activeVariant.socialNavigationItemClasses,
            globalOverrides: itemGlobalOverrides,
            instanceOverrides: itemInstanceOverrides,
          });

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

          // Get global and instance overrides
          const itemGlobalOverrides = extractClassOverrides(globalFooterThemeProperties, 'tw_item__');
          const itemInstanceOverrides = extractClassOverrides(itemSettings);

          // Build intiial item
          const legalNavigationItem: FooterLegalNavigationItem = { id: item.content.id };

          legalNavigationItem.classes = buildTheme({
            classes: activeVariant.legalNavigationItemClasses,
            globalOverrides: itemGlobalOverrides,
            instanceOverrides: itemInstanceOverrides,
          });

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
