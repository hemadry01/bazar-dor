import SingleProduct from '@/components/SingleProduct';
import { IProduct } from '@/type/Product';
import React from 'react';

interface IProductProps{
    params:Promise<{
        productId:string
    }>
}

const SingleProductpage = async({params}:IProductProps) => {
    const{productId}=await params;
    console.log("productId",productId);

    const res = await fetch(
      `https://openapi.programming-hero.com/api/bazardor/products/${productId}`,{
        next:{revalidate:3600}
      }
    );

    const product:IProduct=await res.json();

    console.log("singleProduct", product);


    return (
      <div className=" items-center justify-center mx-auto rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-900">
        {<SingleProduct product={product} />}
      </div>
    );
};

export default SingleProductpage;