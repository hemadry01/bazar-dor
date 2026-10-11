"use client"
import { signOut, updateUser, useSession } from "@/lib/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { data: session, isPending } = useSession();
  //const [show, setShow] = useState(false);

  if (isPending) {
    return <p>Loading...</p>;
  }

  const user = session?.user;

   const handleSignOut =async()=>{

         const data= await signOut();
          if(data){
             toast.success("Profile Update successful");
            redirect("/");
          }
      }

       const handleUpdateProfile = async (
         e: React.SubmitEvent<HTMLFormElement>,
       ) => {
         e.preventDefault();
         const formData = new FormData(e.currentTarget);
         const userData = Object.fromEntries(formData.entries()) as {
           name: string
         };

        const{data:resend}= await updateUser({
           ...userData,

         });
         if(resend){
            redirect("/");
         }
       };
  return (
    <div className="items-center justify-center mx-auto max-w-6xl mt-40">
      <h2>আমার প্রোফাইল</h2>
      <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
      <div>
        <div className="w-full rounded-2xl bg-white px-6 py-5 mb-4  shadow-md flex justify-between">
          <div className="flex gap-2">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                <Image
                  alt="suman biswas"
                  src={user?.image || "/default-avatar.png"}
                  width={45}
                  height={45}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">{user?.name}</span>
              <span className="text-sm text-gray-400">{user?.email}</span>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="btn btn-dash btn-secondary "
          >
            ↩ সাইন আউট
          </button>
        </div>
      </div>

      <div className="w-full rounded-2xl bg-white px-6 py-5 mb-4  shadow-md flex flex-col">
        <span>তথ্য</span>
        <div>
          <form onSubmit={handleUpdateProfile}>
            <fieldset className="fieldset w-full">
              <label className="label" htmlFor="name">
                নাম
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="input w-full "
                placeholder="Name"
              />
              <button className="btn btn-success w-full">আপডেট </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;