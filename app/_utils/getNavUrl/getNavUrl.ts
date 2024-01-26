/**
 * Get Navigation URL
 * @returns Navigation URL
 */
export async function getNavUrl() {
  const navUrl = `${process.env.API_URL}/api/navigation/${process.env.API_ROOT_NODE_GUID}?maxLevel=3`;
  return await fetch(navUrl).then((res) => res.json());
}
