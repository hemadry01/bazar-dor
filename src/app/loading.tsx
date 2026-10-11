import React from "react";
const LoadingPage = () => {
  return (
    <main className="min-h-screen animate-pulse bg-[#F0F5F0] px-4 py-8">
      {" "}
      <div className="mx-auto max-w-6xl">
        {" "}
        {/* Header Skeleton */}{" "}
        <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
          {" "}
          <div className="h-7 w-48 rounded-lg bg-gray-200" />{" "}
          <div className="mt-3 h-4 w-64 max-w-full rounded bg-gray-200" />{" "}
        </div>
        {/* Filter Skeleton */}{" "}
        <div className="mb-6 flex justify-end">
          {" "}
          <div className="h-10 w-36 rounded-lg bg-gray-200" />{" "}
        </div>
        {/* Product Grid Skeleton */}{" "}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {" "}
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              {" "}
              <div className="flex items-center gap-4">
                {" "}
                <div className="h-14 w-14 shrink-0 rounded-xl bg-gray-200" />
                <div className="flex-1 space-y-3">
                  {" "}
                  <div className="h-4 w-3/4 rounded bg-gray-200" />{" "}
                  <div className="h-6 w-1/2 rounded bg-gray-200" />{" "}
                </div>{" "}
              </div>
              <div className="my-5 border-t border-gray-100" />
              <div className="flex justify-between">
                {" "}
                <div className="h-4 w-20 rounded bg-gray-200" />{" "}
                <div className="h-4 w-16 rounded bg-gray-200" />{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>
        <p className="mt-8 text-center text-sm text-gray-500">
          {" "}
          পণ্যের তথ্য লোড হচ্ছে...{" "}
        </p>{" "}
      </div>{" "}
    </main>
  );
};

export default LoadingPage;