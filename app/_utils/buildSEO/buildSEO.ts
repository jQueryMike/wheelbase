import { NextSeoProps } from 'next-seo';

export default function buildSEO(page: any) {
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

  return seo;
}
