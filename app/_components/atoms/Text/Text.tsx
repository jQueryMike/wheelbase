/* eslint-disable react/no-danger */
import * as DOMPurify from 'isomorphic-dompurify';

import { TextProps } from './Text.types';
import fallbackStyle from './variants/1';

const Text = ({ classes = fallbackStyle.classes, text }: TextProps) => {
  if (!text) return null;

  return (
    <div className={classes?.root}>
      <div className={classes?.textContent} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }} />
    </div>
  );
};

export default Text;
