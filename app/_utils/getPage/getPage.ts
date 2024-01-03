import { ROOT_URL } from "@utils/constants";

export default async function getPage(slug: string[]) {
  const pagesTags =
    process.env.ENVIRONMENT_NAME !== "local"
      ? [`theme`, `page-${slug.join("-")}`]
      : [];
  return await fetch(`${ROOT_URL}/${slug.join("/")}`, {
    next: { tags: pagesTags },
  }).then((res) => res.json());
}
