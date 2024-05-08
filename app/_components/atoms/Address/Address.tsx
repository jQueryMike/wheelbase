import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import cn from 'classnames';

import addressClasses from './Address.classes';
import { AddressProps } from './Address.types';

const Address = ({
  companyName,
  addressLineOne,
  addressLineTwo,
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

  const delimiter =
    displayType.toLocaleLowerCase().includes('comma') && !displayType.toLocaleLowerCase().includes('no') ? ', ' : ' ';
  const inline = displayType.toLocaleLowerCase().startsWith('inline');

  return (
    <BaseComponent
      as="div"
      className={classes.root}
      styling={styling}
      stylingOptions={{ atomicType: 'atom', textType: 'text' }}
    >
      <address className={cn(classes.address, inline ? 'flex-row flex-nowrap' : 'flex flex-col')}>
        {companyName ? (
          <span>
            {companyName}
            {delimiter}
          </span>
        ) : undefined}
        {addressLineOne ? (
          <span>
            {addressLineOne}
            {delimiter}
          </span>
        ) : undefined}
        {addressLineTwo ? (
          <span>
            {addressLineTwo}
            {delimiter}
          </span>
        ) : undefined}
        {city ? (
          <span>
            {city}
            {delimiter}
          </span>
        ) : undefined}
        {county ? (
          <span>
            {county}
            {delimiter}
          </span>
        ) : undefined}
        {country && showCountry ? (
          <span>
            {country}
            {delimiter}
          </span>
        ) : undefined}
        {postcode ? <span>{postcode}</span> : undefined}
      </address>
    </BaseComponent>
  );
};

export default Address;
