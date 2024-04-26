import cn from 'classnames';

import { GravatarProps } from './Gravatar.types';

const Gravatar = ({ reviewerName }: GravatarProps) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part.charAt(0).toUpperCase())
      .join('');
  };

  const initials = getInitials(reviewerName);

  return (
    <div className="inline-block h-14 w-14 overflow-hidden rounded-full border-4 bg-gray-300">
      <div
        className={cn('flex h-full w-full items-center justify-center text-xl font-bold text-gray-700', {
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
