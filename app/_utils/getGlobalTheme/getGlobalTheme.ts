import { ROOT_URL } from '@utils/constants';

/**
 * Get global theme from Umbraco
 * @returns Global theme
 */
// eslint-disable-next-line import/prefer-default-export
export async function getGlobalTheme() {
  const themeTags = process.env.ENVIRONMENT_NAME !== 'local' ? [`theme`] : [];
  return fetch(`${ROOT_URL}/theme`, { next: { tags: themeTags } }).then((res) => res.json());
}
