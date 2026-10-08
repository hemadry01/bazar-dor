"use client"
import { signOut, useSession } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UserInfo = () => {

  const { data: session, isPending } = useSession();

  if (isPending) {
    return <p>Loading...</p>;
  }

  const user = session?.user
  const handleSignOut = async() =>{
    await signOut();
  }


    return (
      <div>
        {user ? (
          <div className="flex flex-col gap-2 items-center">
            <Link href={"/profile"}>
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                  <Image
                    alt="Tailwind-CSS-Avatar-component"
                    src={user?.image || "/default-avatar.png"}
                    width={45}
                    height={45}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </Link>
            <h2>{user?.name}</h2>
            <button onClick={handleSignOut} className="btn btn-error btn-xs">
              SignOut
            </button>
          </div>
        ) : (
          <div className="flex gap-2 items-baseline">
            <Link href={"/sign-in"}>
              <button className="hover:text-green-700 cursor-pointer">
                সাইন ইন
              </button>
            </Link>
            <Link href={"/sign-up"}>
              <button className="btn bg-green-700 text-white hover:bg-green-900 cursor-pointer">
                সাইন আপ
              </button>
            </Link>
          </div>
        )}
      </div>
    );
};

export default UserInfo;