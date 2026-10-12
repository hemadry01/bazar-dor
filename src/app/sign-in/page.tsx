"use client"
import { signIn } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const SignIn = () => {

  const onSubmit = async(e:React.SubmitEvent<HTMLFormElement>)=>{

    e.preventDefault();
    const fromData= new FormData(e.currentTarget);
    const data =Object.fromEntries(fromData.entries()) as {email:string , password:string}

    const { data:resData, error } = await signIn.email({
      ...data,
      rememberMe: true, 
      callbackURL: "/", 
    });

    if(resData){
            toast.success("Your Login is successful");
            redirect("/")
          }

    if (error) {
      toast.error("Invalid email or password");
    }
  }

  //data submit with googe method
      const handeWithGoogle = async() =>{
  
        try {
          await signIn.social({
            provider: "google",
            callbackURL: "/",
            errorCallbackURL: "/sign-in",
          });
           toast.success("Google login successful");
        } catch (error) {
          toast.error(
            `Google Sign In Error: ${
              error instanceof Error ? error.message : String(error)
            }`,
          );
        }
      }

    const handleSubmitGithub = async()=>{
      try{
        await signIn.social({
        provider: "github"
        });
        toast.success("Github login successful");
      }
      catch(error){
        toast.error(
          `Google Sign In Error: ${
            error instanceof Error ? error.message : String(error)
          }`,
        );
      }
    }

    return (
      <div className="mx-auto flex min-h-[70vh] w-full max-w-md flex-col items-center justify-center px-4">
        <div className="mx-auto text-center">
          <h2 className="text-2xl font-semibold">সাইন ইন</h2>
          <p className="mt-2 text-gray-500">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>
        <form onSubmit={onSubmit} className="mt-6 w-full max-w-md">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-5">
            <label className="label">ইমেইল</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="you@example.com"
            />

            <label className="label">পাসওয়ার্ড</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="কমপক্ষে ৮ অক্ষর"
            />

            <button className="btn mt-5 w-full border-0 bg-green-600 text-white hover:bg-green-700">
              সাইন ইন
            </button>
          </fieldset>
        </form>

        <div className="divider">অথবা</div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            onClick={handeWithGoogle}
            className="flex items-center justify-center gap-3 rounded-xl
      border border-gray-200 bg-white px-5 py-4
      font-medium text-gray-900 shadow-sm transition
      hover:bg-gray-50 hover:shadow-md
      focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {/* Google SVG এখানে রাখো */}
            <span>Google দিয়ে চালিয়ে যান</span>
          </button>

          <button
            onClick={handleSubmitGithub}
            className="flex items-center justify-center gap-3 rounded-xl
            border border-black bg-black px-5 py-4
            font-medium text-white shadow-sm transition
            hover:bg-gray-800 hover:shadow-md
            focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            {/* GitHub SVG এখানে রাখো */}
            <span>GitHub দিয়ে চালিয়ে যান</span>
          </button>

          <p className="text-center text-sm text-gray-500 sm:col-span-2">
            অ্যাকাউন্ট নেই?{" "}
            <a
              href="/sign-up"
              className="font-semibold text-green-600 transition
               hover:text-blue-700 hover:underline"
            >
              সাইন আপ করুন
            </a>
          </p>
        </div>
      </div>
    );
};

export default SignIn;