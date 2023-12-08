/* eslint-disable react/no-danger */
import * as DOMPurify from 'isomorphic-dompurify';

export type TextClasses<T> = {
  [key in 'root' | 'textContent']?: T;
};

export interface TextProps {
  classes?: TextClasses<string>;
  content?: string;
}

const Text = ({ classes = {}, content }: TextProps) => {
  if (!content) return null;

  return (
    <div className={classes.root}>
      <div className={classes.textContent} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />
    </div>
  );
};

export default Text;
