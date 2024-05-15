import { buildConfig } from '@utils/buildConfig';

const getFooter = (globalConfig: any) => {
  if (globalConfig?.properties) {
    const {
      properties: { footer, companyInfoItems },
    } = globalConfig || {};

    const footerItems = footer?.items;
    const [items] = footerItems ? [footerItems?.[0]?.content]?.map((x: any) => buildConfig(x)) || [null] : [null];

    const companyInfoItemsItems = companyInfoItems?.items;
    const [companyInfo] = companyInfoItemsItems
      ? [companyInfoItemsItems?.[0]?.content]?.map((x: any) => buildConfig(x)) || [null]
      : [null];

    return { items, companyInfo };
  }

  return { items: null, companyInfo: null };
};

export default getFooter;
