import { BlockList } from '@components/utility-components/BlockList';
import Block from '@interfaces/Block';
import cn from 'classnames';

import { Headings, HeadingsProps } from '../Headings';
import { Image } from '../Image';
import { TextContent } from '../TextContent';

export type ContentBlockClasses<T> = {
  [key in
    | 'root'
    | 'contentBodyImage'
    | 'contentBodyText'
    | 'contentWrapper'
    | 'headingsContainer'
    | 'contentAreaContainer'
    | 'contentArea1Container'
    | 'contentArea2Container'
    | 'contentImg'
    | 'contentSubImg'
    | 'contentBodyCta'
    | 'bodyContent']?: T;
};

export interface ContentBlockProps {
  classes?: ContentBlockClasses<string>;
  contentImage?: any;
  contentSubImage?: any;
  contentBody?: any;
  headings?: HeadingsProps;
  contentArea1?: Block[];
  contentArea2?: Block[];
  bodyContent?: string;
}

const ContentBlock = ({
  classes = {},
  contentBody,
  contentImage,
  contentSubImage,
  contentArea1,
  contentArea2,
  bodyContent,
  headings,
}: ContentBlockProps) => (
  <div className={classes.root}>
    <div className={classes.contentBodyText}>
      <div className={classes.contentWrapper}>
        {headings && (
          <div className={classes.headingsContainer}>
            <Headings {...headings} />
          </div>
        )}
        <div className={classes.bodyContent}>
          <TextContent content={bodyContent} />
        </div>
        {contentArea1 && contentArea1?.length > 0 && (
          <div className={cn(classes.contentAreaContainer, classes.contentArea1Container)}>
            <BlockList blocks={contentArea1} />
          </div>
        )}
        {contentArea2 && contentArea2?.length > 0 && (
          <div className={cn(classes.contentAreaContainer, classes.contentArea2Container)}>
            <BlockList blocks={contentArea2} />
          </div>
        )}
      </div>
    </div>
    {contentImage && (
      <div className={classes?.contentBodyImage}>
        <Image className={classes?.contentImg} {...contentImage} />
        <Image className={classes?.contentSubImg} {...contentSubImage} />
      </div>
    )}
  </div>
);

export default ContentBlock;
