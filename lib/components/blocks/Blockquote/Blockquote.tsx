import { BlockList } from '@components/utility-components/BlockList';
import Block from '@interfaces/Block';
import cn from 'classnames';

import { Heading, HeadingProps, HeadingSize, HeadingTag } from '../Heading';
import { Subheading, SubheadingProps } from '../Subheading';

export type BlockquoteClasses<T> = {
  [key in
    | 'root'
    | 'container'
    | 'headingsContainer'
    | 'headingContainer'
    | 'subheadingContainer'
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
  heading?: HeadingProps;
  subheading?: SubheadingProps;
  contentArea1?: Block[];
  contentArea2?: Block[];
  blockquoteName: string;
  blockquoteText: string;
  children?: React.ReactNode;
}

const Blockquote = ({
  blockquoteName,
  blockquoteText,
  children,
  classes = {},
  heading,
  subheading,
  contentArea1,
  contentArea2,
}: BlockquoteProps) => {
  return (
    <div className={classes.root}>
      {(heading || subheading) && (
        <div className={classes.headingsContainer}>
          {heading && (
            <div className={classes.headingContainer}>
              <Heading tag={HeadingTag.H2} size={HeadingSize.Large} {...heading} />
            </div>
          )}
          {subheading && (
            <div className={classes.subheadingContainer}>
              <Subheading {...subheading} />
            </div>
          )}
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
          {blockquoteName && <span className={classes.headingContainer}>{blockquoteName}</span>}
          {blockquoteText && !children && <p className={classes.textContainer}>{blockquoteText}</p>}
          {children && !blockquoteText && <figcaption>{children}</figcaption>}
        </blockquote>
        <div className={cn(classes.blockquoteArrow, classes.blockquoteColour)}></div>
      </figure>
    </div>
  );
};

export default Blockquote;
