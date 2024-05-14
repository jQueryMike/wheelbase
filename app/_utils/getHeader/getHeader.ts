import { buildConfig } from '@utils/buildConfig';

const getHeader = (globalConfig: any) => {
  if (globalConfig.properties.header) {
    const {
      properties: { header: { items: headerItems } = { items: '' } },
    } = globalConfig || {};

    const [header] = [headerItems[0].content].map((x: any) => buildConfig(x));
    return header;
  }

  return null;
};

export default getHeader;
