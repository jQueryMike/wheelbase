import { Icon } from '@components/utility-components/Icon';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export type PrimaryNavigationClasses<T> = {
  [key in
    | 'root'
    | 'toggleButtonContainer'
    | 'toggleButton'
    | 'burgerIcon'
    | 'burgerText'
    | 'navContainer'
    | 'navContainerClosed'
    | 'navContainerOpen'
    | 'menuContainer'
    | 'menuItem'
    | 'nav'
    | 'ul'
    | 'li'
    | 'liCurrent'
    | 'link'
    | 'linkCurrent'
    | 'subrouteMenu'
    | 'subroutename'
    | 'subMenuIconOpen'
    | 'subMenuIconClosed'
    | 'subMenuContainer'
    | 'subMenuItemContainer'
    | 'subMenuItem'
    | 'closeMenuContainer']?: T;
};

export interface PrimaryNavigationProps {
  classes?: PrimaryNavigationClasses<string>;
  burgerIcon?: string;
  menuText?: string;
  closeIcon?: string;
  subMenuIcon?: string;
  routes?: PrimaryNavigationRoutes[];
}

export interface PrimaryNavigationRoutes {
  id: string;
  name: string;
  url?: string;
  children?: {
    id: string;
    name: string;
    url?: string;
  }[];
}

const PrimaryNavigation = ({
  classes = {},
  burgerIcon,
  menuText,
  closeIcon,
  subMenuIcon,
  routes,
}: PrimaryNavigationProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenuIndexes, setOpenSubmenuIndexes] = useState<number[]>([]);
  const [openDesktopSubmenuIndex, setDesktopOpenSubmenuIndex] = useState(-1);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleOutsideClick = (event: any) => {
    if (!event.target.closest(`.${classes.root}`)) {
      closeMenu();
    }
  };

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [classes.root]);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleSubMenu = (index: number) => {
    if (openSubmenuIndexes.includes(index)) {
      setOpenSubmenuIndexes((prevIndexes) => prevIndexes.filter((i) => i !== index));
    } else {
      setOpenSubmenuIndexes((prevIndexes) => [...prevIndexes, index]);
    }
  };

  const openDesktopSubMenu = (index: number) => {
    setDesktopOpenSubmenuIndex(index);
  };

  const closeDesktopSubMenu = (index: number) => {
    setDesktopOpenSubmenuIndex(index - index);
  };

  const renderSubMenu = (children: any, index: number) => {
    return (
      <ul
        className={classNames(
          (isDesktop && openDesktopSubmenuIndex == index) || (!isDesktop && openSubmenuIndexes.includes(index))
            ? classes.subMenuContainer
            : 'hidden',
        )}
        onMouseEnter={() => isDesktop && openDesktopSubMenu(index)}
        onMouseLeave={() => isDesktop && closeDesktopSubMenu(-1)}
      >
        {children.map((item: any) => (
          <li
            key={item.name}
            className={classNames(item.isCurrent ? classes.linkCurrent : '', classes.subMenuItemContainer)}
          >
            <a href={item.url} className={classes.subMenuItem}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className={classes.root}>
      {!isDesktop && (
        <div className={classes.toggleButtonContainer} onClick={toggleMenu} data-testid="toggleButton">
          {burgerIcon && !menuText && <Icon className={classNames(burgerIcon, classes.burgerIcon)} />}
          {menuText && !burgerIcon && <span className={classes.burgerText}>{menuText}</span>}
        </div>
      )}
      <div
        className={classNames(classes.navContainer, menuOpen ? classes.navContainerOpen : classes.navContainerClosed)}
      >
        <nav className={classes.nav}>
          <ul className={classes.menuContainer}>
            {routes &&
              routes.map((item, index) => (
                <li key={item.name} className={classes.menuItem} onClick={() => !isDesktop && toggleSubMenu(index)}>
                  {item.url && !item.children ? (
                    <a href={item.url} className={classNames(classes.link)}>
                      {item.name}
                    </a>
                  ) : (
                    <span
                      className={classes.subrouteMenu}
                      onMouseEnter={() => isDesktop && openDesktopSubMenu(index)}
                      onMouseLeave={() => isDesktop && closeDesktopSubMenu(index)}
                    >
                      {`${item.name}`}
                      {subMenuIcon && (
                        <div
                          className={
                            openDesktopSubmenuIndex == index || openSubmenuIndexes.includes(index)
                              ? classes.subMenuIconOpen
                              : classes.subMenuIconClosed
                          }
                        >
                          <i className={classNames(subMenuIcon)}></i>
                        </div>
                      )}
                    </span>
                  )}
                  {item.children && renderSubMenu(item.children, index)}
                </li>
              ))}
          </ul>
        </nav>

        {menuOpen && !isDesktop && (
          <span className={classes.closeMenuContainer} onClick={closeMenu}>
            <i className={closeIcon} data-testid="closeButton" />
          </span>
        )}
      </div>
    </div>
  );
};

export default PrimaryNavigation;
