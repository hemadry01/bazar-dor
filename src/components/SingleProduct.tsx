import { IProduct } from '@/type/Product';
import React from 'react';

interface IProductpromise {
  product: IProduct;
}

const SingleProduct = ({ product }: IProductpromise) => {
  console.log("product devision", product.markets);
  
  //const price = Math.abs(Number(product.today - product.yesterday));
  // const minPrice = Math.min(...product.markets.map((item) => item.min));
  // const maxPrice = Math.max(...product.markets.map((item) => item.max));
  const markets = product.markets ?? [];
  const minPrice = markets.length ? Math.min(...markets.map((item) => item.min)) : 0;
  const maxPrice = markets.length ? Math.max(...markets.map((item) => item.max)): 0;
  const price = Math.abs(Number(product.today) - Number(product.yesterday));
  const avgPrice =product.markets.reduce((sum, item) => sum + (Number(item.min) + Number(item.max)) / 2,0) / product.markets.length;
  
  return (
    <div className="justify-center items-center">
      <div className="w-full rounded-2xl bg-white px-6 py-5 mb-4  shadow-md flex">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-2xl dark:bg-red-950">
          {product.categoryIcon}
        </span>
        <div className="ml-2">
          <h2 className="text-2xl font-bold">{product.nameBn}</h2>

          <p className="mt-2 text-sm">
            প্রতি {product.unit}
            {product.categoryNameBn}
          </p>
          <p>
            গতকালের তুলনায় আজ দাম বেড়েছে · {price.toLocaleString("bn-BD")}{" "}
            টাকা
          </p>
        </div>
      </div>

      <div>
        <span className="text-3xl font-semibold ml-4">দামের সারসংক্ষেপ</span>

        <div className="flex gap-3">
          <div className="w-full rounded-2xl bg-white px-6 py-5 mb-4 mt-4  shadow-md flex">
            <div className="card w-96 bg-base-100 card-xs shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">
                  সর্বনিম্ন দাম
                </h2>
                <p className="text-green-600 text-xl">
                  {minPrice.toLocaleString("bn-BD")} টাকা
                </p>
                <p className="text-xl">সবচেয়ে কম দামের বাজার</p>
              </div>
            </div>
          </div>

          <div className="w-full rounded-2xl bg-white px-6 py-5 mb-4 mt-4  shadow-md flex">
            <div className="card w-96 bg-base-100 card-xs shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">
                  সর্বাধিক দাম
                </h2>
                <p className="text-red-600 text-xl">
                  {maxPrice.toLocaleString("bn-BD")} টাকা
                </p>
                <p className="text-xl">সবচেয়ে বেশি দামের বাজার</p>
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl bg-white px-6 py-5 mb-4 mt-4  shadow-md flex">
            <div className="card w-96 bg-base-100 card-xs shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">গড় দাম</h2>
                <p className="text-green-600 text-xl">
                  {avgPrice.toLocaleString("bn-BD")} টাকা
                </p>
                <p className="text-xl">প্রতি কেজি-এর হিসাবে</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <span className="font-semibold text-2xl mb-4">
          বাজারভিত্তিক আজকের দাম
        </span>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>বাজার</th>
              <th>বিভাগ</th>
              <th>সর্বনিম্ন</th>
              <th>সর্বাধিক</th>
              <th>গড়</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {product.markets.map((item, index) => {
              const avgPrice = (item.max + item.min) / 2;
              return (
                <tr key={index}>
                  <td>{item.market ?? "N/A"}</td>
                  <td>{item.division ?? "N/A"}</td>
                  <td>{item.min ?? item.min ?? "N/A"}</td>
                  <td>{item.max ?? item.max ?? "N/A"}</td>
                  <td>{avgPrice}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleProduct;