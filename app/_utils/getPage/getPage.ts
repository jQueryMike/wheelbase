import { ROOT_URL } from '@utils/constants';

export default async function getPage(slug: string[]) {
  const pagesTags = process.env.ENVIRONMENT_NAME !== 'local' ? [`theme`, `page-${slug.join('-')}`] : [];
  return fetch(`${ROOT_URL}/${slug.join('/')}?expand=all`, {
    next: { tags: pagesTags },
  }).then((res) => res.json());
}
