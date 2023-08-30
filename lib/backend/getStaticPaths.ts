const EXCLUDED_PATHS = ['/', '/theme/', '/global-config/'];
const CONTENT_API_URL = `${process.env.API_URL!}/umbraco/delivery/api/v1/content`;

const getStaticPaths = async () => {
  const headers = { 'Start-Item': process.env.API_ROOT_NODE_GUID! };
  const res = await fetch(CONTENT_API_URL, { headers });
  const data = await res.json();
  const paths = data.items
    .map((item: any) => item.route.path.replace('/home', ''))
    .filter((path: string) => !EXCLUDED_PATHS.includes(path));

  return { paths, fallback: true };
};

export default getStaticPaths;
