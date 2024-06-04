import { ROOT_URL_V2 } from '@utils/constants';

export default async function getPage(slug: string[]) {
  const pagesTags = process.env.ENVIRONMENT_NAME !== 'local' ? [`theme`, `page-${slug.join('-')}`] : [];
  return fetch(`${ROOT_URL_V2}&filter=name:${slug[0]}`, { next: { tags: pagesTags }, }).then((res) => res.json());

}
