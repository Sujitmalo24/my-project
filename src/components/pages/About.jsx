import React from "react";

const About = () => (
  <section id="about" className="py-24 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex flex-col items-center justify-center relative overflow-hidden min-h-screen">
    {/* Decorative blurred shapes */}
    <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-indigo-200 rounded-full filter blur-3xl opacity-20 z-0" />
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100 rounded-full filter blur-2xl opacity-10 z-0" />
    <div className="max-w-4xl mx-auto text-center relative z-10 p-6 md:p-12 bg-white/80 rounded-3xl shadow-2xl border border-indigo-100">
      <h2 className="text-5xl font-extrabold text-indigo-700 mb-4 tracking-tight drop-shadow-lg">About <span className="text-indigo-500">E-Comarch</span></h2>
      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        E-Comarch is your trusted destination for the latest and greatest products. We are passionate about delivering a seamless shopping experience, fast shipping, and unbeatable deals. Our team is dedicated to providing top-notch customer service and a curated selection of quality items for every lifestyle.
      </p>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl shadow p-8 w-72 border border-indigo-200 hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold text-indigo-600 mb-3 flex items-center justify-center gap-2">
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
            Our Mission
          </h3>
          <p className="text-gray-600 text-base">To make online shopping easy, enjoyable, and accessible for everyone by offering a wide range of products and exceptional service.</p>
        </div>
        <div className="bg-gradient-to-br from-pink-100 to-indigo-50 rounded-xl shadow p-8 w-72 border border-pink-200 hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold text-pink-600 mb-3 flex items-center justify-center gap-2">
            <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            Why Choose Us?
          </h3>
          <ul className="text-gray-600 text-base list-disc list-inside text-left mx-auto max-w-xs">
            <li>Curated, high-quality products</li>
            <li>Fast & free shipping</li>
            <li>24/7 customer support</li>
            <li>Secure payment options</li>
            <li>Easy returns</li>
          </ul>
        </div>
      </div>
      {/* New: Company Stats Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow p-6 border border-indigo-100 flex flex-col items-center">
          <span className="text-4xl font-extrabold text-indigo-600 mb-2">10K+</span>
          <span className="text-gray-600 text-lg font-medium">Happy Customers</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-indigo-100 flex flex-col items-center">
          <span className="text-4xl font-extrabold text-pink-600 mb-2">5K+</span>
          <span className="text-gray-600 text-lg font-medium">Products Sold</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-indigo-100 flex flex-col items-center">
          <span className="text-4xl font-extrabold text-indigo-400 mb-2">99%</span>
          <span className="text-gray-600 text-lg font-medium">Positive Feedback</span>
        </div>
      </div>
      {/* New: Call to Action */}
      <div className="mt-16">
        <div className="bg-gradient-to-r from-indigo-500 to-pink-500 rounded-2xl shadow-lg p-8 flex flex-col items-center">
          <h3 className="text-2xl font-bold text-white mb-2">Join the E-Comarch Family!</h3>
          <p className="text-white text-lg mb-4">Sign up now to get exclusive offers, updates, and more.</p>
          <a href="/signup" className="inline-block bg-white text-indigo-600 font-bold px-8 py-3 rounded-full shadow hover:bg-indigo-50 transition text-lg">Sign Up</a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
