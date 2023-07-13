/* eslint-disable react/no-danger */
import DOMPurify from 'dompurify';

export interface ContentProps {
  content?: string;
  className?: string;
}

const Content = ({ className, content }: ContentProps) => {
  if (!content) return null;

  const sanitizedContent = () => ({
    __html: DOMPurify.sanitize(content),
  });

  return <div className={className} dangerouslySetInnerHTML={sanitizedContent()} />;
};

export default Content;
