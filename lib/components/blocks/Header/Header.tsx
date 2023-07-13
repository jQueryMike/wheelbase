import NextLink from 'next/link';

import { Image, ImageProps } from '../../utility-components/Image';

export type HeaderClasses<T> = {
  [key in
    | 'root'
    | 'headerContainer'
    | 'navContainer'
    | 'navItem'
    | 'logo'
    | 'headerLogo'
    | 'menuIconWrapper'
    | 'hamburger'
    | 'hamburgerWrapper'
    | 'topBun'
    | 'meat'
    | 'bottomBun'
    | 'headerSlot'
    | 'contactItemList'
    | 'contactItem'
    | 'contactItemIcon'
    | 'contactItemLabel'
    | 'headerCtaBlock']?: T;
};

export interface HeaderProps {
  classes?: HeaderClasses<string>;
  menuIcon?: any;
  logo?: ImageProps;
  navItems?: {
    key: string;
    href: string;
    name: string;
  }[];
  contactItems?: {
    icon: any;
    label: string;
    href: string;
  }[];
  headerCta?: {
    label: string;
    href: string;
  }[];
}

const Header = ({ classes = {}, menuIcon, navItems, logo, contactItems, headerCta }: HeaderProps) => (
  <header className={classes.root}>
    <div className={classes.headerContainer}>
      {menuIcon && (
        <div className={classes.menuIconWrapper}>
          <div className={classes.hamburger}>
            <div className={classes.hamburgerWrapper}>
              <div className={classes.topBun} />
              <div className={classes.meat} />
              <div className={classes.bottomBun} />
            </div>
          </div>
        </div>
      )}
      {logo && (
        <div className={classes?.headerLogo}>
          <Image className={classes?.logo} {...logo} />
        </div>
      )}
      {navItems && navItems.length > 0 && (
        <nav className={classes.navContainer}>
          {navItems.map((item) => (
            <NextLink href={item.href} className={classes.navItem} key={item.key}>
              {item.name}
            </NextLink>
          ))}
        </nav>
      )}
      <slot className={classes.headerSlot}>
        {contactItems && (
          <ul className={classes.contactItemList}>
            {contactItems.map((item) => (
              <li className={classes.contactItem} key={item.href}>
                <NextLink href={item.href}>
                  <i className={classes.contactItemIcon}>{item.icon}</i>
                  <em className={classes.contactItemLabel}>{item.label}</em>
                </NextLink>
              </li>
            ))}
          </ul>
        )}
        {headerCta && (
          <div className={classes.headerCtaBlock}>
            {headerCta.map((item) => (
              <NextLink href={item.href} className="btn" key={item.href}>
                {item.label}
              </NextLink>
            ))}
          </div>
        )}
      </slot>
    </div>
  </header>
);

export default Header;
