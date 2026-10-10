import { IProduct } from '@/type/Product';
import React from 'react';
import ProductAlll from './ProductAlll';

const AllProduct = async() => {

      let productData: IProduct[] = [];
    
      try {
        const res = await fetch(
          "https://openapi.programming-hero.com/api/bazardor/products",
          {
            next: { revalidate: 3600 },
          },
        );
    
        if (!res.ok) {
          throw new Error("Faild to fatch data");
        }
    
        productData = await res.json();
        console.log("Product", productData);
      } catch (error) {
        console.log("Error fetching Product:", error);
      }

    return (
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div>
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                সব পণ্য
              </h2>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                মোট {productData.length.toLocaleString("bn-BD")} টি পণ্য দেখানো
                হচ্ছে
              </p>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productData.map((product) => (
            <ProductAlll key={product.id} product={product} />
          ))}
        </div>
      </section>
    );
};

export default AllProduct;