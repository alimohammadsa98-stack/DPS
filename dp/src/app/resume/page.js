import React from 'react'


const Resume = () => {
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
          <a
            href="/Asset/Resume_Templates.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300"
          >
            📥 Download PDF
          </a>
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
