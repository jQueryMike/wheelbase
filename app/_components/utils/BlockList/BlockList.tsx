import { IS_PRODUCTION } from "@utils/constants";
import { BlockListProps } from "./BlockList.types";

async function getAtom(name: string) {
  try {
    return await require(`../../atoms/${name}/${name}`).default;
  } catch (e) {
    if (IS_PRODUCTION) console.warn(`Atom ${name} not found`);
  }
}

/**
 * Get the molecule component by name
 * @param name Block name
 * @returns Block
 */
async function getMolecule(name: string) {
  try {
    return await require(`../../molecules/${name}/${name}`).default;
  } catch (e) {
    if (IS_PRODUCTION) console.warn(`Molecule ${name} not found`);
  }
}

/**
 * Get the organism component by name
 * @param name Block name
 * @returns Block
 */
async function getOrganism(name: string) {
  try {
    return await require(`../../organisms/${name}/${name}`).default;
  } catch (e) {
    if (IS_PRODUCTION) console.warn(`Organism ${name} not found`);
  }
}

/**
 * Get the block component by name
 * @param name Block name
 * @returns Block
 */
async function getBlock(name: string) {
  return await Promise.any([
    getAtom(name),
    getMolecule(name),
    getOrganism(name),
  ]);
}

const BlockList = async ({ blocks = [] }: BlockListProps) => {
  const blockList = blocks.map(async ({ name, id, ...props }) => {
    const DynamicBlock = await getBlock(name);
    return DynamicBlock ? (
      <DynamicBlock key={id} {...props} />
    ) : (
      <pre>{JSON.stringify(props, null, 2)}</pre>
    );
  });

  return blockList;
};

export default BlockList;
