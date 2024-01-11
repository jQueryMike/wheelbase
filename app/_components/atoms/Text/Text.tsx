/* eslint-disable react/no-danger */
import * as DOMPurify from 'isomorphic-dompurify';

import { TextProps } from './Text.types';

const Text = ({ classes = {}, text }: TextProps) => {
  if (!text) return null;

  return (
    <div className={classes.root}>
      <div className={classes.textContent} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }} />
    </div>
  );
};

export default Text;
