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
    | 'l1_list'
    | 'l1_listItem'
    | 'l1_linkContainer'
    | 'l1_linkContainerSelected'
    | 'l1_link'
    | 'l1_toggleButton'
    | 'l1_toggleButtonExpanded'
    | 'l1_toggleButtonCollapsed'
    | 'l1_toggleButtonIcon'
    | 'l2_list'
    | 'l2_listExpanded'
    | 'l2_listCollapsed'
    | 'l2_listItem'
    | 'l2_linkContainer'
    | 'l2_linkContainerSelected'
    | 'l2_link'
    | 'l2_toggleButton'
    | 'l2_toggleButtonExpanded'
    | 'l2_toggleButtonCollapsed'
    | 'l2_toggleButtonIcon'
    | 'l3_list'
    | 'l3_listExpanded'
    | 'l3_listCollapsed'
    | 'l3_listItem'
    | 'l3_link'
    | 'l3_linkSelected']?: T;
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
            <ul className={classes.l1_list}>
              {items.map((item: DrawerNavigationItem) => (
                <li key={item.id} className={classes.l1_listItem}>
                  <div
                    className={twMerge(
                      cn(classes.l1_linkContainer, { [classes.l1_linkContainerSelected || '']: isSelected(item.href) }),
                    )}
                  >
                    <NextLink className={classes.l1_link} href={item.href} onClick={closeMenu}>
                      {item.text}
                    </NextLink>
                    {item.children.length > 0 && (
                      <button
                        className={cn(
                          classes.l1_toggleButton,
                          isExpanded(item.id) ? classes.l1_toggleButtonExpanded : classes.l1_toggleButtonCollapsed,
                        )}
                        onClick={() => toggleSubMenu(item.id)}
                      >
                        <Icon className={cn(toggleButtonIcon, classes.l1_toggleButtonIcon)} />
                      </button>
                    )}
                  </div>
                  {item.children.length > 0 && (
                    <ul
                      className={cn(
                        classes.l2_list,
                        isExpanded(item.id) ? classes.l2_listExpanded : classes.l2_listCollapsed,
                      )}
                    >
                      {item.children.map((child: DrawerNavigationItem) => (
                        <li key={child.id} className={classes.l2_listItem}>
                          <div
                            className={twMerge(
                              cn(classes.l2_linkContainer, {
                                [classes.l2_linkContainerSelected || '']: isSelected(child.href),
                              }),
                            )}
                          >
                            <NextLink className={classes.l2_link} href={child.href} onClick={closeMenu}>
                              {child.text}
                            </NextLink>
                            {child.children.length > 0 && (
                              <button
                                className={cn(
                                  classes.l2_toggleButton,
                                  isExpanded(child.id)
                                    ? classes.l2_toggleButtonExpanded
                                    : classes.l2_toggleButtonCollapsed,
                                )}
                                onClick={() => toggleSubMenu(child.id)}
                              >
                                <Icon className={cn(toggleButtonIcon, classes.l2_toggleButtonIcon)} />
                              </button>
                            )}
                          </div>
                          {child.children && child.children.length > 0 && (
                            <ul
                              className={cn(
                                classes.l3_list,
                                isExpanded(child.id) ? classes.l3_listExpanded : classes.l3_listCollapsed,
                              )}
                            >
                              {child.children.map((grandchild: DrawerNavigationItem) => (
                                <li key={grandchild.id} className={classes.l3_listItem}>
                                  <NextLink
                                    className={twMerge(
                                      cn(classes.l3_link, {
                                        [classes.l3_linkSelected || '']: isSelected(grandchild.href),
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
