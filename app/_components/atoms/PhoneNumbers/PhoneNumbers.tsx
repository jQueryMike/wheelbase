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
      className={classes.root}
      styling={styling}
      stylingOptions={{ atomicType: 'atom', textType: 'text' }}
    >
      <div className={classes.phoneNumbersWrapper}>
        {icon && <Icon {...icon} />}
        <Link href={`tel:${number}`}>
          <div className={classes.phoneNumbers}>{number}</div>
        </Link>
      </div>
    </BaseComponent>
  );
};

export default PhoneNumbers;
