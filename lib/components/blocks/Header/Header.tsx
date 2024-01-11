import Block from '@interfaces/Block';
import cn from 'classnames';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { BlockList } from '../../utility-components/BlockList';
import { DrawerNavigation, DrawerNavigationProps } from '../DrawerNavigation';
import { ImageProps } from '../../../../app/_components/atoms/Image';

export type HeaderClasses<T> = {
  [key in
    | 'root'
    | 'rootScrolled'
    | 'spacer'
    | 'spacerScrolled'
    | 'container'
    | 'containerScrolled'
    | 'drawerNavigationContainer'
    | 'logoContainer'
    | 'logoLink'
    | 'logoImage'
    | 'contentAreaContainer']?: T;
};

export interface HeaderProps {
  classes?: HeaderClasses<string>;
  logo?: ImageProps;
  logoHref?: string;
  contentArea?: Block[];
  enableScrollTransition?: boolean;
  scrollTransitionPosition?: number;
  drawerNavigationProps?: DrawerNavigationProps;
}

const Header = ({
  classes = {},
  logo,
  logoHref,
  contentArea = [],
  enableScrollTransition = false,
  scrollTransitionPosition = 0,
  drawerNavigationProps,
}: HeaderProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => setScrollPosition(window.scrollY);
  useEffect(() => {
    if (enableScrollTransition) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }

    return () => {};
  }, [enableScrollTransition]);

  const addScrolledClasses = enableScrollTransition && scrollPosition >= scrollTransitionPosition;

  let logoElement = null;

  if (logo) {
    logoElement = <NextImage className={classes.logoImage} {...logo} />;

    if (logoHref) {
      logoElement = (
        <NextLink className={classes.logoLink} href={logoHref}>
          {logoElement}
        </NextLink>
      );
    }
  }

  return (
    <>
      <header className={twMerge(cn(classes.root, { [classes.rootScrolled || '']: addScrolledClasses }))}>
        <div className={twMerge(cn(classes.container, { [classes.containerScrolled || '']: addScrolledClasses }))}>
          {drawerNavigationProps && (
            <div className={classes.drawerNavigationContainer}>
              <DrawerNavigation {...drawerNavigationProps} />
            </div>
          )}
          {logoElement && <div className={classes.logoContainer}>{logoElement}</div>}
          {contentArea?.length > 0 && (
            <div className={classes.contentAreaContainer}>
              <BlockList blocks={contentArea} />
            </div>
          )}
        </div>
      </header>
      <div className={cn(classes.spacer, { [classes.spacerScrolled || '']: addScrolledClasses })} />
    </>
  );
};

export default Header;
