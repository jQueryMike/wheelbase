const fetchData = async () => {
  const CONTENT_API_URL = `${process.env.API_URL}/umbraco/delivery/api/v2/content?fetch=descendants:${process.env.API_ROOT_NODE_GUID}`;
  try {
    const pagesResponse = await fetch(`${CONTENT_API_URL}`, {
      headers: { 'Start-Item': process.env.API_ROOT_NODE_GUID },
    });
    const pagesData = await pagesResponse.json();

    return {
      theme: pagesData.items.find((page) => page.contentType === 'theme').properties,
      globalConfig: pagesData.items.find((page) => page.contentType === 'globalConfig')?.properties,
      pages: pagesData.items.filter((page) => ['homePage', 'standardPage'].includes(page.contentType)),
    };
  } catch (error) {
    console.error('Something went wrong while trying to fetch the data.');
    console.error(error);
    return null;
  }
};

export default fetchData;
