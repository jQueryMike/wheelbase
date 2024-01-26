// eslint-disable-next-line import/no-cycle
import BLOCKS from '@components/Blocks';
import { Heading } from '@components/atoms';
import { Block } from '@types';
import { buildClasses } from '@utils/buildClasses';
import cx from 'classnames';
import NextImage from 'next/image';
import { Suspense } from 'react';

// eslint-disable-next-line import/no-cycle
import { HeroProps } from './Hero.types';

// import fallBackVariant from './variants/1';

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

function rgbString({ r, g, b }: { r: number; g: number; b: number }) {
  return `rgb(${r}, ${g}, ${b})`;
}

const Hero = async ({
  variant = '1',
  heading,
  subheading,
  image1: image,
  contentArea = [],
  imagePlacement,
  backgroundColor,
  overrides,
}: HeroProps & Block) => {
  const {
    default: { classes: variantClasses },
  } = await import(`./variants/${variant}`);
  const classes = buildClasses(variantClasses, overrides);
  const components = contentArea.map(({ name, id, ...props }: any) => [name, BLOCKS[name], id, props]);
  return (
    <div
      className={cx(classes?.root)}
      style={backgroundColor?.hex ? { background: rgbString(hexToRgb(backgroundColor.hex)) } : undefined}
    >
      <div className={classes?.rootInner}>
        <div className={classes?.container}>
          <div
            className={cx(
              imagePlacement === 'left' ? classes?.heroContentContainerReverse : classes?.heroContentContainer,
            )}
          >
            {(heading || subheading) && (
              <div className={classes?.headingsContainer} data-testid="headings-container">
                {heading && <Heading {...heading} data-testid="heading" />}
                {subheading && <Heading {...subheading} data-testid="subheading" />}
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
              className={cx(imagePlacement === 'left' ? classes?.imageContainerReverse : classes?.imageContainer)}
              data-testid="image-container"
            >
              <NextImage className={classes?.image} {...image} data-testid="image" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
