import Block from '@interfaces/Block';

// import { ContactForm } from '../../blocks/ContactForm';

export interface BlockListProps {
  blocks: Block[];
}

const BlockList = ({ blocks = [] }: BlockListProps) => {
  console.log(blocks);
  const blockList = blocks.map((block) => {
    // if (block.name === 'ContactForm') return <ContactForm {...block} key={block.id} />;
    const DynamicBlock = require(`../../blocks/${block.name}/${block.name}`).default;
    return DynamicBlock ? <DynamicBlock key={block.id} {...block} /> : null;
  });

  return blockList;
};

export default BlockList;
