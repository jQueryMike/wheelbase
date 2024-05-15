import { buildConfig } from '@utils/buildConfig';

const getFooter = (globalConfig: any) => {
  if (globalConfig?.properties) {
    const {
      properties: { footer, companyInfoItems },
    } = globalConfig || {};

    const footerItems = footer?.items;
    const [defaultFooter] = footerItems
      ? [footerItems?.[0]?.content]?.map((x: any) => buildConfig(x)) || [null]
      : [null];

    const companyInfoItemsItems = companyInfoItems?.items;
    const [companyInfo] = companyInfoItemsItems
      ? [companyInfoItemsItems?.[0]?.content]?.map((x: any) => buildConfig(x)) || [null]
      : [null];

    return { defaultFooter, companyInfo };
  }

  return { defaultFooter: null, companyInfo: null };
};

export default getFooter;
