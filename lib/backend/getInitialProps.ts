import buildFooterBlock from './builders/blocks/buildFooterBlock';
import buildHeaderBlock from './builders/blocks/buildHeaderBlock';
import buildPrimaryNavigationBlock from './builders/blocks/buildPrimaryNavigationBlock';
import buildPageSections from './builders/buildPageSections';

const getInitialProps = async () => {
  const themeTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`theme`] : [];
  const globalConfigTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`global-config`] : [];
  const url = `${process.env.CONTENT_API_URL}/item/${process.env.API_ROOT_NODE_PATH}`;
  const navUrl = `${process.env.API_URL}/api/navigation/${process.env.API_ROOT_NODE_GUID}`;

  const [{ properties: globalTheme }, { properties: globalConfig }, primaryNavigationItems] = await Promise.all([
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

  const primaryNavigation = globalConfig?.primaryNavigation?.items ? globalConfig?.primaryNavigation?.items[0] : null;

  if (primaryNavigation) {
    globalProps.primaryNavigation = buildPrimaryNavigationBlock({
      id: primaryNavigation.content.id,
      content: primaryNavigation.content.properties,
      settings: primaryNavigation.settings?.properties,
      name: 'primaryNavigation',
      globalTheme,
    });
  }

  if (primaryNavigationItems) globalProps.primaryNavigation.routes = primaryNavigationItems;

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

  return { globalProps };
};

export default getInitialProps;
