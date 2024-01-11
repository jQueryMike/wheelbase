// eslint-disable-next-line import/no-cycle
import { RenderBlocks } from '@components/Blocks';
import { Block } from '@types';
import cx from 'classnames';
import dynamic from 'next/dynamic';
import NextImage from 'next/image';

import { Headings } from '../../molecules';
import { HeroProps } from './Hero.types';
import fallBackVariant from './variants/1';

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

const Hero = ({
  classes = fallBackVariant.classes,
  headings,
  image1: image,
  contentArea = [],
  imagePlacement,
  backgroundColor,
}: HeroProps & Block) => (
  <div className={cx(classes?.root)} style={{ background: rgbString(hexToRgb(backgroundColor.hex)) }}>
    <div className={classes?.rootInner}>
      <div className={classes?.container}>
        <div
          className={cx(
            imagePlacement === 'left' ? classes?.heroContentContainerReverse : classes?.heroContentContainer,
          )}
        >
          {headings && (
            <div className={classes?.headingsContainer}>
              <Headings {...headings} />
            </div>
          )}
          {contentArea?.length > 0 && (
            <div className={classes?.contentAreaContainer}>{contentArea.map(RenderBlocks)}</div>
          )}
        </div>
        {image && (
          <div className={cx(imagePlacement === 'left' ? classes?.imageContainerReverse : classes?.imageContainer)}>
            <NextImage className={classes?.image} {...image} />
          </div>
        )}
      </div>
    </div>
  </div>
);

export default dynamic(() => Promise.resolve(Hero), {
  loading: () => <div>Loading...</div>,
});
