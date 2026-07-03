import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-5">
      <div className="max-w-3xl mx-auto px-6 py-3 text-center">
        {/* Logo / Website Name */}
        <h2 className="text-xl font-bold text-white">
          Digital Assets
        </h2>

        <p className="text-sm text-gray-400 mt-1">
          Premium digital products for creators & developers.
        </p>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Digital Assets. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;