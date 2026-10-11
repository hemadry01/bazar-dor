import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#F0F5F0] px-4 py-16">
      {" "}
      <div className="w-full max-w-lg text-center">
        {" "}
        <h1 className="text-8xl font-extrabold tracking-tight text-green-700 sm:text-9xl">
          {" "}
          404{" "}
        </h1>
        <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
          {" "}
          পেজটি খুঁজে পাওয়া যায়নি!{" "}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
          {" "}
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি। পেজটির ঠিকানা পরিবর্তন
          হয়ে থাকতে পারে অথবা এটি সরিয়ে ফেলা হয়েছে।{" "}
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-800"
        >
          {" "}
          হোম পেজে ফিরে যান{" "}
        </Link>{" "}
      </div>{" "}
    </main>
  );
};

export default NotFound;