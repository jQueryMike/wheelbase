export async function generateStaticParams() {
  const res = await fetch(`${process.env.API_URL}/api/routes`);
  const paths = await res.json();

  return paths;
}

async function getPage(params: { slug: string[] }) {
  const tags = [`page-${params.slug.join('-')}`];
  const res = await fetch(`${process.env.API_URL}/${params.slug.join('/')}`, { next: { tags } });
  const page = await res.json();

  return page;
}

const DynamicPage = async ({ params }: any) => {
  const page = await getPage(params);

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 p-10">
      <div className="container rounded-xl bg-white shadow-sm">
        <div className="p-10">
          <h1 className="text-5xl font-bold text-black">{page.content.heroTitle}</h1>
        </div>
      </div>
    </div>
  );
};
export default DynamicPage;
