import { ROOT_URL } from '@utils/constants';

/**
 * Get global config from Umbraco
 * @returns Global config
 */
export async function getGlobalConfig() {
  const globalConfigTags = process.env.ENVIRONMENT_NAME !== 'local' ? [`global-config`] : [];
  return fetch(`${ROOT_URL}/global-config?expand=all`, {
    next: { tags: globalConfigTags },
  }).then((res) => res.json());
}
