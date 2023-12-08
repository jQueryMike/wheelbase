import NextImage from 'next/image';

import { BlockList } from '../../utility-components/BlockList';
import { Headings } from '../Headings';
import { HeroProps } from './Hero.types';

const Hero = ({ classes = {}, headings, image, contentArea = [] }: HeroProps) => (
  <div className={classes.root}>
    <div className={classes.rootInner}>
      <div className={classes.container}>
        <div className={classes.heroContentContainer}>
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
          <div className={classes?.imageContainer}>
            <NextImage className={classes.image} {...image} />
          </div>
        )}
      </div>
    </div>
  </div>
);

export default Hero;
