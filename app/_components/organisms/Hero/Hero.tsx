// eslint-disable-next-line import/no-cycle
import BLOCKS from '@components/Blocks';
import { Heading } from '@components/atoms';
import { Block } from '@types';
import { buildClasses } from '@utils/buildClasses';
import cn from 'classnames';
import NextImage from 'next/image';
import { CSSProperties, Suspense } from 'react';

// eslint-disable-next-line import/no-cycle
import { HeroProps } from './Hero.types';

enum GradientDirection {
  RTL = 'Right to Left',
  LTR = 'Left to Right',
}

const Hero = async ({
  variant = '1',
  heading,
  subheading,
  image1: image,
  contentArea = [],
  imagePlacement,
  backgroundColor,
  backgroundGradientColor,
  gradientDirection,
  overrides,
}: HeroProps & Block) => {
  const {
    default: { classes: variantClasses },
  } = await import(`./variants/${variant}`);
  const classes = buildClasses(variantClasses, overrides);
  const components = contentArea.map(({ name, id, ...props }: any) => [name, BLOCKS[name], id, props]);
  return (
    <div
      className={cn(classes?.root, {
        [`bg-[${backgroundColor?.hex}]`]: backgroundColor?.hex && !backgroundGradientColor,
        'bg-gradient-to-br': gradientDirection === GradientDirection.LTR,
        'bg-gradient-to-bl': gradientDirection === GradientDirection.RTL,
        [`from-[${backgroundColor?.hex}]`]: backgroundColor?.hex && backgroundGradientColor,
        [`to-[${backgroundGradientColor?.hex}]`]: backgroundGradientColor?.hex,
      })}
      style={
        {
          '--tw-gradient-from': backgroundColor?.hex,
          '--tw-gradient-to': backgroundGradientColor?.hex,
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to, --tw-gradient-from)',
        } as CSSProperties
      }
    >
      <div className={classes?.rootInner}>
        <div className={classes?.container}>
          <div
            className={cn(
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
              className={cn(imagePlacement === 'left' ? classes?.imageContainerReverse : classes?.imageContainer)}
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
