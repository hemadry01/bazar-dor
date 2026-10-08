import Link from 'next/link';
import React from 'react';

const UserInfo = () => {
    return (
      <div className="flex gap-2 items-baseline">
        <Link href={"/sign-in"}>
             <button className="hover:text-green-700 cursor-pointer">সাইন ইন</button>
        </Link>
        <Link href={"/sign-up"}>
            <button className="btn bg-green-700 text-white hover:bg-green-900 cursor-pointer">
            সাইন আপ
            </button>
        </Link>
      </div>
    );
};

export default UserInfo;