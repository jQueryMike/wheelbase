import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import DOMPurify from 'isomorphic-dompurify';

import addressClasses from './Address.classes';
import { AddressProps } from './Address.types';

const Address = ({
  companyName,
  addressOne,
  addressTwo,
  city,
  county,
  country,
  postcode,
  showCountry,
  displayType,
  styling,
  overrides,
}: AddressProps) => {
  const classes = buildClasses(addressClasses, overrides);

  const addressLines: string[] = [];
  let separator;

  switch (displayType.toLocaleLowerCase()) {
    case 'comma':
      separator = ', <br />';
      break;
    case 'inline':
      separator = ' ';
      break;
    case 'inline comma':
      separator = ', ';
      break;
    default:
      separator = '<br />';
      break;
  }

  if (companyName) addressLines.push(companyName);
  if (addressOne) addressLines.push(addressOne);
  if (addressTwo) addressLines.push(addressTwo);
  if (city) addressLines.push(city);
  if (county) addressLines.push(county);
  if (country) addressLines.push(country);
  if (postcode) addressLines.push(postcode);

  const address = addressLines.join(separator);

  return (
    <BaseComponent as="div" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'atom' }}>
      <address
        className="{address} flex flex-col not-italic [&>*:first-child]:font-bold"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(address) }}
      />
    </BaseComponent>
  );
};

export default Address;
