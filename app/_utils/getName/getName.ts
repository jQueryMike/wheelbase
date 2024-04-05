/**
 * Sanitise name of block
 * @param name Possibly incorrectly formatted name
 * @returns lowercase name without trailing numbers
 */
function getName(name: string) {
  return name.replace(/(\d+|Atom|Molecule)$/, '');
}

export default getName;
