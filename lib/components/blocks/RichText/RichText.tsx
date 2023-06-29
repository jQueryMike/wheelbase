import Block from '@interfaces/Block';

import { Content } from '../../utility-components/Content';

export interface RichTextProps extends Block {
  content?: string;
}

const RichText = ({ content }: RichTextProps) => <Content content={content} />;

export default RichText;
