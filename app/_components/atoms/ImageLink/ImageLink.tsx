// eslint-disable-next-line import/no-cycle
import { Image } from '@components/atoms';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import { buildLink } from '@utils/buildLink';
import Link from 'next/link';

import imageLinkClasses from './ImageLink.classes';
import { ImageLinkProps } from './ImageLink.types';

const ImageLink = ({ link, image, styling, overrides }: ImageLinkProps) => {
  const classes = buildClasses(imageLinkClasses, overrides);
  const nextLink = buildLink(link);
  const imageSrc = image?.src || '';

  const renderImage = (
    <Image
      alt={image?.alt || 'ImageLink'}
      loading={image?.loading || 'lazy'}
      width={image?.width || '128'}
      height={image?.height || '128'}
      className={classes?.imageLink}
      src={imageSrc}
      id=""
      styling={image?.styling || {}}
    />
  );

  return (
    <BaseComponent styling={styling} stylingOptions={{ atomicType: 'atom' }} className={classes?.root}>
      {link?.href ? <Link {...nextLink}>{renderImage}</Link> : renderImage}
    </BaseComponent>
  );
};

export default ImageLink;
