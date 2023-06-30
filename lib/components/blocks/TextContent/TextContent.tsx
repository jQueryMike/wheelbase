/* eslint-disable react/no-danger */
import * as DOMPurify from 'isomorphic-dompurify';

export type TextContentClasses<T> = {
  [key in 'root' | 'textContent']?: T;
};

export interface TextContentProps {
  classes?: TextContentClasses<string>;
  content?: string;
}

const TextContent = ({ classes = {}, content }: TextContentProps) => {
  if (!content) return null;

  return (
    <div className={classes.root}>
      <div className={classes.textContent} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />
    </div>
  );
};

export default TextContent;
