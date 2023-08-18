import Block from '@interfaces/Block';
import cn from 'classnames';
import { useEffect, useState } from 'react';

import { BlockList } from '../../utility-components/BlockList';
import { Image, ImageProps } from '../Image';

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
  contentArea?: Block[];
  enableScrollTransition?: boolean;
  scrollTransitionPosition?: number;
}

const Header = ({
  classes = {},
  logo,
  contentArea = [],
  enableScrollTransition = false,
  scrollTransitionPosition = 0,
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

  return (
    <>
      <header className={cn(classes.root, { [classes.rootScrolled || '']: addScrolledClasses })}>
        <div className={cn(classes.container, { [classes.containerScrolled || '']: addScrolledClasses })}>
          {logo && (
            <div className={classes.logoContainer}>
              <Image {...logo} />
            </div>
          )}
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
