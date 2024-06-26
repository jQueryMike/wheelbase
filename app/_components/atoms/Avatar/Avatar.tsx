// eslint-disable-next-line import/no-cycle
import { Image } from '@components/atoms';
import { BaseComponent, Gravatar } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import { AvatarProps } from './Avatar.types';
import avatarClasses from './Avatar.classes';

const Avatar = ({ gravatarName, styling, overrides, ...image }: AvatarProps) => {
  const classes = buildClasses(avatarClasses, overrides);
  return (
    <BaseComponent
      className={classes?.root}
      stylingOptions={{ atomicType: 'atom' }}
      styling={styling}
      datatestid="avatar"
    >
      {image?.src ? (
        <Image
          alt={image?.alt || 'Avatar'}
          loading={image?.loading || 'lazy'}
          width={image?.width || '128'}
          height={image?.height || '128'}
          className={classes?.avatar}
          src={image?.src || ''}
          id=""
          styling={{}}
          data-testid="avatar-image"
          imageAsBackground={false}
          maxHeight='' />
      ) : (
        <Gravatar reviewerName={gravatarName || 'Anon'} styling={{}} />
      )}
    </BaseComponent>
  );
};

export default Avatar;
