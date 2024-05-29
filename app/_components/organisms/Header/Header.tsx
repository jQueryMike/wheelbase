// eslint-disable-next-line import/no-cycle
import BLOCKS from '@components/Blocks';
import { Image, NavigationItem } from '@components/atoms';
import { DrawerNavigation } from '@components/atoms/DrawerNavigation';
import { BaseComponent } from '@components/utils';
import { getNavUrl } from '@utils';
import { buildClasses } from '@utils/buildClasses';

import headerClasses from './Header.classes';
import { HeaderProps } from './Header.types';

const Header = async ({ logo, icon, contentArea = [], styling, overrides }: HeaderProps) => {
  const homeObject = (await getNavUrl()).find((item: { name: string }) => item.name === 'Home');
  const classes = buildClasses(headerClasses, overrides);
  const components = contentArea.map(({ name, id, ...props }: any) => [
    name,
    BLOCKS[name as keyof typeof BLOCKS],
    id,
    props,
  ]);

  return (
    <BaseComponent as="header" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'organism' }}>
      <div className={classes.headerContainer}>
        <div className={classes.component}>
          {logo.alt !== 'altImage' && (
            <div className={classes.logoContainer}>
              <a className={classes.headerLogo} href="/">
                <Image
                  alt={logo.alt || 'Logo image'}
                  loading={logo.loading || 'lazy'}
                  width={logo.width || '346'}
                  height={logo.height || '56'}
                  className={classes?.avatar}
                  src={logo.src}
                  id=""
                  styling={logo.styling}
                />
              </a>
            </div>
          )}
          {homeObject && (
            <div className={classes.navContainer}>
              <nav className={classes.nav}>
                {homeObject.children.map((item: any) => (
                  <NavigationItem key={item.id} {...item} />
                ))}
              </nav>
            </div>
          )}
          <div className={classes.menuIconWrapper}>
            <DrawerNavigation homeObject={homeObject} icon={icon} styling={{}} />
          </div>
          {components.length > 0 && (
            <div className={classes.headerSlot}>
              {components.map(([, Component, id, props]: any) => (
                <Component key={id} {...props} />
              ))}
            </div>
          )}
        </div>
      </div>
    </BaseComponent>
  );
};

export default Header;
