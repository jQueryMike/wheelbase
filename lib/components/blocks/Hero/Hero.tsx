import { Block } from '@types';
import cn from 'classnames';
import NextImage from 'next/image';

import { BlockList } from '../../utility-components/BlockList';
import { Headings } from '../Headings';
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
            <div className={classes.contentAreaContainer}>
              <BlockList blocks={contentArea} />
            </div>
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

export default Hero;
