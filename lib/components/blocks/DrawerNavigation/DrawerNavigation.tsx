/* eslint-disable jsx-a11y/control-has-associated-label */
import cn from 'classnames';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Icon } from '../../utility-components/Icon';

export type DrawerNavigationClasses<T> = {
  [key in
    | 'root'
    | 'rootInner'
    | 'menuButtonContainer'
    | 'menuButton'
    | 'menuButtonIcon'
    | 'menuButtonText'
    | 'navContainer'
    | 'navContainerOpen'
    | 'navContainerClosed'
    | 'navBackdrop'
    | 'navBackdropOpen'
    | 'navBackdropClosed'
    | 'nav'
    | 'navOpen'
    | 'navClosed'
    | 'closeButtonContainer'
    | 'closeButton'
    | 'closeButtonIcon'
    | 'closeButtonText'
    | 'list1'
    | 'listItem1'
    | 'linkContainer1'
    | 'linkContainer1Selected'
    | 'link1'
    | 'toggleButton1'
    | 'toggleButton1Expanded'
    | 'toggleButton1Collapsed'
    | 'toggleButtonIcon1'
    | 'list2'
    | 'list2Expanded'
    | 'list2Collapsed'
    | 'listItem2'
    | 'linkContainer2'
    | 'linkContainer2Selected'
    | 'link2'
    | 'toggleButton2'
    | 'toggleButton2Expanded'
    | 'toggleButton2Collapsed'
    | 'toggleButtonIcon2'
    | 'list3'
    | 'list3Expanded'
    | 'list3Collapsed'
    | 'listItem3'
    | 'link3'
    | 'link3Selected']?: T;
};

export interface DrawerNavigationItem {
  id: string;
  href: string;
  text: string;
  children: DrawerNavigationItem[];
}

export interface DrawerNavigationProps {
  classes?: DrawerNavigationClasses<string>;
  menuButtonIcon?: string;
  menuButtonText?: string;
  closeButtonIcon?: string;
  closeButtonText?: string;
  items?: DrawerNavigationItem[];
  toggleButtonIcon?: string;
}

const DrawerNavigation = ({
  classes = {},
  menuButtonIcon = 'fa-solid fa-bars',
  menuButtonText,
  closeButtonIcon = 'fa-solid fa-xmark',
  closeButtonText,
  toggleButtonIcon = 'fa-solid fa-chevron-down',
  items = [],
}: DrawerNavigationProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedIds, setExpandedIds] = useState<string[]>([]);
  const router = useRouter();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const isExpanded = (id: string) => expandedIds.includes(id);
  const isSelected = (href: string) => `${router.asPath}/`.replaceAll('//', '/') === href;

  const toggleSubMenu = (id: string) => {
    if (isExpanded(id)) {
      setExpandedIds((prevIds) => prevIds.filter((i) => i !== id));
    } else {
      setExpandedIds((prevIds) => [...prevIds, id]);
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.rootInner}>
        <div className={classes.menuButtonContainer}>
          <button className={classes.menuButton} onClick={toggleMenu} data-testid="menuButton">
            {menuButtonIcon && <Icon className={cn(menuButtonIcon, classes.menuButtonIcon)} />}
            {menuButtonText && <span className={classes.menuButtonText}>{menuButtonText}</span>}
          </button>
        </div>
        <div className={cn(classes.navContainer, menuOpen ? classes.navContainerOpen : classes.navContainerClosed)}>
          <button
            className={cn(classes.navBackdrop, menuOpen ? classes.navBackdropOpen : classes.navBackdropClosed)}
            onClick={closeMenu}
          />
          <nav className={cn(classes.nav, menuOpen ? classes.navOpen : classes.navClosed)}>
            {menuOpen && (
              <div className={classes.closeButtonContainer}>
                <button className={classes.closeButton} onClick={closeMenu} data-testid="closeMenuButton">
                  {closeButtonIcon && <Icon className={cn(closeButtonIcon, classes.closeButtonIcon)} />}
                  {closeButtonText && <span className={classes.closeButtonText}>{closeButtonText}</span>}
                </button>
              </div>
            )}
            <ul className={classes.list1}>
              {items.map((item: DrawerNavigationItem) => (
                <li key={item.id} className={classes.listItem1}>
                  <div
                    className={twMerge(
                      cn(classes.linkContainer1, { [classes.linkContainer1Selected || '']: isSelected(item.href) }),
                    )}
                  >
                    <NextLink className={classes.link1} href={item.href} onClick={closeMenu}>
                      {item.text}
                    </NextLink>
                    {item.children.length > 0 && (
                      <button
                        className={cn(
                          classes.toggleButton1,
                          isExpanded(item.id) ? classes.toggleButton1Expanded : classes.toggleButton1Collapsed,
                        )}
                        onClick={() => toggleSubMenu(item.id)}
                      >
                        <Icon className={cn(toggleButtonIcon, classes.toggleButtonIcon1)} />
                      </button>
                    )}
                  </div>
                  {item.children.length > 0 && (
                    <ul
                      className={cn(
                        classes.list2,
                        isExpanded(item.id) ? classes.list2Expanded : classes.list2Collapsed,
                      )}
                    >
                      {item.children.map((child: DrawerNavigationItem) => (
                        <li key={child.id} className={classes.listItem2}>
                          <div
                            className={twMerge(
                              cn(classes.linkContainer2, {
                                [classes.linkContainer2Selected || '']: isSelected(child.href),
                              }),
                            )}
                          >
                            <NextLink className={classes.link2} href={child.href} onClick={closeMenu}>
                              {child.text}
                            </NextLink>
                            {child.children.length > 0 && (
                              <button
                                className={cn(
                                  classes.toggleButton2,
                                  isExpanded(child.id) ? classes.toggleButton2Expanded : classes.toggleButton2Collapsed,
                                )}
                                onClick={() => toggleSubMenu(child.id)}
                              >
                                <Icon className={cn(toggleButtonIcon, classes.toggleButtonIcon2)} />
                              </button>
                            )}
                          </div>
                          {child.children && child.children.length > 0 && (
                            <ul
                              className={cn(
                                classes.list3,
                                isExpanded(child.id) ? classes.list3Expanded : classes.list3Collapsed,
                              )}
                            >
                              {child.children.map((grandchild: DrawerNavigationItem) => (
                                <li key={grandchild.id} className={classes.listItem3}>
                                  <NextLink
                                    className={twMerge(
                                      cn(classes.link3, {
                                        [classes.link3Selected || '']: isSelected(grandchild.href),
                                      }),
                                    )}
                                    href={grandchild.href}
                                    onClick={closeMenu}
                                  >
                                    {grandchild.text}
                                  </NextLink>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DrawerNavigation;
