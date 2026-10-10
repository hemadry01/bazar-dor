import { IProduct } from "@/type/Product";
import React from "react";
import RisingProduct from "./RisingProduct";

const TodayPriceRising = async () => {
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
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-2xl shadow-sm dark:bg-red-950">
            🔺
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
              আজ দাম বেড়েছে
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              বাজারে দাম বৃদ্ধি পাওয়া পণ্যসমূহ
            </p>
          </div>
        </div>

        <span className="shrink-0 rounded-full border border-red-100 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 dark:border-red-900 dark:bg-red-950 dark:text-red-400">
          দাম বেড়েছে
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {productData
          .filter((product) => product.change?.dir === "up")
          .slice(0, 6)
          .map((product) => (
            <RisingProduct key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default TodayPriceRising;
