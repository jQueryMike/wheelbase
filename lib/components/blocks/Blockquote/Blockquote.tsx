import Block from '@interfaces/Block';
import cn from 'classnames';

import { BlockList } from '../../utility-components/BlockList';
import { Headings, HeadingsProps } from '../Headings';

export type BlockquoteClasses<T> = {
  [key in
    | 'root'
    | 'container'
    | 'headingsContainer'
    | 'contentAreaContainer'
    | 'contentArea1Container'
    | 'contentArea2Container'
    | 'blockquoteContainer'
    | 'blockquote'
    | 'blockquoteName'
    | 'blockquoteText']?: T;
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
  contentArea1 = [],
  contentArea2 = [],
}: BlockquoteProps) => (
  <div className={classes.root}>
    {headings && (
      <div className={classes.headingsContainer}>
        <Headings {...headings} />
      </div>
    )}
    {contentArea1?.length > 0 && (
      <div className={cn(classes.contentAreaContainer, classes.contentArea1Container)}>
        <BlockList blocks={contentArea1} />
      </div>
    )}
    <figure className={cn(classes.blockquoteContainer)}>
      <blockquote className={classes.blockquote}>
        {blockquoteText && <p className={classes.blockquoteText}>{blockquoteText}</p>}
      </blockquote>
      {blockquoteName && <p className={classes.blockquoteName}>{blockquoteName}</p>}
    </figure>
    {contentArea2?.length > 0 && (
      <div className={cn(classes.contentAreaContainer, classes.contentArea2Container)}>
        <BlockList blocks={contentArea2} />
      </div>
    )}
  </div>
);

export default Blockquote;
