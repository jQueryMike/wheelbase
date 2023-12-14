import Block from '@interfaces/Block';
import cn from 'classnames';
import NextImage from 'next/image';

import { BlockList } from '../../utility-components/BlockList';
import { Headings } from '../Headings';
import { HeroProps } from './Hero.types';

const Hero = ({ classes = {}, headings, image, contentArea = [], imagePlacement }: HeroProps & Block) => (
  <div className={classes.root}>
    <div className={classes.rootInner}>
      <div className="p-4 py-10 md:p-6 md:py-16 lg:py-20 xl:py-24">
        <div className={classes.container}>
          <div
            className={cn(
              imagePlacement === 'left' ? classes.heroContentContainerReverse : classes.heroContentContainer,
            )}
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
  </div>
);

export default Hero;
