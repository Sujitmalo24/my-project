import React from "react";

const Home = () => (
  <div className="max-w-7xl mx-auto py-16 px-4">
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center">
      Welcome to Our Store
    </h1>
    <p className="text-lg text-gray-700 mb-12 text-center">
      Discover the best products at unbeatable prices. Quality and satisfaction
      guaranteed.
    </p>
    <div className="flex justify-center">
      <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition">
        Shop Now
      </button>
    </div>
  </div>
);

export default Home;
