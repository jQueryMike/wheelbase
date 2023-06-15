export async function generateStaticParams() {
  const res = await fetch(`${process.env.API_URL}/api/routes`);
  const paths = await res.json();

  return paths;
}

async function getPage(params: { slug: string }) {
  const res = await fetch(`${process.env.API_URL}/${params.slug}`, { next: { revalidate: 600 } });
  const page = await res.json();

  return page;
}

const DynamicPage = async ({ params }: any) => {
  const page = await getPage(params);

  return <div>{page.content.heroTitle}</div>;
};
export default DynamicPage;
