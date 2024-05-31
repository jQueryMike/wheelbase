import { Icon } from '../Icon';
import socialItemClasses from './SocialItem.classes';
import { SocialItemProps } from './SocialItem.types';
import { BaseComponent } from '@components/utils';
import { buildLink } from '@utils';
import { buildClasses } from '@utils/buildClasses';
import Link from 'next/link';

const SocialItem = ({ icon, link, styling, overrides }: SocialItemProps) => {
  const parsedLink = buildLink(link);
  const classes = buildClasses(socialItemClasses, overrides);
  return (
    <BaseComponent
      as="div"
      className={classes.root}
      styling={styling}
      stylingOptions={{ atomicType: 'atom' }}
    >
      <Link
        data-testid="social-item-link"
        className={classes.iconWrapper}
        {...parsedLink}
      >
        <Icon data-testid="social-item-icon" {...icon} />
      </Link>
    </BaseComponent>
  );
};

export default SocialItem;
