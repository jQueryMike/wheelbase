import { BlockList } from '@components/utility-components/BlockList';
import Block from '@interfaces/Block';

import { Headings, HeadingsProps } from '../Headings';
import { Image, ImageProps } from '../Image';

export type ImageWithContentClasses<T> = {
  [key in
    | 'root'
    | 'rootInner'
    | 'contentContainer'
    | 'headingsContainer'
    | 'contentAreaContainer'
    | 'imageContainer']?: T;
};

export interface ImageWithContentProps {
  classes?: ImageWithContentClasses<string>;
  image?: ImageProps;
  headings?: HeadingsProps;
  contentArea?: Block[];
}

const ImageWithContent = ({ classes = {}, image, contentArea = [], headings }: ImageWithContentProps) => (
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
          <Image {...image} />
        </div>
      )}
    </div>
  </div>
);

export default ImageWithContent;
