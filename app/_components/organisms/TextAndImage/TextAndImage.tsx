// eslint-disable-next-line import/no-cycle
import BLOCKS from '@components/Blocks';
import { Heading, Image } from '@components/atoms';
import { BaseComponent } from '@components/utils/BaseComponent';
import { buildClasses } from '@utils/buildClasses';
import { Suspense } from 'react';
import { TextAndImageProps } from './TextAndImage.types';
import textAndImageClasses from './TextAndImage.classes';

const TextAndImage = ({
  heading,
  subheading,
  image1: image,
  contentArea = [],
  reverse,
  overrides,
  tint,
  ...rest
}: TextAndImageProps) => {
  const classes = buildClasses(
    textAndImageClasses({ imageAsBackground: image?.imageAsBackground, reverse }),
    overrides,
  );
  const components = contentArea.map(({ name, id, ...props }: any) => [
    name,
    BLOCKS[name as keyof typeof BLOCKS],
    id,
    props,
  ]);

  return (
    <BaseComponent className={classes.root} {...rest}>
      <div className={classes.rootInner}>
        <div className={classes.container}>
          <div className={classes.contentContainer}>
            {(heading || subheading) && (
              <div className={classes?.headingsContainer} data-testid="headings-container">
                {heading && <Heading {...heading} />}
                {subheading && <Heading {...subheading} data-testid="subheading" textType="subheading" />}
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
              {image.imageAsBackground && <BaseComponent as="span" styling={tint.styling} className={classes.tint} />}
              <div className={classes.imageContainer} data-testid="image-container">
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
