import Block from '@interfaces/Block';
import cn from 'classnames';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { HTMLAttributeAnchorTarget } from 'react';

import { BlockList } from '../../utility-components/BlockList';
import { Icon } from '../../utility-components/Icon';
import { ImageProps } from '../../../../app/_components/atoms/Image';

export type FooterClasses<T> = {
  [key in
    | 'root'
    | 'rootInner'
    | 'container'
    | 'topSectionContainer'
    | 'infoItemsContainer'
    | 'infoItemsList'
    | 'infoItemsListItem'
    | 'contentAreaContainer'
    | 'socialNavigationContainer'
    | 'socialNavigationList'
    | 'socialNavigationListItem'
    | 'bottomSectionContainer'
    | 'legalNavigationContainer'
    | 'legalNavigationList'
    | 'legalNavigationListItem'
    | 'copyrightContainer'
    | 'copyrightText'
    | 'logoContainer'
    | 'logoLink'
    | 'logoImage']?: T;
};

export type FooterInfoItemClasses<T> = {
  [key in 'infoItemRoot' | 'infoItemLabel' | 'infoItemValue']?: T;
};

export type FooterSocialNavigationItemClasses<T> = {
  [key in
    | 'socialNavigationItemRoot'
    | 'socialNavigationItemLink'
    | 'socialNavigationItemIcon'
    | 'socialNavigationItemLabel']?: T;
};

export type FooterLegalNavigationItemClasses<T> = {
  [key in 'legalNavigationItemRoot' | 'legalNavigationItemLink']?: T;
};

export interface FooterInfoItem {
  classes?: FooterInfoItemClasses<string>;
  id: string;
  label?: string;
  value?: string;
}

export interface FooterSocialNavigationItem {
  classes?: FooterSocialNavigationItemClasses<string>;
  id: string;
  icon?: string;
  label?: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
}

export interface FooterLegalNavigationItem {
  classes?: FooterLegalNavigationItemClasses<string>;
  id: string;
  label?: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
}

export interface FooterProps {
  classes?: FooterClasses<string>;
  contentArea?: Block[];
  infoItems?: FooterInfoItem[];
  socialNavigationItems?: FooterSocialNavigationItem[];
  legalNavigationItems?: FooterLegalNavigationItem[];
  logo?: ImageProps;
  logoHref?: string;
}

const Footer = ({
  classes = {},
  infoItems = [],
  contentArea = [],
  socialNavigationItems = [],
  legalNavigationItems = [],
  logo,
  logoHref,
}: FooterProps) => {
  let logoContainer = null;

  if (logo) {
    logoContainer = (
      <div className={classes.logoContainer}>
        <NextImage className={classes.logoImage} {...logo} />
      </div>
    );

    if (logoHref) {
      logoContainer = (
        <NextLink href={logoHref} className={classes.logoLink}>
          {logoContainer}
        </NextLink>
      );
    }
  }

  return (
    <footer className={classes.root}>
      <div className={classes.rootInner}>
        <div className={classes.container}>
          <div className={classes.topSectionContainer}>
            {infoItems.length > 0 && (
              <div className={classes.infoItemsContainer}>
                <ul className={classes.infoItemsList}>
                  {infoItems.map((item: FooterInfoItem) => (
                    <li key={item.id} className={classes.infoItemsListItem}>
                      <span className={item?.classes?.infoItemRoot}>
                        <span className={item?.classes?.infoItemLabel}>{item.label}</span>
                        <span className={item?.classes?.infoItemValue}>{item.value}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {contentArea.length > 0 && (
              <div className={classes.contentAreaContainer}>
                <BlockList blocks={contentArea} />
              </div>
            )}
            {socialNavigationItems.length > 0 && (
              <div className={classes.socialNavigationContainer}>
                <ul className={classes.socialNavigationList}>
                  {socialNavigationItems.map((item: FooterSocialNavigationItem) => (
                    <li key={item.id} className={classes.socialNavigationListItem}>
                      <span className={item?.classes?.socialNavigationItemRoot}>
                        <a
                          href={item.href}
                          target={item.target || '_blank'}
                          className={item?.classes?.socialNavigationItemLink}
                        >
                          {item.icon && <Icon className={cn(item.icon, item.classes?.socialNavigationItemIcon)} />}
                          {item.label && <span className={item.classes?.socialNavigationItemLabel}>{item.label}</span>}
                        </a>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className={classes.bottomSectionContainer}>
            {legalNavigationItems.length > 0 && (
              <div className={classes.legalNavigationContainer}>
                <ul className={classes.legalNavigationList}>
                  {legalNavigationItems.map((item: FooterLegalNavigationItem) => (
                    <li key={item.id} className={classes.legalNavigationListItem}>
                      <span className={item?.classes?.legalNavigationItemRoot}>
                        <NextLink
                          href={item.href || '/'}
                          target={item.target || '_self'}
                          className={item?.classes?.legalNavigationItemLink}
                        >
                          {item.label}
                        </NextLink>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className={classes.copyrightContainer}>
              <p className={classes.copyrightText}>&copy; {new Date().getFullYear()}</p>
            </div>
            {logoContainer}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
