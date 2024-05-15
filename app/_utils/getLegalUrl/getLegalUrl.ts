/**
 * Get Legal URL
 * @returns Legal URL
 */
export async function getLegalUrl() {
    const legalUrl = `${process.env.API_URL}/api/legal/${process.env.API_ROOT_NODE_GUID}`;
    return fetch(legalUrl).then((res) => res.json());
  }
  