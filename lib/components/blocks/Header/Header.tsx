import Block from '@interfaces/Block';
import cn from 'classnames';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';

import { BlockList } from '../../utility-components/BlockList';
import { Image, ImageProps } from '../Image';
import { PrimaryNavigation, PrimaryNavigationProps, PrimaryNavigationRoutes } from '../PrimaryNavigation';

export type HeaderClasses<T> = {
  [key in
    | 'root'
    | 'rootScrolled'
    | 'spacer'
    | 'spacerScrolled'
    | 'container'
    | 'containerScrolled'
    | 'logoContainer'
    | 'contentAreaContainer']?: T;
};

export interface HeaderProps {
  classes?: HeaderClasses<string>;
  logo?: ImageProps;
  logoHref?: string;
  contentArea?: Block[];
  enableScrollTransition?: boolean;
  scrollTransitionPosition?: number;
  primaryNavigationProps?: PrimaryNavigationProps;
}

const Header = ({
  classes = {},
  logo,
  logoHref,
  contentArea = [],
  enableScrollTransition = false,
  scrollTransitionPosition = 0,
  primaryNavigationProps,
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

  let logoContainer = null;

  if (logo) {
    logoContainer = (
      <div className={classes.logoContainer}>
        <Image {...logo} />
      </div>
    );

    if (logoHref) {
      logoContainer = <NextLink href={logoHref}>{logoContainer}</NextLink>;
    }
  }

  return (
    <>
      <header className={cn(classes.root, { [classes.rootScrolled || '']: addScrolledClasses })}>
        <div className={cn(classes.container, { [classes.containerScrolled || '']: addScrolledClasses })}>
          {logoContainer}
          {contentArea?.length > 0 && (
            <div className={classes.contentAreaContainer}>
              <BlockList blocks={contentArea} />
            </div>
          )}
          <PrimaryNavigation {...primaryNavigationProps} />
        </div>
      </header>
      <div className={cn(classes.spacer, { [classes.spacerScrolled || '']: addScrolledClasses })} />
    </>
  );
};

export default Header;
