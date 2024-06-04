// eslint-disable-next-line import/no-cycle
import imageLinkClasses from './ImageLink.classes';
import { ImageLinkProps } from './ImageLink.types';
import { Image } from '@components/atoms';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import Link from 'next/link';

const ImageLink = ({ href, target, styling, overrides, ...image }: ImageLinkProps) => {
  const classes = buildClasses(imageLinkClasses, overrides);
  const imageSrc = image?.src || '';

  const renderImage = (
    <Image
      alt={image?.alt || 'ImageLink'}
      loading={image?.loading || 'lazy'}
      width={image?.width || '128'}
      height={image?.height || '128'}
      className={classes?.imageLink}
      src={imageSrc}
      styling={{}}
      data-testid="image-link-image"
    />
  );
  return (
    <BaseComponent styling={styling} stylingOptions={{ atomicType: 'atom' }} className={classes?.root}>
      {href ? (
        <Link href={href} target={target} data-testid="image-link">
          {renderImage}
        </Link>
      ) : (
        renderImage
      )}
    </BaseComponent>
  );
};

export default ImageLink;
