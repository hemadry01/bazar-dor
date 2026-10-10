import React from "react";
import HeaderDate from "./HeaderData";
import Link from "next/link";
import Banner from "@/assets/bazar-hero.png";
import Image from "next/image";

const HeroSectionPage = () => {
  return (
    <section className="px-4 py-8 md:py-12">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-8 rounded-2xl bg-white p-6 sm:p-10 md:flex-row md:p-12">
        {/* Content */}
        <div className="w-full md:w-3/5">
          <div className="mb-5">
            <HeaderDate />
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 px-4 py-2 text-sm font-medium text-green-700">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            আপনার প্রতিদিনের বাজার আপডেট
          </span>

          <h1 className="mt-5 text-3xl font-extrabold leading-snug tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            আজকের বাজারের দাম <span className="text-green-600">এক নজরে</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-green-700"
            >
              সব পণ্য দেখুন
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>

        {/* Banner Image */}
        <div className="flex w-full items-center justify-center md:w-2/5">
          <Image
            src={Banner}
            alt="আজকের বাজারের দাম"
            priority
            className="h-auto w-full max-w-[280px] object-contain transition duration-500 hover:scale-105 sm:max-w-[340px] lg:max-w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionPage;
