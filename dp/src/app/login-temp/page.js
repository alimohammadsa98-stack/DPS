"use client"



import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
 
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96 text-center">
        {session ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome 👋
            </h2>

            <p className="text-gray-600 mb-6">
              Signed in as
            </p>
/ 
            <p className="font-semibold text-blue-600 mb-6 break-all">
              {session.user.email}
            </p>

            <button
              onClick={() => signOut()}
              className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition duration-300 shadow-md"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome
            </h2>

            <p className="text-gray-600 mb-6">
              Sign in to access your account.
            </p>

            <button
              onClick={() => signIn("github")}
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-black transition duration-300 shadow-md"
            >
              Sign in with GitHub
            </button>


          </>
        )}
      </div>
    
    </div>
  );
}