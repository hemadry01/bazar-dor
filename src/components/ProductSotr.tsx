"use client"
import { IProduct } from '@/type/Product';
import React, { useState } from 'react';
import CategoriesCard from './CategoriesCard';

interface ProductSortProps {
  products: IProduct[];
}

const ProductSotr = ({ products }: ProductSortProps) => {
  const [sortBy, setSortBy] = useState<'default' | 'high' | 'low'>('default');

  const sortedProducts = [...products];

  if (sortBy === 'high') {
    sortedProducts.sort((a, b) => b.today - a.today);
  }

  if (sortBy === 'low') {
    sortedProducts.sort((a, b) => a.today - b.today);
  }

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "default" | "high" | "low")
          }
          className="select w-40 px-2 py-1 text-sm"
        >
          <option value="default">ডিফল্ট</option>
          <option value="high">বেশি থেকে কম</option>
          <option value="low">কম থেকে বেশি</option>
        </select>
      </div>

      <p className="mb-4 text-sm">
        মোট {sortedProducts.length.toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <CategoriesCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSotr;