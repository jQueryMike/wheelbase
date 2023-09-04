const CONTENT_API_URL = `${process.env.API_URL}/umbraco/delivery/api/v1/content`;

const fetchData = async () => {
  try {
    const pagesResponse = await fetch(`${CONTENT_API_URL}`, {
      headers: { 'Start-Item': process.env.API_ROOT_NODE_GUID },
    });
    const pagesData = await pagesResponse.json();

    return {
      theme: pagesData.items.find((page) => page.name === 'Theme').properties,
      pages: pagesData.items,
    };
  } catch (error) {
    console.error('Something went wrong while trying to fetch the data.');
    console.error(error);
    return null;
  }
};

module.exports = fetchData;
