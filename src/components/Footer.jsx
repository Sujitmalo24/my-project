import React from "react";

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 py-8 mt-12">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-indigo-700 font-extrabold text-xl tracking-tight">E-Comarch</div>
      <nav className="flex flex-wrap gap-6 text-gray-600 text-sm">
        <a href="#home" className="hover:text-indigo-600 transition">Home</a>
        <a href="#shop" className="hover:text-indigo-600 transition">Shop</a>
        <a href="#categories" className="hover:text-indigo-600 transition">Categories</a>
        <a href="#about" className="hover:text-indigo-600 transition">About</a>
        <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
      </nav>
      <div className="text-gray-400 text-xs">&copy; {new Date().getFullYear()} E-Comarch. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;
