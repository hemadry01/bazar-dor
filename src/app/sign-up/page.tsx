"use client"
import { signIn, signUp } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SignUp = () => {


    const [password,setPassword] = useState("");
    const [confirmPassword, setConfirmPassword]= useState("");
    const [email,setEmail]=useState("")

    const passwordMatch = confirmPassword.length=== 0 || password === confirmPassword;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const formValid = emailValid && password.length>=8 && passwordMatch;

    //data submit input field
    const onSubmit = async(e:React.SubmitEvent<HTMLFormElement>) =>{

      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries()) as {name:string,image:string, email:string, password:string}
      //console.log(data);

      const { data:resData, error } = await signUp.email({
       ...data,
        callbackURL: "/", // An optional URL to redirect to after the user signs up.
      })
      
      if(resData){
        toast.success("Your Login is successful");
        redirect("/")
      }
      if(error){
        toast.error("User already exists. Use another email");
      }
    }
    ////////////////////////////////////////////
    //data submit with googe method
    const handeWithGoogle = async() =>{

      try {
        await signIn.social({
          provider: "google",
        });
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
          <h2 className="text-2xl font-semibold">অ্যাকাউন্ট তৈরি করুন</h2>
          <p className="mt-2 text-gray-500">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>
        <form onSubmit={onSubmit} className="mt-6 w-full max-w-md">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-5">
            <label className="label">নাম</label>
            <input
              name="name"
              type="name"
              className="input w-full"
              required
              placeholder="যেমন: রহিম উদ্দিন"
            />

            <label className="label">ছবি</label>
            <input
              name="image"
              type="url"
              className="input w-full"
              required
              placeholder="ছবি"
            />

            <label className="label">ইমেইল</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />

            <label className="label">পাসওয়ার্ড</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="কমপক্ষে ৮ অক্ষর"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required
            />

            <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
            <input
              name="confirmPassword"
              type="password"
              className="input w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="আবার লিখুন"
            />

            {!passwordMatch && (
              <p className="text-sm text-red-500">পাসওয়ার্ড মিলছে না</p>
            )}

            <button
              type="submit"
              disabled={!formValid}
              className="btn mt-5 w-full border-0 bg-green-600 text-white hover:bg-green-700"
            >
              অ্যাকাউন্ট তৈরি করুন
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
            অ্যাকাউন্ট আছে?{" "}
            <a
              href="/sign-in"
              className="font-semibold text-blue-600 transition
        hover:text-blue-700 hover:underline"
            >
              সাইন ইন করুন
            </a>
          </p>
        </div>
      </div>
    );
};

export default SignUp;