import { ICategory } from '@/type/Category';
import Link from 'next/link';
import React from 'react';



const Navbar = async() => {
    let categoryData:ICategory[]=[];
    
      try {
        const res = await fetch(
          "https://openapi.programming-hero.com/api/bazardor/categories",
          {
            next: { revalidate: 3600 },
          },
        );

        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }

        categoryData = await res.json();
      } catch (error) {
        console.error("Error fetching categories:", error);
      }


    return (
      <div className="flex max-w-6xl mx-auto gap-4 mt-4 items-center justify-center">
        {categoryData.map((item, index) => (
          <Link key={index} href={`/categories/${item.slug}`}>
            <div>
              {item.icon}
              {item.nameBn}
            </div>
          </Link>
        ))}
      </div>
    );
};

export default Navbar;