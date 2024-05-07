import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import phoneNumbersClasses from './PhoneNumbers.classes';
import { PhoneNumbersProps } from './PhoneNumbers.types';
import { Icon } from '../Icon';

const PhoneNumbers = ({ icon, number, styling, overrides }: PhoneNumbersProps) => {
  const classes = buildClasses(phoneNumbersClasses, overrides);
  return (
    <BaseComponent as="div" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'atom', textType: 'text' }}>
      <div className="{phoneNumber} flex items-center gap-2">
        <div className="{icon} text-accent">
          <Icon {...icon} />
        </div>
        <div className="{label} text-normal text-sm">{number}</div>
      </div>
    </BaseComponent>
  );
};

export default PhoneNumbers;
