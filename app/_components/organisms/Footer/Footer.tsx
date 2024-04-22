/* eslint-disable jsx-a11y/control-has-associated-label */

/* eslint-disable jsx-a11y/anchor-is-valid */
import { buildClasses } from '@utils/buildClasses';
import cn from 'classnames';
import NextImage from 'next/image';

import footerClasses from './Footer.classes';
import { FooterProps } from './Footer.types';

// eslint-disable-next-line no-empty-pattern
const Footer = async ({}: FooterProps) => {
  const classes = buildClasses(footerClasses);
  return (
    <footer className={cn('{root} bg-primary blockPadding p-8', classes.root)} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="{container} container mx-auto">
        <div className="{component} space-y-6">
          <div className="{slot1} space-y-6">
            <div
              className="{infoContainer} flex flex-wrap justify-center gap-y-3 divide-x divide-white divide-opacity-20"
              aria-label="Company information"
            >
              <div className="{infoItem} px-4 leading-none text-white first-of-type:pl-0 last-of-type:pr-0">
                Company No.12345678
              </div>
              <div className="{infoItem} px-4 leading-none text-white first-of-type:pl-0 last-of-type:pr-0">
                FCA No.12345678
              </div>
              <div className="{infoItem} px-4 leading-none text-white first-of-type:pl-0 last-of-type:pr-0">
                VAT No.12345678
              </div>
            </div>
            <div className="{contentContainer} text-center">
              <div className="{content} mx-auto max-w-4xl space-y-4 text-white text-opacity-60">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cupiditate quisquam repellat dolorum
                  facilis beatae, enim distinctio nihil praesentium at tempore nemo natus accusamus reprehenderit,
                  voluptate quod deleniti nostrum omnis?
                </p>
              </div>
            </div>
            <div className="{socialContainer} flex justify-center">
              <nav className="{socialItems} flex gap-1.5" role="navigation" aria-label="Social media links">
                <a
                  className="{socialItem} hover:text-accent inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-blue-500 transition"
                  title="Facebook"
                  href="#"
                >
                  <i className="fa fa-facebook" />
                </a>
                <a
                  className="{socialItem} hover:text-accent inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-blue-500 transition"
                  title="Twitter"
                  href="#"
                >
                  <i className="fa fa-twitter" />
                </a>
                <a
                  className="{socialItem} hover:text-accent inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-blue-500 transition"
                  title="YouTube"
                  href="#"
                >
                  <i className="fa fa-youtube" />
                </a>
              </nav>
            </div>
          </div>
          <div className="{slot2} flex w-full flex-col items-center gap-6 border-t border-white border-opacity-20 pt-6 md:flex-row md:items-start md:justify-between">
            <div className="{legalContainer} flex flex-col items-center gap-6 md:items-start md:gap-3">
              <nav
                className="{navContainer} flex flex-wrap justify-center gap-y-3 divide-x divide-white divide-opacity-20"
                role="navigation"
                aria-label="Legal links"
              >
                <a
                  className="{navItem} px-4 font-medium leading-none text-white transition first-of-type:pl-0 last-of-type:pr-0 hover:text-opacity-60"
                  title="Terms of Use"
                  href="/terms"
                >
                  Terms of Use
                </a>
                <a
                  className="{navItem} px-4 font-medium leading-none text-white transition first-of-type:pl-0 last-of-type:pr-0 hover:text-opacity-60"
                  title="Privacy"
                  href="/privacy"
                >
                  Privacy
                </a>
                <a
                  className="{navItem} px-4 font-medium leading-none text-white transition first-of-type:pl-0 last-of-type:pr-0 hover:text-opacity-60"
                  title="Cookies"
                  href="/cookies"
                >
                  Cookies
                </a>
                <a
                  className="{navItem} px-4 font-medium leading-none text-white transition first-of-type:pl-0 last-of-type:pr-0 hover:text-opacity-60"
                  title="Sitemap"
                  href="/sitemap"
                >
                  Sitemap
                </a>
              </nav>
            </div>
            <div className="{imageContainer} inline-flex">
              <a target="_blank" rel="noreferrer" href="https://www.clickdealer.co.uk">
                <NextImage
                  className="{image} h-8 w-auto md:h-10"
                  alt="Click Dealer Ltd"
                  loading="lazy"
                  width={0}
                  height={0}
                  decoding="async"
                  data-nimg="1"
                  style={{ color: 'transparent' }}
                  src="http://localhost:3227/media/johnlmzf/click-dealer-logo-white.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    // <div className={classes?.root}>
    //   {title}
    // </div>
  );
};

export default Footer;
