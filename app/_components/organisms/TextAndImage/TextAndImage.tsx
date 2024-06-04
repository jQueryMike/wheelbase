// eslint-disable-next-line import/no-cycle
import BLOCKS from '@components/Blocks';
import { Heading, Image } from '@components/atoms';
import { BaseComponent } from '@components/utils/BaseComponent';
import { buildClasses } from '@utils/buildClasses';
import cn from 'classnames';
import { Suspense } from 'react';

import textAndImageClasses from './TextAndImage.classes';
// eslint-disable-next-line import/no-cycle
import { TextAndImageProps } from './TextAndImage.types';

const TextAndImage = async ({
  heading,
  subheading,
  image1: image,
  contentArea = [],
  reverse,
  overrides,
  tint,
  ...rest
}: TextAndImageProps) => {
  const classes = buildClasses(textAndImageClasses, overrides);
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
    <BaseComponent className={cn(image?.imageAsBackground ? "relative overflow-hidden" :  classes.root, { 'grid-flow-dense': reverse })} {...rest}>
      <div className={classes.rootInner}>
        <div className={classes.container}>
          <div
            // eslint-disable-next-line no-nested-ternary
            className={image?.imageAsBackground ? "z-20" : reverse ? classes?.textAndImageContentContainerReverse : classes?.textAndImageContentContainer}
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
            <>
              <BaseComponent as="span" styling={tint.styling} className="absolute top-0 left-0 h-full w-full pointer-events-none z-10" />
              <div
                // eslint-disable-next-line no-nested-ternary
                className={cn(image.imageAsBackground ? "[&>div>img]:absolute [&>div>img]:top-1/2 [&>div>img]:left-1/2 [&>div>img]:h-full [&>div>img]:w-full [&>div>img]:translate-y-[-50%] [&>div>img]:translate-x-[-50%]" : reverse ? classes?.imageContainerReverse : classes?.imageContainer)}
                data-testid="image-container"
              >
                <Image className={classes?.image} {...image} />
              </div>
            </>
          )}
        </div>
      </div>
    </BaseComponent>
  );
};

export default TextAndImage;
