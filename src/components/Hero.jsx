import React from "react";

const Hero = () => (
  <section className="relative bg-gradient-to-br from-indigo-200 via-white to-indigo-400 py-32 md:py-44 flex items-center justify-center overflow-hidden">
    {/* Decorative blurred shapes */}
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl opacity-30 z-0" />
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100 rounded-full filter blur-2xl opacity-20 z-0" />
    <div className="max-w-3xl mx-auto text-center relative z-10">
      <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-800 mb-6 leading-tight animate-fade-in-up drop-shadow-lg">
        Discover the Best Deals at{" "}
        <span className="text-indigo-500">E-Comarch</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-10 animate-fade-in-up delay-100">
        Shop the latest electronics, fashion, home essentials, and more. Enjoy fast
        shipping, exclusive offers, and a seamless shopping experience.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-fade-in-up delay-200">
        <a
          href="#shop"
          className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all text-lg"
        >
          Shop Now
        </a>
        <a
          href="#categories"
          className="inline-block bg-white text-indigo-700 border border-indigo-600 px-10 py-4 rounded-full font-semibold shadow hover:bg-indigo-50 transition-all text-lg"
        >
          Browse Categories
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-base mt-8 animate-fade-in-up delay-300">
        <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow text-indigo-700 font-medium">
          <span className="text-indigo-500 font-bold">✔</span> Free Shipping
        </div>
        <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow text-indigo-700 font-medium">
          <span className="text-indigo-500 font-bold">✔</span> 24/7 Support
        </div>
        <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow text-indigo-700 font-medium">
          <span className="text-indigo-500 font-bold">✔</span> Secure Payment
        </div>
        <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow text-indigo-700 font-medium">
          <span className="text-indigo-500 font-bold">✔</span> Easy Returns
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
