import { DefaultSeoProps } from 'next-seo';

import buildFooterBlock from './builders/blocks/buildFooterBlock';
import buildHeaderBlock from './builders/blocks/buildHeaderBlock';
import buildPageSections from './builders/buildPageSections';

const getInitialProps = async () => {
  const themeTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`theme`] : [];
  const globalConfigTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`global-config`] : [];
  const url = `${process.env.API_URL}/item/${process.env.API_ROOT_NODE_PATH}`;

  const [{ properties: globalTheme }, { properties: globalConfig }] = await Promise.all([
    fetch(`${url}/theme`, { next: { tags: themeTags } }).then((res) => res.json()),
    fetch(`${url}/global-config`, { next: { tags: globalConfigTags } }).then((res) => res.json()),
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

  let defaultSeo = {
    openGraph: {
      type: null,
      locale: null,
      url: null,
      sitename: null,
      images: null,
    },
    title: null,
    description: null,
    metaKeywords: null,
    metaRobotsNoFollow: null,
    metaRobotsNoIndex: null,
    sitemapChangeFrequency: null,
    sitemapPriority: null,
  };

  if (globalConfig.openGraphType) defaultSeo.openGraph.type = globalConfig.openGraphType;

  if (globalConfig.openGraphLocale) defaultSeo.openGraph.locale = globalConfig.openGraphLocale;

  if (globalConfig.openGraphUrl) defaultSeo.openGraph.url = globalConfig.openGraphUrl;

  if (globalConfig.openGraphSitename) defaultSeo.openGraph.sitename = globalConfig.openGraphSitename;

  if (globalConfig.openGraphImages) defaultSeo.openGraph.images = globalConfig.openGraphImages;

  if (globalConfig.pageTitle) defaultSeo.title = globalConfig.pageTitle;

  if (globalConfig.metaDescription) defaultSeo.description = globalConfig.metaDescription;

  if (globalConfig.metaKeywords) defaultSeo.metaKeywords = globalConfig.metaKeywords;

  if (globalConfig.metaRobotsNoFollow) defaultSeo.metaRobotsNoFollow = globalConfig.metaRobotsNoFollow;

  if (globalConfig.metaRobotsNoIndex) defaultSeo.metaRobotsNoIndex = globalConfig.metaRobotsNoIndex;

  if (globalConfig.sitemapChangeFrequency) defaultSeo.sitemapChangeFrequency = globalConfig.sitemapChangeFrequency;

  if (globalConfig.sitemapPriority) defaultSeo.sitemapPriority = globalConfig.sitemapPriority;

  globalProps.defaultSeo = defaultSeo;

  return { globalProps };
};

export default getInitialProps;
