import Image from "next/image";

const ProductCard = (params) => {
  return (
    <div className="max-w-sm rounded-2xl bg-white shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
      
      {/* Product Image */}
      <div className="relative w-full h-72">
        <img
          src={params.im} // public folder me image rakho
          alt="Wireless Headphones"
          fill
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-900">
          {params.productname}
        </h2>

        <p className="mt-3 text-gray-600 text-lg">
          {params.productdesc}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;