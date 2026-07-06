"use client";

import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-200">
            We build high-quality digital products that help students,
            developers, and professionals improve their skills and achieve
            their goals.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
            alt="About"
            className="rounded-2xl shadow-xl"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-8 mb-4">
            We are passionate about creating premium digital products,
            educational resources, templates, and tools that make learning
            easier and more enjoyable.
          </p>

          <p className="text-gray-600 leading-8">
            Our mission is to provide affordable, high-quality digital
            solutions with instant access, secure payments, and excellent
            customer support.
          </p>
        </div>
        </section>
       <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-8 text-center border border-gray-200 hover:shadow-2xl transition duration-300">
  <h2 className="text-3xl font-bold text-blue-700 mb-4">
    Contact Us
  </h2>

  <p className="text-gray-500 mb-6">
    Have any questions? Feel free to contact us.
  </p>

  <div className="bg-gray-100 rounded-lg p-4">
    <h3 className="text-lg font-semibold text-gray-700">
      📧 alimohammadsa98@gmail.com
    </h3>
  </div>
</div>
</div>

    
  );
};

export default About;