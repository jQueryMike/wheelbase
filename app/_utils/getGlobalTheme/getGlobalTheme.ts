import { ROOT_URL } from "@utils/constants";

/**
 * Get global theme from Umbraco
 * @returns Global theme
 */
export async function getGlobalTheme() {
  const themeTags = process.env.ENVIRONMENT_NAME !== "local" ? [`theme`] : [];
  return await fetch(`${ROOT_URL}/theme`, { next: { tags: themeTags } }).then(
    (res) => res.json()
  );
}
