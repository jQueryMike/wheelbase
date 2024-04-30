import { buildClasses } from '@utils/buildClasses';
import cn from 'classnames';

import gravatarClasses from './Gravatar.classes';
import { GravatarProps } from './Gravatar.types';

const Gravatar = ({ reviewerName }: GravatarProps) => {
  const classes = buildClasses(gravatarClasses);
  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((part) => part.charAt(0).toUpperCase())
      .join('');

  const initials = getInitials(reviewerName);

  return (
    <div className={classes.root}>
      <div
        className={cn(classes.gravatar, {
          'text-xs': initials.length > 2,
          'text-sm': initials.length === 2,
          'text-lg': initials.length === 1,
        })}
      >
        {initials}
      </div>
    </div>
  );
};

export default Gravatar;
