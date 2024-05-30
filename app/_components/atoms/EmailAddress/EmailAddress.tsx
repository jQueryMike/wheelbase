import { Icon } from '../Icon';
import emailAddressClasses from './EmailAddress.classes';
import { EmailAddressProps } from './EmailAddress.types';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import Link from 'next/link';

const EmailAddress = ({ icon, email, styling, overrides }: EmailAddressProps) => {
  const classes = buildClasses(emailAddressClasses, overrides);
  return (
    <BaseComponent
      as="div"
      className={classes.root}
      styling={styling}
      stylingOptions={{ atomicType: 'atom', textType: 'text' }}
    >
      <div data-testid="email-address" className={classes.emailAddress}>
        {icon && <Icon data-testid="email-address-icon" {...icon} />}
        <Link data-testid="email-address-link" className={classes.emailAddressLink} href={`mailto:${email}`}>
          <div className={classes.emailAddress}>{email}</div>
        </Link>
      </div>
    </BaseComponent>
  );
};

export default EmailAddress;
