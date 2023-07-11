import Block from '@interfaces/Block';

export interface BlockListProps {
  blocks: Block[];
}

const BlockList = async ({ blocks = [] }: BlockListProps) => {
  const blockList = blocks.map(async (block) => {
    const DynamicBlock = (await import(`../../blocks/${block.name}/${block.name}`)).default;

    return <DynamicBlock key={block.id} {...block} />;
  });

  return blockList;
};

export default BlockList;
