import ProductCard from "./components/Card";
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
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        <ProductCard
          im="/file.svg"
          productname="Head Phone"
          productdesc="High-quality wireless headphones."
        />

        <ProductCard
          im="/globe.svg"
          productname="Digital Globe"
          productdesc="Beautiful globe icon for projects."
        />

        <ProductCard
          im="/next.svg"
          productname="Next.js Logo"
          productdesc="Perfect asset for Next.js developers."
        />

        <ProductCard
          im="/vercel.svg"
          productname="Vercel Logo"
          productdesc="Deploy your projects with Vercel."
        />
        <Link href={"/Edu"}>
        <ProductCard
          im="/window.svg"
          productname="Windows Icon"
          productdesc="Useful Windows SVG icon."
        />
        </Link>

        <button>
          <Link href={"/Payment"}>
           Make Payment
          </Link>
        </button>
        
      </div>
    </main>
  );
}