import React from "react";

const FooterPage = () => {
  return (
    <footer className="mt-10 border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:text-left">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
          <span className="font-bold text-emerald-600">বাজার দর</span> —
          প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400 sm:text-right">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
