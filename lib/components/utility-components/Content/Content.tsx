/* eslint-disable react/no-danger */
import cn from 'classnames';
import * as DOMPurify from 'isomorphic-dompurify';

export interface ContentProps {
  content?: string;
  className?: string;
}

const Content = ({ className, content }: ContentProps) => {
  if (!content) return null;

  const sanitizedContent = () => ({
    __html: DOMPurify.sanitize(content),
  });

  return <div className={cn('copy', className)} dangerouslySetInnerHTML={sanitizedContent()} />;
};

export default Content;
