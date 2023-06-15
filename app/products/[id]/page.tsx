/* eslint-disable react/no-array-index-key */
import NextImage from 'next/image';
import NextLink from 'next/link';

export async function generateStaticParams() {
  const res = await fetch(`${process.env.API_URL}/products`);
  const body = await res.json();

  return body.products.map((product: any) => product.id);
}

async function getProduct(params: { id: string }) {
  const res = await fetch(`${process.env.API_URL}/products/${params.id}`, {
    next: { tags: [`product-${params.id}`] },
  });
  const product = await res.json();

  return product;
}

const DynamicPage = async ({ params }: any) => {
  const product = await getProduct(params);

  const goldStars = new Array(Math.floor(product.rating * 0.9)).fill(0);
  const grayStars = new Array(5 - goldStars.length).fill(0);

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 p-10">
      <div className="container rounded-xl bg-white shadow-sm">
        <div className="flex h-12 items-center justify-between px-6 text-sm">
          <div>
            {product.id > 1 && (
              <NextLink className="text-gray-500 hover:text-gray-900" href={`/${product.id - 1}`}>
                <i className="fa-solid fa-arrow-left mr-2" />
                Previous
              </NextLink>
            )}
          </div>
          <div>
            {product.id < 30 && (
              <NextLink className="text-gray-500 hover:text-gray-900" href={`/${product.id + 1}`}>
                Next
                <i className="fa-solid fa-arrow-right ml-2" />
              </NextLink>
            )}
          </div>
        </div>
        <div className="h-[1px] bg-gray-200 opacity-50" />
        <div className="p-10">
          <h2 className="text-lg font-semibold uppercase leading-tight tracking-tight text-blue-500">
            {product.brand}
          </h2>
          <h1 className="text-5xl font-bold text-black">{product.title}</h1>
          <div className="my-10 h-[1px] bg-gray-200 opacity-50" />
          <div className="grid grid-cols-6 gap-10">
            <div className="col-span-2">
              <NextImage src={product.images[0]} alt={product.title} width="500" height="264" className="rounded-lg" />
            </div>
            <div className="col-span-4">
              <div className="flex items-center justify-between">
                <div className="text-2xl">
                  {goldStars.map((_value: any, index: number) => (
                    <i key={`gold_${index}`} className="fa-solid fa-star text-amber-500" />
                  ))}
                  {grayStars.map((_value: any, index: number) => (
                    <i key={`gray_${index}`} className="fa-solid fa-star text-gray-200" />
                  ))}
                </div>

                <div className="flex items-center space-x-10">
                  <div className="text-4xl font-bold text-black">£{product.price.toFixed(2)}</div>
                  <div className="flex flex-col items-center justify-center space-y-2">
                    {product.stock > 20 ? (
                      <>
                        <div className="flex h-16 cursor-pointer items-center justify-center rounded-lg bg-blue-500 px-8 text-2xl font-bold uppercase text-white hover:bg-blue-400">
                          Buy now
                        </div>
                        <div className="space-x-3 text-base font-semibold text-green-600">
                          <i className="fa-solid fa-circle-check" />
                          <span>{product.stock} in stock</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex h-16 items-center justify-center rounded-lg bg-gray-200 px-8 text-2xl font-bold uppercase text-gray-50">
                          Buy now
                        </div>
                        <div className="space-x-3 text-base font-semibold text-red-600">
                          <i className="fa-solid fa-circle-xmark" />
                          <span>Out of stock</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-10 rounded-lg bg-gray-100 p-8 text-lg text-gray-700">
                <p>{product.description}</p>
                <p className="mt-6">
                  Category:{' '}
                  <span className="cursor-pointer font-semibold text-blue-500 hover:text-blue-500 hover:underline">
                    {product.category}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DynamicPage;
