import Block from '@interfaces/Block';
import NextImage from 'next/image';

import { BlockList } from '../../utility-components/BlockList';
import { Headings, HeadingsProps } from '../Headings';
import { ImageProps } from '../Image';

export type ImageWithContentClasses<T> = {
  [key in
    | 'root'
    | 'rootInner'
    | 'contentContainer'
    | 'headingsContainer'
    | 'contentAreaContainer'
    | 'imageContainer'
    | 'image']?: T;
};

export interface ImageWithContentProps {
  classes?: ImageWithContentClasses<string>;
  image?: ImageProps;
  headings?: HeadingsProps;
  contentArea?: Block[];
}

const ImageWithContent = ({ classes = {}, image, contentArea = [], headings }: ImageWithContentProps) => (
  <div className="p-4 py-10 md:p-6 md:py-16 lg:py-20 xl:py-24">
    <div className="container mx-auto">
      <div className={classes.root}>
        <div className={classes.rootInner}>
          <div className={classes.contentContainer}>
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
  </div>
);

export default ImageWithContent;
