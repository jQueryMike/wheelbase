import { buildConfig } from '@utils/buildConfig';

const getFooter = (globalConfig: any) => {
  if (globalConfig?.properties) {
    const {
      properties: { footer },
    } = globalConfig || {};

    const footerItems = footer?.items;
    const [items] = footerItems ? [footerItems?.[0]?.content]?.map((x: any) => buildConfig(x)) || [null] : [null];
    return { items };
  }

  return { items: null };
};

export default getFooter;
