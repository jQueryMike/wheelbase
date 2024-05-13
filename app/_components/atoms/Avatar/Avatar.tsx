// eslint-disable-next-line import/no-cycle
import { Image } from '@components/atoms';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import avatarClasses from './Avatar.classes';
import { AvatarProps } from './Avatar.types';

const Avatar = ({ styling, overrides, image1: image }: AvatarProps) => {
  const classes = buildClasses(avatarClasses, overrides);

  return (
    <BaseComponent as="div" styling={styling} stylingOptions={{ atomicType: 'atom' }} className={classes?.root}>
      <Image
        alt={image?.alt || 'Avatar'}
        loading={image?.loading || 'lazy'}
        width={image?.width || '128'}
        height={image?.height || '128'}
        className={classes?.avatar}
        src={image?.src || ""}
        id=""
        styling={image?.styling || {}}
      />
    </BaseComponent>
  );
};

export default Avatar;
