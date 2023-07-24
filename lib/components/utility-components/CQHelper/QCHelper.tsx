import { useEffect, useState } from 'react';

const CQHelper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => setLoading(false), [setLoading]);

  if (loading) return null;

  return (
    <div className="fixed flex h-6 w-full justify-end gap-1 text-[10px] font-semibold">
      <div className="flex h-6 w-10 items-center justify-center border border-gray-200 bg-white p-1">
        <div className="block sm:hidden">XS</div>
        <div className="hidden sm:block md:hidden">SM</div>
        <div className="hidden md:block lg:hidden">MD</div>
        <div className="hidden lg:block xl:hidden">LG</div>
        <div className="hidden xl:block">XL</div>
      </div>
      <div className="flex h-6 w-10 items-center justify-center border border-gray-200 bg-white p-1">
        <div className="block @sm:hidden">@XS</div>
        <div className="hidden @sm:block @md:hidden">@SM</div>
        <div className="hidden @md:block @lg:hidden">@MD</div>
        <div className="hidden @lg:block @xl:hidden">@LG</div>
        <div className="hidden @xl:block @2xl:hidden">@XL</div>
        <div className="hidden @2xl:block @3xl:hidden">@2XL</div>
        <div className="hidden @3xl:block @4xl:hidden">@3XL</div>
        <div className="hidden @4xl:block @5xl:hidden">@4XL</div>
        <div className="hidden @5xl:block @6xl:hidden">@5XL</div>
        <div className="hidden @6xl:block @7xl:hidden">@6XL</div>
        <div className="hidden @7xl:block">@7XL</div>
      </div>
    </div>
  );
};

export default CQHelper;
