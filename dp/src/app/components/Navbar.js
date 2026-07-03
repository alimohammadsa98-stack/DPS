"use client"
import Link from "next/link";
import { useSession } from "next-auth/react";
const Navbar = () => {
   const { data: Session } = useSession();
  return (
    <nav className="bg-gray-900 text-white shadow-md   sticky top-0 z-50 bg-gray-900/95 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/Login" >
        {Session?(<button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow-md"
        >

         
         Login out
         
        </button>):<button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow-md"
        >

         
         Login
         
        </button>}
        
        </Link> 

        
        <Link
          href="/"
          className="text-2xl font-bold text-blue-400"
        >
          Digital Assets
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="hover:text-blue-400 transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-blue-400 transition"
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;