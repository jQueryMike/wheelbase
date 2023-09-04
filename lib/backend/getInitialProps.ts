import buildDrawerNavigationBlock from './builders/blocks/buildDrawerNavigationBlock';
import buildFooterBlock from './builders/blocks/buildFooterBlock';
import buildHeaderBlock from './builders/blocks/buildHeaderBlock';
import buildPageSections from './builders/buildPageSections';

const CONTENT_API_URL = `${process.env.API_URL!}/umbraco/delivery/api/v1/content`;

const getInitialProps = async () => {
  const themeTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`theme`] : [];
  const globalConfigTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`global-config`] : [];
  const url = `${CONTENT_API_URL}/item/${process.env.API_ROOT_NODE_PATH}`;
  const navUrl = `${process.env.API_URL}/api/navigation/${process.env.API_ROOT_NODE_GUID}?maxLevel=3`;

  const [{ properties: globalTheme }, { properties: globalConfig }, drawerNavigationItems] = await Promise.all([
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

  const drawerNavigation = globalConfig?.drawerNavigation?.items ? globalConfig?.drawerNavigation?.items[0] : null;

  if (drawerNavigation) {
    globalProps.drawerNavigation = buildDrawerNavigationBlock({
      items: drawerNavigationItems,
      id: drawerNavigation.content.id,
      content: drawerNavigation.content.properties,
      settings: drawerNavigation.settings?.properties,
      name: 'DrawerNavigation',
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

  return { globalProps };
};

export default getInitialProps;
