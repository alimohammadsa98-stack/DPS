import ProductCard from "./components/card"; // If Card is a file/folder inside app/components
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {/* Heading */}

      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">
          Products That Digitally Need You
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          PYQ's, Notes, Resume Templates, Free Footages for Videos,
          Script Writing Models, SVGs, GIFs and many more useful
          digital assets for Students, Working Professionals and
          Content Creators.
        </p>
        <Link href="/payment">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            💳 Get Access
          </button>
        </Link>

      </div>


      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
       
        <Link href={"/graphics"}>
          <ProductCard
            im="/aa.jfif"
            productname="Graphics Folder"
            productdesc="PNG images that make premium high quality videos"
          />
        </Link>

        <Link href={"/resume"}>
          <ProductCard
            im="/Resume.jfif"
            productname="Resume Template"
            productdesc="A Resume pdf that help you to make your "
          />
        </Link>

        <Link href={"/edu"}>
          <ProductCard
            im="/pyq.webp"
            productname="Previous Year Question Paper"
            productdesc="Download pyq's that help you to know important topics"
          />
        </Link>



      </div>
    </main>
  );
}