// import { BaseComponent } from '@components/utils/BaseComponent';
import { buildClasses } from '@utils/buildClasses';
import NextImage from 'next/image';

import headerClasses from './Header.classes';
// import { HeaderProps } from './Header.types';

// eslint-disable-next-line spaced-comment
const Header = (/*{ ...rest }: HeaderProps*/) => {
  const classes = buildClasses(headerClasses);
  // eslint-disable-next-line no-console
  console.log(classes);
  return (
    // <BaseComponent className={classes.root} as="header" {...rest}>
    //   Header
    // </BaseComponent>
    <header className="{root} sticky top-0 z-50 h-16 w-full bg-white p-4 md:h-24 md:p-6">
      <div className="{headerContainer} container mx-auto h-full">
        <div className="{component} flex h-full items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <div className="{logoContainer}">
            <a className="{headerLogo}" href="/">
              <NextImage
                className="h-8 w-auto md:h-11 lg:h-11 xl:h-12"
                alt="Click Motors Logo"
                loading="lazy"
                width={346.42}
                height={56}
                decoding="async"
                data-nimg="1"
                style={{ color: 'transparent' }}
                src="http://localhost:3227/media/3rpd2eqh/logo.svg"
              />
              {/* <img
                alt="Click Motors Logo"
                loading="lazy"
                width="346.42"
                height="56"
                decoding="async"
                data-nimg="1"
                className=""
                style={{ color: 'transparent' }}
                src="http://localhost:3227/media/3rpd2eqh/logo.svg"
              /> */}
            </a>
          </div>
          <div className="{navContainer} flex flex-1 justify-end">
            <nav className="{nav} first-child:divide-y-0 invisible absolute inset-0  -left-full left-auto flex h-screen w-full flex-col divide-y divide-gray-200 bg-white p-8 pt-16 shadow-xl transition sm:w-96 xl:visible xl:static xl:-left-96 xl:h-auto xl:w-auto xl:flex-row xl:justify-end xl:gap-6 xl:divide-none xl:bg-transparent xl:p-0 xl:shadow-none">
              <button
                aria-label="Close navigation"
                className="{closeButton} absolute right-4 top-4 text-[32px] xl:hidden"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <a
                className="text-primary hover:text-accent transitionbefore:absolute before:bg-accent relative py-3 text-base font-bold before:-bottom-1 before:h-1 before:w-full"
                href="/"
              >
                Home
              </a>
              <a
                className="text-primary hover:text-accent relative py-3 text-base font-bold transition"
                href="/sell-your-car"
              >
                Sell your car
              </a>
              <a
                className="text-primary hover:text-accent relative py-3 text-base font-bold transition"
                href="/how-it-works"
              >
                How it works
              </a>
              <a className="text-primary hover:text-accent relative py-3 text-base font-bold transition" href="/faq">
                FAQ
              </a>
              <a
                className="text-primary hover:text-accent relative py-3 text-base font-bold transition"
                href="/reviews"
              >
                Reviews
              </a>
              <a
                className="text-primary hover:text-accent relative py-3 text-base font-bold transition"
                href="/contact"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="{menuIconWrapper} flex items-center xl:hidden">
            <button aria-label="Open navigation" className="{hamburger} group">
              <div className="{hamburgerWrapper} space-y-1.5">
                <div className="{topBun} bg-primary group-hover:bg-accent h-1 w-8 rounded-full transition" />
                <div className="{meat} bg-primary group-hover:bg-accent h-1 w-8 rounded-full transition" />
                <div className="{bottomBun} bg-primary group-hover:bg-accent h-1 w-8 rounded-full transition" />
              </div>
            </button>
          </div>
          <div className="{headerSlot} xs:block hidden">
            <div className="{headerCtaBlock}">
              <a title="" href="/sell-your-car">
                <button
                  aria-label="Get a valuation"
                  className="{btn} bg-accent hover:bg-primary rounded-md p-3 px-4 text-sm font-semibold text-white transition hover:text-white active:scale-95"
                >
                  Get a valuation
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
