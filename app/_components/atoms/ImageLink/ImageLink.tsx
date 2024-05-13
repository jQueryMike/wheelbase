// eslint-disable-next-line import/no-cycle
import { Image } from '@components/atoms';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import imageLinkClasses from './ImageLink.classes';
import { ImageLinkProps } from './ImageLink.types';

const ImageLink = ({ styling, overrides, image1: image }: ImageLinkProps) => {
  const classes = buildClasses(imageLinkClasses, overrides);
  const imageSrc = image?.src || "";
  return (
    <BaseComponent styling={styling} stylingOptions={{ atomicType: 'atom' }} className={classes?.root}>
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
    </BaseComponent>
  );
};

export default ImageLink;
