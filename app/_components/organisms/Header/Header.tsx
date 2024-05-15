import { Image, NavigationItem } from '@components/atoms';
import { ButtonList } from '@components/molecules';
import { BaseComponent } from '@components/utils';
import { getNavUrl } from '@utils';
import { buildClasses } from '@utils/buildClasses';

import headerClasses from './Header.classes';
import { HeaderProps } from './Header.types';

const Header = async ({ logo, link, styling, overrides }: HeaderProps) => {
  const homeObject = (await getNavUrl()).find((item: { name: string }) => item.name === 'Home');
  const classes = buildClasses(headerClasses, overrides);
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
            <button aria-label="Open navigation" className={classes.hamburger}>
              <div className={classes.hamburgerWrapper}>
                <div className={classes.topBun} />
                <div className={classes.meat} />
                <div className={classes.bottomBun} />
              </div>
            </button>
          </div>
          {link && (
            <div className={classes.headerSlot}>
              <ButtonList {...link} />
            </div>
          )}
        </div>
      </div>
    </BaseComponent>
  );
};

export default Header;
