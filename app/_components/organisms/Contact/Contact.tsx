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
      <div className={classes.container}>
        {chosenAddress ||
          chosenEmail ||
          chosenPhoneNumber ||
          (defaultSocials && (
            <div className={classes.contactWrapper}>
              <div className={classes.contact}>
                {chosenAddress && <Address companyName={companyName} {...chosenAddress} />}

                {chosenPhoneNumber ||
                  (chosenEmail && (
                    <div className={classes.contactInfoContainer}>
                      <div className={classes.contactInfo}>
                        {chosenPhoneNumber && (
                          <PhoneNumbers
                            icon={chosenPhoneNumber.icon}
                            number={chosenPhoneNumber.keyValue.value}
                            styling={chosenPhoneNumber.keyValue.styling}
                          />
                        )}

                        {chosenEmail && (
                          <EmailAddress
                            icon={chosenEmail.icon}
                            email={chosenEmail.keyValue.value}
                            styling={chosenEmail.keyValue.styling}
                          />
                        )}
                      </div>
                    </div>
                  ))}

                {defaultSocials && (
                  <div className={classes.socialsContainer}>
                    <div className={classes.socials}>
                      {defaultSocials.map((item: any) => (
                        <SocialItem icon={item.icon} link={item.keyValue.link} styling={{}} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Map src={map.googleMapsURL} styling={{}} />
            </div>
          ))}
      </div>
    </BaseComponent>
  );
};

export default Contact;
