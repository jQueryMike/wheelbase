import { SHARED_CONTENT_URL } from '@utils/constants';

export default async function getSharedContent() {
  const sharedContentTags = process.env.ENVIRONMENT_NAME !== 'local' ? [`shared-content`] : [];
  return fetch(SHARED_CONTENT_URL, {
    next: { tags: sharedContentTags },
  }).then((res) => res.json());
}
