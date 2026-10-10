import { IProduct } from '@/type/Product';
import React from 'react';

interface IProductPromise {
  product: IProduct;
}

const DroppedPrice = ({product}:IProductPromise) => {
    return (
      <div className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-900">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-2xl dark:bg-red-950">
            {product.categoryIcon}
          </span>

          <div className="flex flex-1 flex-col gap-1">
            <span className="text-base font-semibold text-gray-800 dark:text-white">
              {product.nameBn}
            </span>

            <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {product.today} টাকা
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 dark:border-gray-800">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            প্রতি {product.unit}
          </span>

          <span className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-600 dark:bg-green-950 dark:text-green-400">
            ⏷{Math.abs(Number(product.change?.pct))}%
          </span>
        </div>
      </div>
    );
};

export default DroppedPrice;