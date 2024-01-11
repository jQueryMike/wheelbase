// eslint-disable-next-line import/no-cycle
import { RenderBlocks } from '@components/Blocks';
import { Block } from '@types';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import NextImage from 'next/image';

import { Headings } from '../../molecules';
import { HeroProps } from './Hero.types';

const Hero = ({ classes = {}, headings, image1: image, contentArea = [], imagePlacement }: HeroProps & Block) => (
  <div className={classes.root}>
    <div className={classes.rootInner}>
      <div className={classes.container}>
        <div
          className={cn(imagePlacement === 'left' ? classes.heroContentContainerReverse : classes.heroContentContainer)}
        >
          {headings && (
            <div className={classes.headingsContainer}>
              <Headings {...headings} />
            </div>
          )}
          {contentArea?.length > 0 && (
            <div className={classes.contentAreaContainer}>{contentArea.map(RenderBlocks)}</div>
          )}
        </div>
        {image && (
          <div className={cn(imagePlacement === 'left' ? classes.imageContainerReverse : classes.imageContainer)}>
            <NextImage className={classes.image} {...image} />
          </div>
        )}
      </div>
    </div>
  </div>
);

export default dynamic(() => Promise.resolve(Hero), {
  loading: () => <div>Loading...</div>,
});
