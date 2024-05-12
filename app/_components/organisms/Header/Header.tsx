import { Image, NavigationItem } from '@components/atoms';
import { ButtonList } from '@components/molecules';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import headerClasses from './Header.classes';
import { HeaderProps } from './Header.types';

const Header = ({ logo, navigation, link, styling, overrides }: HeaderProps) => {
  const classes = buildClasses(headerClasses, overrides);
  return (
    <BaseComponent as="header" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'organism' }}>
      <div className={classes.headerContainer}>
        <div className={classes.component}>
          <div className={classes.logoContainer}>
            <a className={classes.headerLogo} href="/">
              {logo.alt !== 'altImage' && (
                <Image
                  alt={logo.alt || 'Logo image'}
                  loading={logo.loading || 'lazy'}
                  width={logo.width || '346'}
                  height={logo.height || '56'}
                  className={classes?.avatar}
                  src={logo.src}
                  id=""
                  name=""
                  styling={logo.styling}
                />
              )}
            </a>
          </div>
          {navigation && (
            <div className={classes.navContainer}>
              <nav className={classes.nav}>
                {navigation.map((item: any) => (
                  <NavigationItem {...item} />
                ))}
              </nav>
            </div>
          )}
          <div className={classes.menuIconWrapper}>
            <button aria-label="Open navigation" className="{hamburger} group">
              <div className="{hamburgerWrapper} space-y-1.5">
                <div className="{topBun} h-1 w-8 rounded-full bg-primary transition group-hover:bg-accent" />
                <div className="{meat} h-1 w-8 rounded-full bg-primary transition group-hover:bg-accent" />
                <div className="{bottomBun} h-1 w-8 rounded-full bg-primary transition group-hover:bg-accent" />
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
