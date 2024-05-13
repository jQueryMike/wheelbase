import { CompanyInfo, Text } from '@components/atoms';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import Image from 'next/image';
import Link from 'next/link';

import footerClasses from './Footer.classes';
import { FooterProps } from './Footer.types';

const Footer = ({ companyInfo, footerText, styling, overrides }: FooterProps) => {
  const classes = buildClasses(footerClasses, overrides);
  return (
    <BaseComponent as="footer" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'organism' }}>
      <div className={classes.footerContainer}>
        <div className={classes.component}>
          <div className={classes.footerSlotOne}>
            {companyInfo && <CompanyInfo {...companyInfo} />}

            {footerText && (
              <div className={classes.contentContainer}>
                <div className={classes.content}>
                  <Text {...footerText} />
                </div>
              </div>
            )}

            <div className={classes.socialContainer}>
              <nav className={classes.socialItems} role="navigation" aria-label="Social media links">
                <a className={classes.socialItem} title="Facebook" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a className={classes.socialItem} title="Twitter" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a className={classes.socialItem} title="YouTube" href="#">
                  <i className="fa fa-youtube"></i>
                </a>
              </nav>
            </div>
          </div>

          <div className={classes.footerSlotTwo}>
            <div className={classes.legalContainer}>
              <nav className={classes.navContainer} role="navigation" aria-label="Legal links">
                <a className={classes.navItem} title="Terms of Use" href="/terms">
                  Terms of Use
                </a>
                <a className={classes.navItem} title="Privacy" href="/privacy">
                  Privacy
                </a>
                <a className={classes.navItem} title="Cookies" href="/cookies">
                  Cookies
                </a>
                <a className={classes.navItem} title="Sitemap" href="/sitemap">
                  Sitemap
                </a>
              </nav>
            </div>

            <div className={classes.imageContainer}>
              <Link target="_blank" href="https://www.clickdealer.co.uk">
                <Image
                  alt="Click Dealer Ltd"
                  loading="lazy"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  className={classes.image}
                  src="/click-dealer-logo-white.svg"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BaseComponent>
  );
};

export default Footer;
