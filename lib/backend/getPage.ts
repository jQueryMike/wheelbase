import { NextSeoProps } from 'next-seo';

import buildPageContent from './builders/buildPageContent';
import buildPageSections from './builders/buildPageSections';
import mergeVars from './mergeVars';

const CONTENT_API_URL = `${process.env.API_URL!}/umbraco/delivery/api/v1/content`;

const getPage = async (params: { slug: string[] }) => {
  const themeTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`theme`] : [];
  const globalConfigTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`global-config`] : [];
  const sharedContentTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`shared-content`] : [];
  const pagesTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`theme`, `page-${params.slug.join('-')}`] : [];
  const url = `${CONTENT_API_URL}/item/${process.env.API_ROOT_NODE_PATH}`;
  const sharedContentUrl = `${CONTENT_API_URL}/item/shared-content`;

  const [{ properties: globalTheme }, { properties: globalConfig }, { properties: sharedContent }, page] =
    await Promise.all([
      fetch(`${url}/theme`, { next: { tags: themeTags } }).then((res) => res.json()),
      fetch(`${url}/global-config`, { next: { tags: globalConfigTags } }).then((res) => res.json()),
      fetch(sharedContentUrl, { next: { tags: sharedContentTags } }).then((res) => res.json()),
      fetch(`${url}/home/${params.slug.join('/')}`, { next: { tags: pagesTags } }).then((res) => res.json()),
    ]);
  const content = await buildPageContent(
    mergeVars(page, globalConfig, sharedContent).properties?.organismGrid?.items || [],
    globalTheme,
    globalConfig,
  );
  const sections = await buildPageSections(
    mergeVars(page, globalConfig, sharedContent).properties?.organismGrid?.items || [],
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

  return { sections, content, globalConfig, globalTheme, seo };
};

export default getPage;
