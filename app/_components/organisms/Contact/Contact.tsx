import { Address, EmailAddress, Map, PhoneNumbers, SocialItem } from '@components/atoms';
import { BaseComponent } from '@components/utils';
import { getGlobalConfig } from '@utils';
import { buildClasses } from '@utils/buildClasses';
import { buildConfig } from '@utils/buildConfig';

import contactClasses from './Contact.classes';
import { ContactProps } from './Contact.types';

const Contact = async ({ address, telephoneNumbers, email, map, styling, overrides }: ContactProps) => {
  const {
    properties: {
      addresses: { items: addresses },
      phoneNumbers: { items: phoneNumbers },
      emails: { items: emails },
      socials: { items: socials },
      displayName: companyName,
    },
  } = (await getGlobalConfig()) || {};
  const classes = buildClasses(contactClasses, overrides);

  const defaultSocials = socials.map((x: any) => buildConfig(x.content));
  const [defaultAddress, defaultPhone, defaultEmail] = [
    addresses[0].content,
    phoneNumbers[0].content,
    emails[0].content,
  ].map((x) => buildConfig(x));

  const chosenAddress = address?.items?.items[0]?.content
    ? buildConfig(address?.items?.items[0]?.content)
    : defaultAddress;
  const chosenPhoneNumber = telephoneNumbers?.items?.items[0].content
    ? buildConfig(telephoneNumbers?.items?.items[0].content)
    : defaultPhone;
  const chosenEmail = email?.items?.items[0].content ? buildConfig(email?.items?.items[0].content) : defaultEmail;

  return (
    <BaseComponent as="div" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'organism' }}>
      <section className="{block} blockPadding !md:pt-large !pt-0">
        <div className="{container} container mx-auto ">
          <div className="{root} grid bg-primary text-white md:grid-cols-12">
            <div className="{contentArea} col-span-12 space-y-4 p-8 md:p-10 lg:col-span-5 lg:p-12 xl:col-span-4">
              <Address companyName={companyName} {...chosenAddress} />

              <div className="{contactInfoContainer} font-bold">
                <div className="{contactInfo}">
                  <PhoneNumbers
                    icon={chosenPhoneNumber.icon}
                    number={chosenPhoneNumber.keyValue.value}
                    styling={chosenPhoneNumber.keyValue.styling}
                  />

                  <EmailAddress
                    icon={chosenEmail.icon}
                    email={chosenEmail.keyValue.value}
                    styling={chosenEmail.keyValue.styling}
                  />
                </div>
              </div>
              
              <div className="{socialItemsContainer}">
                <nav className="{socialItems} flex gap-1.5" role="navigation" aria-label="Social media links">
                  {defaultSocials.map((item: any) => (
                    <SocialItem icon={item.icon} link={item.keyValue.link} styling={{}} />
                  ))}
                </nav>
              </div>
            </div>

            <Map src={map.googleMapsURL} styling={{}} />
          </div>
        </div>
      </section>
    </BaseComponent>
  );
};

export default Contact;
