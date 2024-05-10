import { Image, NavigationItem, NavigationItemProps } from '@components/atoms';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import headerClasses from './Header.classes';
import { HeaderProps } from './Header.types';
import { ButtonList } from '@components/molecules';

const Header = ({ logo, navigation, link, styling, overrides }: HeaderProps) => {
  const classes = buildClasses(headerClasses, overrides);

  console.log(link);

  return (
    <BaseComponent as="div" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'organism' }}>
      <header className="{root} sticky top-0 z-50 h-16 w-full bg-white p-4 md:h-24 md:p-6">
        <div className="{headerContainer} container mx-auto h-full">
          <div className="{component} flex h-full items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <div className="{logoContainer}">
              <a className="{headerLogo}" href="/">
                <Image
                  alt={logo.alt || 'Avatar'}
                  loading={logo.loading || 'lazy'}
                  width={logo.width || '128'}
                  height={logo.height || '128'}
                  className={classes?.avatar}
                  src={logo.src}
                  id=""
                  name=""
                />
              </a>
            </div>
            <div className="{navContainer} flex flex-1 justify-end">
              <nav className="{nav} first-child:divide-y-0 invisible absolute inset-0  -left-full left-auto flex h-screen w-full flex-col divide-y divide-gray-200 bg-white p-8 pt-16 shadow-xl transition sm:w-96 xl:visible xl:static xl:-left-96 xl:h-auto xl:w-auto xl:flex-row xl:justify-end xl:gap-6 xl:divide-none xl:bg-transparent xl:p-0 xl:shadow-none">
                {navigation.map((item: any) => (
                  <NavigationItem {...item} />
                ))}
              </nav>
            </div>
            <div className="{menuIconWrapper} flex items-center xl:hidden">
              <button aria-label="Open navigation" className="{hamburger} group">
                <div className="{hamburgerWrapper} space-y-1.5">
                  <div className="{topBun} h-1 w-8 rounded-full bg-primary transition group-hover:bg-accent"></div>
                  <div className="{meat} h-1 w-8 rounded-full bg-primary transition group-hover:bg-accent"></div>
                  <div className="{bottomBun} h-1 w-8 rounded-full bg-primary transition group-hover:bg-accent"></div>
                </div>
              </button>
            </div>
            <div className="{headerSlot} hidden xs:block">
              <ButtonList {...link}/>
            </div>
          </div>
        </div>
      </header>
    </BaseComponent>
  );
};

export default Header;
