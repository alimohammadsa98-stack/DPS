"use client"


import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

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
            {/* <h2 className="text-2xl font-bold text-gray-800 mb-2">
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
            </button> */}
            <>
  <h2 className="text-2xl font-bold text-gray-800 mb-2">
    Welcome
  </h2>

  <p className="text-gray-600 mb-6">
    Sign in to access your account.
  </p>

  {/* GitHub Login */}
  <button
    //onClick={() => signIn("github")}
    onClick={() => signIn("github", { callbackUrl: "/payment" })}
    className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-black transition duration-300 shadow-md mb-4"
  >
    🐙 Sign in with GitHub
  </button>

  {/* Google Login */}
  <button
    //onClick={() => signIn("google")}
    onClick={() => signIn("google", { callbackUrl: "/payment" })}
    className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300 shadow-md flex items-center justify-center gap-2"
  >
    <img
      src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
      alt="Google"
      className="w-5 h-5"
    />
    Sign in with Google
  </button>
</>


          </>
        )}
      </div>
    
    </div>
  );
}