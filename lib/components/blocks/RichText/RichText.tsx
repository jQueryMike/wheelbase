/* eslint-disable react/no-danger */
import Block from '@interfaces/Block';
import cn from 'classnames';
import DOMPurify from 'isomorphic-dompurify';

export interface RichTextProps extends Block {
  className?: string;
  content?: string;
}

const RichText = ({ className, content }: RichTextProps) => {
  if (!content) return null;

  const sanitizedContent = () => ({
    __html: DOMPurify.sanitize(content),
  });

  return <div className={cn('copy', className)} dangerouslySetInnerHTML={sanitizedContent()} />;
};

export default RichText;
