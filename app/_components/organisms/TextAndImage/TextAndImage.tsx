// eslint-disable-next-line import/no-cycle
import BLOCKS from '@components/Blocks';
import { Heading } from '@components/atoms';
import { buildClasses } from '@utils/buildClasses';
import cn from 'classnames';
import NextImage from 'next/image';
import { Suspense } from 'react';

// eslint-disable-next-line import/no-cycle
import { TextAndImageProps } from './TextAndImage.types';
import { BaseOrganism } from '../BaseOrganism';

const TextAndImage = async ({
  variant = '1',
  heading,
  subheading,
  image1: image,
  contentArea = [],
  reverse,
  overrides,
  ...rest
}: TextAndImageProps) => {
  const {
    default: { classes: variantClasses },
  } = await import(`./variants/${variant}`);
  const classes = buildClasses(variantClasses, overrides);
  const components = contentArea.map(({ name, id, ...props }: any) => [
    name,
    BLOCKS[name as keyof typeof BLOCKS],
    id,
    props,
  ]);
  const resolvedHeading = heading ? await Heading(heading) : undefined;
  const resolvedSubheading = subheading
    ? await Heading({ ...subheading, 'data-testid': 'subheading', textType: 'subheading' })
    : undefined;
  return (
    <BaseOrganism containerClasses={{ 'grid-flow-dense': reverse }} {...rest}>
      <div
        className={reverse ? classes?.textAndImageContentContainerReverse : classes?.textAndImageContentContainer}
      >
        {(heading || subheading) && (
          <div className={classes?.headingsContainer} data-testid="headings-container">
            {resolvedHeading}
            {resolvedSubheading}
          </div>
        )}
        {components?.length > 0 && (
          <div className={classes?.contentAreaContainer} data-testid="content-area">
            {components.map(([name, Component, id, props]: any) => (
              <Suspense fallback={<div>Loading {name}...</div>} key={id}>
                <Component {...props} />
              </Suspense>
            ))}
          </div>
        )}
      </div>
      {image && (
        <div
          className={cn(reverse ? classes?.imageContainerReverse : classes?.imageContainer)}
          data-testid="image-container"
        >
          <NextImage className={classes?.image} {...image} data-testid="image" />
        </div>
      )}
    </BaseOrganism>
  );
};

export default TextAndImage;
