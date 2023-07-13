import cn from 'classnames';
import NextLink from 'next/link';

import { Content } from '../../utility-components/Content';
import { Image, ImageProps } from '../../utility-components/Image';

export type FooterClasses<T> = {
  [key in
    | 'root'
    | 'container'
    | 'component'
    | 'slot1'
    | 'infoContainer'
    | 'infoItem'
    | 'contentContainer'
    | 'content'
    | 'socialContainer'
    | 'socialItem'
    | 'slot2'
    | 'legalContainer'
    | 'navContainer'
    | 'navItem'
    | 'copyright'
    | 'imageContainer'
    | 'image']?: T;
};

export interface FooterProps {
  classes?: FooterClasses<string>;
  slot1?: string;
  slot2?: string;
  legal?: string;
  infoItems?: {
    key: string;
    name: string;
    value: string;
  }[];
  content?: string;
  socialItems?: {
    key: string;
    href: string;
    name: string;
    icon: string;
    color: string;
  }[];
  navItems?: {
    key: string;
    href: string;
    name: string;
  }[];
  copyright: string;
  image?: ImageProps;
}

const Footer = ({ classes = {}, infoItems, content, socialItems, navItems, copyright, image }: FooterProps) => (
  <footer className={classes.root} aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className={classes.container}>
      <div className={classes.component}>
        {/* Slot 1 */}
        <div className={classes.slot1}>
          {infoItems && (
            <div className={classes.infoContainer} aria-label="Company information">
              {infoItems.map((item) => (
                <div className={classes.infoItem} key={item.key}>
                  {item.name} {item.value}
                </div>
              ))}
            </div>
          )}
          {content && (
            <div className={classes.contentContainer}>
              <Content className={classes.content} content={content} />
            </div>
          )}
          {socialItems && socialItems.length > 0 && (
            <nav className={classes.socialContainer} role="navigation" aria-label="Social media links">
              {socialItems.map((item) => (
                <NextLink href={item.href} className={classes.socialItem} key={item.key} title={item.name}>
                  <i className={cn(item.icon, item.color)}>Icon</i>
                </NextLink>
              ))}
            </nav>
          )}
        </div>
        {/* End Slot 1 */}
        {/* Slot 2 */}
        <div className={classes.slot2}>
          {navItems && (
            <div className={classes.legalContainer}>
              {navItems && navItems.length > 0 && (
                <nav className={classes.navContainer} role="navigation" aria-label="Legal links">
                  {navItems.map((item) => (
                    <NextLink href={item.href} className={classes.navItem} key={item.key} title={item.name}>
                      {item.name}
                    </NextLink>
                  ))}
                </nav>
              )}
              {copyright && <div className={classes?.copyright}>{copyright}</div>}
            </div>
          )}
          {image && (
            <div className={classes?.imageContainer}>
              <NextLink href="https://www.clickdealer.co.uk" target="_blank">
                <Image className={classes?.image} {...image} />
              </NextLink>
            </div>
          )}
        </div>
        {/* End Slot 2 */}
      </div>
    </div>
  </footer>
);

export default Footer;
