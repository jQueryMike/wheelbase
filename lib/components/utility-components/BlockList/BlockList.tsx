import Block from '@interfaces/Block';

export interface BlockListProps {
  blocks: Block[];
}

const BlockList = ({ blocks = [] }: BlockListProps) => {
  const blockList = blocks.map((block) => {
    const DynamicBlock = require(`../../blocks/${block.name}/${block.name}`).default;
    return <DynamicBlock key={block.id} {...block} />;
  });

  return blockList;
};

export default BlockList;
