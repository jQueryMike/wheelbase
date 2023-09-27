import { DefaultSeoProps } from 'next-seo';

import buildDrawerNavigationBlock from './builders/blocks/buildDrawerNavigationBlock';
import buildFooterBlock from './builders/blocks/buildFooterBlock';
import buildHeaderBlock from './builders/blocks/buildHeaderBlock';
import buildPageSections from './builders/buildPageSections';

const CONTENT_API_URL = `${process.env.API_URL!}/umbraco/delivery/api/v1/content`;
const IS_PRODUCTION = process.env.ENVIRONMENT_NAME === 'production';

const getInitialProps = async () => {
  const themeTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`theme`] : [];
  const globalConfigTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`global-config`] : [];
  const url = `${CONTENT_API_URL}/item/${process.env.API_ROOT_NODE_PATH}`;
  const navUrl = `${process.env.API_URL}/api/navigation/${process.env.API_ROOT_NODE_GUID}?maxLevel=3`;

  const [{ properties: globalTheme }, { properties: globalConfig }, drawerNavigationItems] = await Promise.all([
    fetch(`${url}/theme`, { next: { tags: themeTags } }).then((res) => res.json()),
    fetch(`${url}/global-config`, { next: { tags: globalConfigTags } }).then((res) => res.json()),
    fetch(navUrl).then((res) => res.json()),
  ]);

  const globalProps: any = {};

  if (globalConfig.headerContentGrid?.items?.length > 0) {
    globalProps.headerSections = await buildPageSections(
      globalConfig.headerContentGrid?.items || [],
      globalTheme,
      globalConfig,
    );
  }

  if (globalConfig.footerContentGrid?.items?.length > 0) {
    globalProps.footerSections = await buildPageSections(
      globalConfig.footerContentGrid?.items || [],
      globalTheme,
      globalConfig,
    );
  }

  const header = globalConfig?.header?.items ? globalConfig?.header?.items[0] : null;

  if (header) {
    globalProps.header = buildHeaderBlock({
      id: header.content.id,
      name: 'Header',
      content: header.content.properties,
      settings: header.settings.properties,
      globalTheme,
    });
  }

  const drawerNavigation = globalConfig?.drawerNavigation?.items ? globalConfig?.drawerNavigation?.items[0] : null;

  if (drawerNavigation) {
    globalProps.drawerNavigationProps = buildDrawerNavigationBlock({
      items: drawerNavigationItems,
      id: drawerNavigation.content.id,
      content: drawerNavigation.content.properties,
      settings: drawerNavigation.settings?.properties,
      name: 'DrawerNavigation',
      globalTheme,
    });
  }

  const footer = globalConfig?.footer?.items ? globalConfig?.footer?.items[0] : null;

  if (footer) {
    globalProps.footer = buildFooterBlock({
      id: footer.content.id,
      name: 'Footer',
      content: footer.content.properties,
      settings: footer.settings.properties,
      globalTheme,
    });
  }

  const defaultSeo: DefaultSeoProps = {
    defaultTitle: `Welcome to ${globalConfig.pageTitle}`,
    titleTemplate: `%s | ${globalConfig.pageTitle}`,
    description: globalConfig.metaDescription,
    dangerouslySetAllPagesToNoIndex: !IS_PRODUCTION || globalConfig.robotsNoIndex === true,
    dangerouslySetAllPagesToNoFollow: !IS_PRODUCTION || globalConfig.robotsNoFollow === true,
  };

  if (
    globalConfig.openGraphType ||
    globalConfig.openGraphLocale ||
    globalConfig.openGraphUrl ||
    globalConfig.openGraphSitename ||
    globalConfig.openGraphImages
  ) {
    defaultSeo.openGraph = {
      type: globalConfig.openGraphType,
      locale: globalConfig.openGraphLocale,
      url: globalConfig.openGraphUrl,
      siteName: globalConfig.openGraphSitename,
      images: globalConfig.openGraphImages,
    };
  }

  if (globalConfig.twitterHandle || globalConfig.twitterSite || globalConfig.twitterCardType) {
    defaultSeo.twitter = {
      handle: globalConfig.twitterHandle,
      site: globalConfig.twitterSite,
      cardType: globalConfig.twitterCardType,
    };
  }

  if (globalConfig.metaKeywords) {
    defaultSeo.additionalMetaTags = [{ name: 'keywords', content: globalConfig.metaKeywords }];
  }

  globalProps.defaultSeo = defaultSeo;

  if (globalTheme.globalCSS) globalProps.globalCSS = globalTheme.globalCSS;

  globalProps.colorPalette = {
    primary: {
      DEFAULT: globalTheme.primaryDefault,
      light: globalTheme.primaryLight,
      dark: globalTheme.primaryDark,
      contrast: globalTheme.primaryContrast,
    },
    secondary: {
      DEFAULT: globalTheme.secondaryDefault,
      light: globalTheme.secondaryLight,
      dark: globalTheme.secondaryDark,
      contrast: globalTheme.secondaryContrast,
    },
    accent: {
      DEFAULT: globalTheme.accentDefault,
      light: globalTheme.accentLight,
      dark: globalTheme.accentDark,
      contrast: globalTheme.accentContrast,
    },
    success: {
      DEFAULT: globalTheme.successDefault,
      contrast: globalTheme.successContrast,
    },
    error: {
      DEFAULT: globalTheme.errorDefault,
      contrast: globalTheme.errorContrast,
    },
    heading: {
      DEFAULT: globalTheme.headingDefault,
      light: globalTheme.headingLight,
      dark: globalTheme.headingDark,
    },
    copy: {
      DEFAULT: globalTheme.copyDefault,
      light: globalTheme.copyLight,
      dark: globalTheme.copyDark,
    },
    link: {
      DEFAULT: globalTheme.linkDefault,
      light: globalTheme.linkLight,
      dark: globalTheme.linkDark,
    },
    body: {
      DEFAULT: globalTheme.bodyDefault,
      alt: globalTheme.bodyAlt,
    },
    divider: {
      DEFAULT: globalTheme.dividerDefault,
    },
    custom1: {
      DEFAULT: globalTheme.custom1Default,
      contrast: globalTheme.custom1Contrast,
    },
    custom2: {
      DEFAULT: globalTheme.custom2Default,
      contrast: globalTheme.custom2Contrast,
    },
    custom3: {
      DEFAULT: globalTheme.custom3Default,
      contrast: globalTheme.custom3Contrast,
    },
    custom4: {
      DEFAULT: globalTheme.custom4Default,
      contrast: globalTheme.custom4Contrast,
    },
    custom5: {
      DEFAULT: globalTheme.custom5Default,
      contrast: globalTheme.custom5Contrast,
    },
  };

  return { globalProps };
};

export default getInitialProps;
