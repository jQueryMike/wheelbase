import { Address, EmailAddress, Map, PhoneNumbers, SocialItem } from '@components/atoms';
import { BaseComponent } from '@components/utils';
import { getGlobalConfig } from '@utils';
import { buildClasses } from '@utils/buildClasses';
import { buildConfig } from '@utils/buildConfig';

import contactClasses from './Contact.classes';
import { ContactProps } from './Contact.types';

const Contact = async ({ address, telephoneNumbers, email, map, socials, styling, detailsBlock, overrides }: ContactProps) => {
  const classes = buildClasses(contactClasses, overrides);
  const {
    properties: { displayName: companyName },
  } = (await getGlobalConfig()) || {};

  const buildConfigForItem = (item?: any) => (item ? buildConfig(item.content) : undefined);

  const [addressContent, telephoneNumbersContent, emailContent] = [address, telephoneNumbers, email].map((item) =>
    item?.items?.[0] ? buildConfigForItem(item.items[0]) : undefined,
  );

  const socialsContent = socials?.items?.map(buildConfigForItem) || [];

  const chosenSocials = socialsContent.map(({ icon, socials: socialItem, styling: socialStyling }: any) => ({
    icon,
    socials: socialItem?.socials?.[0] ? buildConfig(socialItem.socials[0]) : undefined,
    styling: socialStyling,
  }));

  const chosenAddress = addressContent?.addresses?.[0]
    ? {
        address: buildConfig(addressContent.addresses[0]),
        styling: addressContent.styling,
        displayType: addressContent.displayType,
        showCountry: addressContent.showCountry,
      }
    : undefined;

  const chosenPhone = telephoneNumbersContent?.phoneNumber?.[0]
    ? {
        phoneNumber: buildConfig(telephoneNumbersContent.phoneNumber[0]).phoneNumber,
        icon: telephoneNumbersContent.icon,
        styling: telephoneNumbersContent.styling,
      }
    : undefined;

  const chosenEmail = emailContent?.email?.email?.[0]
    ? {
        email: buildConfig(emailContent.email.email[0]).email,
        icon: emailContent.icon,
        styling: emailContent.styling,
      }
    : undefined;

  return (
    <BaseComponent as="div" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'organism' }}>
      <div className={classes.container}>
        <div className={classes.contactWrapper}>
          {(chosenAddress || chosenEmail || chosenPhone) && (
            <BaseComponent as="div" className={classes.contact} styling={detailsBlock.styling}>
              {chosenAddress && (
                <Address
                  companyName={companyName}
                  {...chosenAddress.address}
                  styling={chosenAddress.styling}
                  displayType={chosenAddress.displayType}
                  showCountry={chosenAddress.showCountry}
                />
              )}
              {(chosenPhone || chosenEmail) && (
                <div className={classes.contactInfoContainer}>
                  <div className={classes.contactInfo}>
                    {chosenPhone && (
                      <PhoneNumbers
                        icon={chosenPhone.icon}
                        number={chosenPhone.phoneNumber}
                        styling={chosenPhone.styling}
                      />
                    )}
                    {chosenEmail && (
                      <EmailAddress icon={chosenEmail.icon} email={chosenEmail.email} styling={chosenEmail.styling} />
                    )}
                  </div>
                </div>
              )}
              {chosenSocials && (
                <div className={classes.socialsContainer}>
                  <div className={classes.socials}>
                    {chosenSocials.map((item: any) => (
                      <SocialItem
                        key={item.id}
                        icon={item.icon}
                        link={{ ...item.socials.link[0] }}
                        styling={item.styling}
                      />
                    ))}
                  </div>
                </div>
              )}
            </BaseComponent>
          )}
          <Map src={map.googleMapsURL} styling={{}} />
        </div>
      </div>
    </BaseComponent>
  );
};

export default Contact;
