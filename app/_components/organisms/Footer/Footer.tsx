import { CompanyInfo, SocialItem, Text } from '@components/atoms';
import { BaseComponent } from '@components/utils';
import { getLegalUrl } from '@utils';
import { buildClasses } from '@utils/buildClasses';
import { buildConfig } from '@utils/buildConfig';
import Image from 'next/image';
import Link from 'next/link';

import footerClasses from './Footer.classes';
import { FooterProps } from './Footer.types';

const Footer = async ({ companyInfo, footerText, socials, styling, overrides }: FooterProps) => {
  const classes = buildClasses(footerClasses, overrides);
  const legal = await getLegalUrl().catch(() => null);
  const buildConfigForItem = (item?: any) => (item?.content ? buildConfig(item.content) : undefined);
  const socialContent = socials?.items?.items?.map(buildConfigForItem) || [];
  const chosenSocials = socialContent.map(({ icon, socials: socialItem, styling: socialStyling }: any) => ({
    icon,
    socials: socialItem?.socials?.[0] ? buildConfig(socialItem.socials[0]) : undefined,
    styling: socialStyling,
  }));

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
            {chosenSocials.length > 0 && (
              <div className={classes.socialContainer}>
                <nav className={classes.socialItems} role="navigation" aria-label="Social media links">
                  {chosenSocials.map((item: any) => (
                    <SocialItem
                      key={item.id}
                      icon={item.icon}
                      link={item.socials?.link?.[0] || {}}
                      styling={item.styling}
                    />
                  ))}
                </nav>
              </div>
            )}
          </div>
          <div className={classes.footerSlotTwo}>
            {legal && legal.length > 0 && (
              <div className={classes.legalContainer}>
                <nav className={classes.navContainer} role="navigation" aria-label="Legal links">
                  {legal.map((legalItem: any) => (
                    <Link key={legalItem.id} className={classes.navItem} title={legalItem.name} href={legalItem.url}>
                      {legalItem.name}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
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
