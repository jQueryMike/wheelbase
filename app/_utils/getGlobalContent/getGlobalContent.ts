import { CONTENT_API_URL } from '@utils/constants';

/**
 * Get global content from Umbraco
 * @returns Global content
 */
export async function getGlobalContent() {
  const sharedContentTags = process.env.ENVIRONMENT_NAME !== 'local' ? [`shared-content`] : [];
  const sharedContentUrl = `${CONTENT_API_URL}/item/shared-content`;
  return fetch(`${sharedContentUrl}`, {
    next: { tags: sharedContentTags },
  }).then((res) => res.json());
}
