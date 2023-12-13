import Block from '@interfaces/Block';

// import { ContactForm } from '../../blocks/ContactForm';

export interface BlockListProps {
  blocks: Block[];
}

const BlockList = ({ blocks = [] }: BlockListProps) => {
  const blockList = blocks.map((block) => {
    // if (block.name === 'ContactForm') return <ContactForm {...block} key={block.id} />;
    let DynamicBlock;
    try {
      DynamicBlock = require(`../../blocks/${block.name}/${block.name}`).default;
    } catch (e) {
      console.warn(`Block ${block.name} not found`);
      DynamicBlock = (props: any) => <pre>{JSON.stringify(props, null, 2)}</pre>;
    }
    return DynamicBlock ? <DynamicBlock key={block.id} {...block} /> : null;
  });

  return blockList;
};

export default BlockList;
