"use client"
import React from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const Resume = () => {
   const {data: session}= useSession()
       const router= useRouter()
    
       const handledownload = async () => {
      if (!session) {
        router.push("/login");
        return;
      }
    
      const res = await fetch("/api/check-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: session.user.email,
        }),
      });
    
      const data = await res.json();
    
      if (data.paid) {
        router.push("/download");
      } else {
        router.push("/payment");
      }
    };
  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-5 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            EduControl ERP Documentation
          </h1>
          <p className="text-gray-600 mt-2">
            View the complete ERP project documentation online or download it for offline use.
          </p>
        </div> */}

        {/* Download Button */}
        <div className="flex justify-center mb-6">
          {/* <a
            href="/Asset/Resume_Templates.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300"
          > 
           </a> */}
          <button onClick={handledownload} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300">
            📥 Download PDF
            </button>
         
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
          <iframe
            src="/Asset/Resume_Templates.pdf"
            className="w-full h-[100vh]"
            title="Resume Template that make you Hired"
          />
        </div>

      </div>
    </div>
    </div>
  )
}

export default Resume
