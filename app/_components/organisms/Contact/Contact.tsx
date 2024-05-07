import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import contactClasses from './Contact.classes';
import { ContactProps } from './Contact.types';
import { Address } from '@components/atoms';
import { getGlobalConfig } from '@utils';


const Contact = async ({ title, styling, overrides }: ContactProps) => {
  const properties = await getGlobalConfig();
  const globalConfig = properties.properties;
  const classes = buildClasses(contactClasses, overrides);

  console.log(
    globalConfig.addresses.items[0]
  );

  return (
    <BaseComponent as="div" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'organism' }}>
      <section className="{block} blockPadding !md:pt-large !pt-0">
        <div className="{container} container mx-auto ">
          <div className="{root} grid bg-primary text-white md:grid-cols-12">
            <div className="{contentArea} col-span-12 space-y-4 p-8 md:p-10 lg:col-span-5 lg:p-12 xl:col-span-4">
              {/* <Address {...globalConfig.addresses[0]}></Address> */}
              <div className="{contactInfoContainer} font-bold">
                <div className="{contactInfo}">
                  <div className="{phoneNumberContainer}">
                    <div className="{phoneNumber} flex items-center gap-2">
                      <div className="{icon} text-accent">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                        </svg>
                      </div>
                      <div className="{label}">01782 904 719</div>
                    </div>
                  </div>
                  <div className="{emailAddressContainer}">
                    <div className="{emailAddress} flex items-center gap-2">
                      <div className="{icon} text-accent">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                        </svg>
                      </div>
                      <div className="{label} font-bold">
                        <a className="hover:text-accent-lighter transition" href="mailto:info@clickmotors.co.uk">
                          info@clickmotors.co.uk
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="{socialItemsContainer}">
                <nav className="{socialItems} flex gap-1.5" role="navigation" aria-label="Social media links">
                  <a
                    className="{socialItem} inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-blue-500 transition hover:text-accent"
                    title="Facebook"
                    href="#"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a
                    className="{socialItem} inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-blue-500 transition hover:text-accent"
                    title="Twitter"
                    href="#"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a
                    className="{socialItem} inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-blue-500 transition hover:text-accent"
                    title="YouTube"
                    href="#"
                  >
                    <i className="fa fa-youtube"></i>
                  </a>
                </nav>
              </div>
            </div>
            <div className="{mapArea} col-span-12 lg:col-span-7 xl:col-span-8">
              <div className="{mapConatiner} h-full w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9602.137808042271!2d-2.1839248!3d53.0107548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a6836a6dbdc67%3A0x221ce2abd2bb1b75!2sClick%20Dealer%20Ltd!5e0!3m2!1sen!2suk!4v1692008388362!5m2!1sen!2suk"
                  width="600"
                  height="450"
                  loading="lazy"
                  className="{map} h-full min-h-[420px] w-full border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseComponent>
  );
};

export default Contact;
