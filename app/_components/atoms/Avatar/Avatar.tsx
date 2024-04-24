import { Image } from '@components/atoms';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import avatarClasses from './Avatar.classes';
import { AvatarProps } from './Avatar.types';

const Avatar = ({ styling, avatar, overrides }: AvatarProps) => {
  const classes = buildClasses(avatarClasses, overrides);

  return (
    <BaseComponent styling={styling} stylingOptions={{ atomicType: 'atom' }}>
      <Image
        alt={avatar.alt || 'Avatar'}
        loading={avatar.loading || 'lazy'}
        width={avatar.width || '128'}
        height={avatar.height || '128'}
        className={classes?.avatar}
        src={avatar.src}
        id=""
        name=""
      />
    </BaseComponent>
  );
};

export default Avatar;
