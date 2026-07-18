import React from "react";

const assets = [
  {
    id: 1,
    title: "Resume Templates",
    type: "PDF",
    file: "/Asset/Resume_Templates.pdf",
  },
  {
    id: 2,
    title: "10th HBSC Math PYQ",
    type: "PDF",
    file: "/Asset/Pyq/math.pdf",
  },
  {
    id: 3,
    title: "10th HBSC Science PYQ",
    type: "PDF",
    file: "/Asset/Pyq/science.pdf",
  },
];

const mediaAssets = [
  {
    id: 1,
    title: "Green Dollar with Black Background",
    type: "Image",
    thumbnail: "/Asset/Graphics/img2.jpeg",
    file: "/Asset/Graphics/img2.jpeg",
  },
  {
    id: 2,
    title: "Audio Wave Background",
    type: "Image",
    thumbnail: "/Asset/Graphics/img1.jpeg",
    file: "/Asset/Graphics/img1.jpeg",
  },
  {
    id: 3,
    title: "Blue Download Tick Logo",
    type: "Image",
    thumbnail: "/Asset/Graphics/img3.jpeg",
    file: "/Asset/Graphics/img3.jpeg",
  },
  {
    id: 4,
    title: "King Taj PNG",
    type: "Image",
    thumbnail: "/Asset/Graphics/img4.jpeg",
    file: "/Asset/Graphics/img4.jpeg",
  },
  {
    id: 5,
    title: "Pencil Drawing",
    type: "Image",
    thumbnail: "/Asset/Graphics/img5.jpeg",
    file: "/Asset/Graphics/img5.jpeg",
  },
];

const Download = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-gray-800">
            Digital Assets
          </h1>

          <p className="mt-3 text-lg text-gray-500">
            Download your purchased resources instantly.
          </p>
        </div>

        {/* Documents Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
            📄 Documents
          </h2>

          <div className="w-24 h-1 bg-blue-600 rounded-full mt-2"></div>

          <p className="text-gray-500 mt-2">
            PDF notes, resume templates and study material.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <div className="text-6xl text-center mb-5">📄</div>

              <h3 className="text-xl font-semibold text-center text-gray-800">
                {asset.title}
              </h3>

              <p className="text-center text-gray-500 mt-2">
                {asset.type}
              </p>

              <a
                href={asset.file}
                download
                className="block mt-6 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl font-semibold transition"
              >
                📥 Download
              </a>
            </div>
          ))}
        </div>

        {/* Images Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
            🖼️ Images & Graphics
          </h2>

          <div className="w-24 h-1 bg-green-600 rounded-full mt-2"></div>

          <p className="text-gray-500 mt-2">
            PNGs, graphics, icons and design assets.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {mediaAssets.map((asset) => (
            <div
              key={asset.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={asset.thumbnail}
                alt={asset.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {asset.title}
                </h3>

                <p className="text-gray-500 mt-2">{asset.type}</p>

                <a
                  href={asset.file}
                  download
                  className="block mt-5 bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-xl font-semibold transition"
                >
                  📥 Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Download;