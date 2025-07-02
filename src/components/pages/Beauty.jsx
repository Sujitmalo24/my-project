import React from "react";
import beauty1 from "../../assets/images/beauty-img/beauty-1.jpg";
import beauty2 from "../../assets/images/beauty-img/beauty-2.jpg";
import beauty3 from "../../assets/images/beauty-img/beauty-3.jpg";
import beauty4 from "../../assets/images/beauty-img/beauty-4.jpg";
import beauty5 from "../../assets/images/beauty-img/beauty-5.jpg";

const beautyProducts = [
  {
    name: "Moisturizer",
    img: beauty1,
    category: "Skincare",
    price: "$24.99",
  },
  {
    name: "Lipstick",
    img: beauty2,
    category: "Makeup",
    price: "$14.99",
  },
  {
    name: "Perfume",
    img: beauty3,
    category: "Fragrance",
    price: "$49.99",
  },
  {
    name: "Face Mask",
    img: beauty4,
    category: "Skincare",
    price: "$9.99",
  },
  {
    name: "Foundation",
    img: beauty5,
    category: "Makeup",
    price: "$29.99",
  },
];

const categories = [
  { name: "Skincare", color: "from-pink-300 to-pink-500" },
  { name: "Makeup", color: "from-red-400 to-red-600" },
  { name: "Fragrance", color: "from-yellow-400 to-yellow-600" },
];

const Beauty = () => (
  <div className="max-w-7xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 tracking-tight">Beauty</h1>
    <p className="text-gray-700 text-lg mb-10">Shop beauty products, skincare, makeup, and more for your daily routine and special occasions.</p>

    {/* Category Section */}
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <div key={cat.name} className={`rounded-xl p-6 text-center text-white font-semibold text-lg shadow-lg bg-gradient-to-br ${cat.color} hover:scale-105 transition-transform cursor-pointer`}>
            {cat.name}
          </div>
        ))}
      </div>
    </div>

    {/* Product Section */}
    <h2 className="text-2xl font-bold text-indigo-600 mb-6">Featured Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {beautyProducts.map((product, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow flex flex-col">
          <img src={product.img} alt={product.name} className="h-48 w-full object-cover" />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-sm text-gray-400 mb-1">{product.category}</div>
              <h3 className="font-bold text-lg text-indigo-700 mb-2">{product.name}</h3>
            </div>
            <div className="mt-auto text-indigo-600 font-bold text-lg">{product.price}</div>
            <button
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-full font-medium shadow hover:bg-indigo-700 transition"
              onClick={() => {
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                cart.push({
                  name: product.name,
                  image: product.img,
                  price: product.price,
                  category: product.category,
                });
                localStorage.setItem('cart', JSON.stringify(cart));
                window.location.href = '/cart';
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Beauty;
