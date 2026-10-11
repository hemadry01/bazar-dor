import NotFound from '@/app/not-found';
import CategoriesCard from '@/components/CategoriesCard';
import { IProduct } from '@/type/Product';
import React from 'react';

interface ICategoryProps {
  params: Promise<{
    slug: string;
  }>;
}

const CategoriesPage = async ({ params }: ICategoryProps) => {
    
    const {slug} =await params 
    //console.log(slug);

    const res = await fetch(
      `https://openapi.programming-hero.com/api/bazardor/products?category=${slug}`,
      {
        next: { revalidate: 3600 },
      },
    );
    const productData:IProduct[] =await res.json();
    console.log("chal",productData);
    if(!productData){
      NotFound();
    }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 ">
      <div className="w-full rounded-2xl bg-white px-6 py-5 mb-4  shadow-md">
        <h2 className="text-2xl font-bold">{slug}</h2>

        <p className="mt-2 text-sm">
          {productData.length.toLocaleString("bn-BD")} টি পণ্যের আজকের দাম ও
          পরিবর্তন
        </p>
      </div>
      <div className="mx-auto mb-4 mt-4 flex w-full items-center justify-end rounded-2xl bg-white px-6 py-5 shadow-md">
        <select
          defaultValue="Pick a color"
          className="select w-32 px-2 py-1 text-sm items-center"
        >
          <option disabled={true}>Short by</option>
          <option value={"today"}>ডিফল্ট</option>
          <option value={"today"}>বেশি থেকে কম</option>
          <option value={"today"}>কম থেকে বেশি</option>
        </select>
      </div>
      <p className="mt-2 text-sm">
        মোট {productData.length.toLocaleString("bn-BD")} টি পণ্যের দেখানো হচ্ছে
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {productData.map((product) => (
          <CategoriesCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default CategoriesPage;