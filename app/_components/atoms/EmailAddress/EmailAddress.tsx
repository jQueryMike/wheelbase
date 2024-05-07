import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import { Icon } from '../Icon';
import emailAddressClasses from './EmailAddress.classes';
import { EmailAddressProps } from './EmailAddress.types';
import Link from 'next/link';

const EmailAddress = ({ icon, email, styling, overrides }: EmailAddressProps) => {
  const classes = buildClasses(emailAddressClasses, overrides);
  return (
    <BaseComponent as="div" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'atom', textType: 'text' }}>
      <div className="{emailAddress} flex items-center gap-2">
        <Icon {...icon} />
        <div className="{label} font-normal">
          <Link className="hover:text-accent-lighter transition text-sm" href={`mailto:${email}`}>
            {email}
          </Link>
        </div>
      </div>
    </BaseComponent>
  );
};

export default EmailAddress;
