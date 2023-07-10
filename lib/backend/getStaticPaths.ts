const getStaticPaths = async () => {
  const headers = { 'Start-Item': process.env.API_ROOT_NODE_GUID! };
  const res = await fetch(process.env.API_URL!, { headers });
  const data = await res.json();
  const paths = data.items
    .map((item: any) => item.route.path.replace('/home', ''))
    .filter((path: string) => path !== '/theme/');

  return paths;
};

export default getStaticPaths;
