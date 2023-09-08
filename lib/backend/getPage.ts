import { NextSeoProps } from 'next-seo';

import buildPageSections from './builders/buildPageSections';
import mergeVars from './mergeVars';

const CONTENT_API_URL = `${process.env.API_URL!}/umbraco/delivery/api/v1/content`;

const getPage = async (params: { slug: string[] }) => {
  const themeTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`theme`] : [];
  const globalConfigTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`global-config`] : [];
  const pagesTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`theme`, `page-${params.slug.join('-')}`] : [];
  const url = `${CONTENT_API_URL}/item/${process.env.API_ROOT_NODE_PATH}`;

  const [{ properties: globalTheme }, { properties: globalConfig }, page] = await Promise.all([
    fetch(`${url}/theme`, { next: { tags: themeTags } }).then((res) => res.json()),
    fetch(`${url}/global-config`, { next: { tags: globalConfigTags } }).then((res) => res.json()),
    fetch(`${url}/home/${params.slug.join('/')}`, { next: { tags: pagesTags } }).then((res) => res.json()),
  ]);

  const sections = await buildPageSections(
    mergeVars(page, globalConfig).properties?.contentGrid?.items || [],
    globalTheme,
    globalConfig,
  );

  const seo: NextSeoProps = {};

  if (page.properties.pageTitle) seo.title = page.properties.pageTitle;
  if (page.properties.metaDescription) seo.description = page.properties.metaDescription;

  if (
    page.properties.openGraphType ||
    page.properties.openGraphLocale ||
    page.properties.openGraphUrl ||
    page.properties.openGraphSitename ||
    page.properties.openGraphImages
  ) {
    seo.openGraph = {
      type: page.properties.openGraphType,
      locale: page.properties.openGraphLocale,
      url: page.properties.openGraphUrl,
      siteName: page.properties.openGraphSitename,
      images: page.properties.openGraphImages,
    };
  }

  if (page.properties.twitterHandle || page.properties.twitterSite || page.properties.twitterCardType) {
    seo.twitter = {
      handle: page.properties.twitterHandle,
      site: page.properties.twitterSite,
      cardType: page.properties.twitterCardType,
    };
  }

  if (page.properties.metaKeywords) {
    seo.additionalMetaTags = [{ name: 'keywords', content: page.properties.metaKeywords }];
  }

  return { sections, globalConfig, globalTheme, seo };
};

export default getPage;
