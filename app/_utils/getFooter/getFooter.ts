import { buildConfig } from '@utils/buildConfig';

const getFooter = (globalConfig: any) => {
  if (globalConfig?.properties) {
    const {
      properties: {
        footer: { items: footerItems } = { items: '' },
        companyInfoItems: { items: companyInfoItems } = { items: '' },
      },
    } = globalConfig || {};

    const [defaultFooter] = [footerItems?.[0]?.content]?.map((x: any) => buildConfig(x)) || [null];
    const [companyInfo] = [companyInfoItems?.[0]?.content]?.map((x: any) => buildConfig(x)) || [null];

    return { defaultFooter, companyInfo };
  }

  return { defaultFooter: null, companyInfo: null };
};

export default getFooter;
