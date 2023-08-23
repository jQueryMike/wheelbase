import Block from '@interfaces/Block';
import Image from 'next/image';

import { BlockList } from '../../utility-components/BlockList';
import { Headings, HeadingsProps } from '../Headings';
import { ImageProps } from '../Image';

export type HeroClasses<T> = {
  [key in
    | 'root'
    | 'rootInner'
    | 'container'
    | 'heroContentContainer'
    | 'headingsContainer'
    | 'contentAreaContainer'
    | 'imageContainer'
    | 'image']?: T;
};

export interface HeroProps {
  classes?: HeroClasses<string>;
  headings?: HeadingsProps;
  contentArea?: Block[];
  image?: ImageProps;
}

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
            <Image className={classes?.image} {...image} />
          </div>
        )}
      </div>
    </div>
  </div>
);

export default Hero;
