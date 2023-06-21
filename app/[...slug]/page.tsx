export async function generateStaticParams() {
  const headers = {'Start-Item': process.env.API_ROOT_NODE_GUID! };
  const res = await fetch(process.env.API_URL!, { headers });
  const body = await res.json();
  const paths = body.items.map((item:any)=>item.route.path);

  return paths;
}

async function getPage(params: { slug: string[] }) {
  const tags = [`${process.env.API_ROOT_NODE_PATH}-page-${params.slug.join('-')}`];
  const res = await fetch(`${process.env.API_URL}/item/${process.env.API_ROOT_NODE_PATH}/${params.slug.join('/')}`, { next: { tags } });
  const page = await res.json();

  return page;
}

const DynamicPage = async ({ params }: any) => {
  const page = await getPage(params);

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 p-10">
      <div className="container rounded-xl bg-white shadow-sm">
        <div className="p-10">
          <h1 className="text-5xl font-bold text-black">{page.properties.menuTitle}</h1>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;

