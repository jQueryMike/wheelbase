import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import Link from 'next/link';

import { Icon } from '../Icon';
import emailAddressClasses from './EmailAddress.classes';
import { EmailAddressProps } from './EmailAddress.types';

const EmailAddress = ({ icon, email, styling, overrides }: EmailAddressProps) => {
  const classes = buildClasses(emailAddressClasses, overrides);
  return (
    <BaseComponent
      as="div"
      className={classes.root}
      styling={styling}
      stylingOptions={{ atomicType: 'atom', textType: 'text' }}
    >
      <div className={classes.emailAddressWrapper}>
        {icon && <Icon {...icon} />}
        <Link className={classes.emailAddressLink} href={`mailto:${email}`}>
          <div className={classes.emailAddress}>{email}</div>
        </Link>
      </div>
    </BaseComponent>
  );
};

export default EmailAddress;
