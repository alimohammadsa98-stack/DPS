import React from "react";

const assets = [
  {
    title: "Green Graph",
    file: "/Asset/Graphics/img1.jpeg",
  },
  {
    title: "Dollar Green Logo",
    file: "/Asset/Graphics/img2.jpeg",
  },
  {
    title: "Correct notes",
    file: "/Asset/Graphics/img3.jpeg",
  },
  {
    title: "King Taj",
    file: "/Asset/Graphics/img4.jpeg",
  },
  {
    title: "Animated Diary & Pencil",
    file: "/Asset/Graphics/img5.jpeg",
  },

  // Add more images here...
];

const Graphics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Graphics Collection
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {assets.map((asset, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="h-60 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={asset.file}
                alt={asset.title}
                className="w-full h-full object-contain hover:scale-105 transition duration-300"
              />
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
                {asset.title}
              </h2>

              <a
                href={asset.file}
                download
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
              >
                📥 Download PNG
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graphics;