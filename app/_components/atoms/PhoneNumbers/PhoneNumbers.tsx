import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import Link from 'next/link';

import { Icon } from '../Icon';
import phoneNumbersClasses from './PhoneNumbers.classes';
import { PhoneNumbersProps } from './PhoneNumbers.types';

const PhoneNumbers = ({ icon, number, styling, overrides }: PhoneNumbersProps) => {
  const classes = buildClasses(phoneNumbersClasses, overrides);
  return (
    <BaseComponent
      as="div"
      data-testid="phone-numbers"
      className={classes.root}
      styling={styling}
      stylingOptions={{ atomicType: 'atom', textType: 'text' }}
    >
      <div className={classes.phoneNumbersWrapper}>
        {icon && <Icon data-testid="phone-numbers-icon" {...icon} />}
        <Link data-testid="phone-numbers-link" href={`tel:${number}`}>
          <div data-testid="phone-numbers-number" className={classes.phoneNumbers}>
            {number}
          </div>
        </Link>
      </div>
    </BaseComponent>
  );
};

export default PhoneNumbers;
