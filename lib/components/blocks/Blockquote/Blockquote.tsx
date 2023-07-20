import { BlockList } from '@components/utility-components/BlockList';
import Block from '@interfaces/Block';
import cn from 'classnames';

import { Headings, HeadingsProps } from '../Headings';

export type BlockquoteClasses<T> = {
  [key in
    | 'root'
    | 'container'
    | 'headingsContainer'
    | 'textContainer'
    | 'contentAreaContainer'
    | 'contentArea1Container'
    | 'contentArea2Container'
    | 'blockquoteColour'
    | 'blockquoteContainer'
    | 'blockquoteArrow']?: T;
};

export interface BlockquoteProps {
  classes?: BlockquoteClasses<string>;
  headings?: HeadingsProps;
  contentArea1?: Block[];
  contentArea2?: Block[];
  blockquoteName: string;
  blockquoteText: string;
}

const Blockquote = ({
  blockquoteName,
  blockquoteText,
  headings,
  classes = {},
  contentArea1,
  contentArea2,
}: BlockquoteProps) => {
  return (
    <div className={classes.root}>
      {headings && (
        <div className={classes.headingsContainer}>
          <Headings {...headings} />
        </div>
      )}
      {contentArea1?.length && (
        <div className={cn(classes.contentAreaContainer, classes.contentArea1Container)}>
          <BlockList blocks={contentArea1} />
        </div>
      )}
      {contentArea2?.length && (
        <div className={cn(classes.contentAreaContainer, classes.contentArea2Container)}>
          <BlockList blocks={contentArea2} />
        </div>
      )}
      <figure className={cn(classes.container, classes.blockquoteColour)}>
        <blockquote className={classes.blockquoteContainer}>
          {blockquoteName && <span className={classes.headingsContainer}>{blockquoteName}</span>}
          {blockquoteText && <p className={classes.textContainer}>{blockquoteText}</p>}
        </blockquote>
        <div className={cn(classes.blockquoteArrow, classes.blockquoteColour)}></div>
      </figure>
    </div>
  );
};

export default Blockquote;
