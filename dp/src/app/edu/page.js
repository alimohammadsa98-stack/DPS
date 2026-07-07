import React from "react";

const Edu = () => {
  const pdfs = [
    {
      title: "Science Previous Year Questions",
      file: "/Asset/Pyq/science.pdf",
      color: "from-green-500 to-green-700",
    },
    {
      title: "Mathematics Previous Year Questions",
      file: "/Asset/Pyq/math.pdf",
      color: "from-blue-500 to-blue-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Previous Year Question Papers
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            View or download the PDF question papers.
          </p>
        </div>

        <div className="space-y-12">
          {pdfs.map((pdf, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
            >
              {/* Card Header */}
              <div
                className={`bg-gradient-to-r ${pdf.color} px-6 py-4 flex flex-col md:flex-row justify-between items-center`}
              >
                <h2 className="text-2xl font-bold text-white">
                  {pdf.title}
                </h2>

                <a
                  href={pdf.file}
                  download
                  className="mt-4 md:mt-0 bg-white text-gray-800 font-semibold px-5 py-2 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  📥 Download PDF
                </a>
              </div>

              {/* PDF Viewer */}
              <div className="p-5 bg-gray-50">
                <iframe
                  src={pdf.file}
                  title={pdf.title}
                  className="w-full h-[90vh] rounded-lg border shadow"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Edu;