import React from "react";
import fashion1 from "../../assets/images/fashion-img/fashion1.jpg";
import fashion2 from "../../assets/images/fashion-img/fashion2.jpg";
import fashion3 from "../../assets/images/fashion-img/fashion3.jpg";
import fashion4 from "../../assets/images/fashion-img/fashion4.jpg";
import fashion5 from "../../assets/images/fashion-img/fashion5.jpg";

const fashionProducts = [
  {
    name: "Summer Dress",
    img: fashion1,
    category: "Women",
    price: "$49.99",
  },
  {
    name: "Men's Jacket",
    img: fashion2,
    category: "Men",
    price: "$89.99",
  },
  {
    name: "Kids' Outfit",
    img: fashion3,
    category: "Kids",
    price: "$29.99",
  },
  {
    name: "Sneakers",
    img: fashion4,
    category: "Footwear",
    price: "$59.99",
  },
  {
    name: "Handbag",
    img: fashion5,
    category: "Accessories",
    price: "$39.99",
  },
];

const categories = [
  { name: "Women", color: "from-pink-400 to-pink-600" },
  { name: "Men", color: "from-blue-400 to-blue-600" },
  { name: "Kids", color: "from-yellow-400 to-yellow-600" },
  { name: "Footwear", color: "from-green-400 to-green-600" },
  { name: "Accessories", color: "from-purple-400 to-purple-600" },
];

const Fashion = () => {
  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
      name: product.name,
      image: product.img,
      price: product.price,
      category: product.category,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "/cart";
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 tracking-tight">
        Fashion
      </h1>
      <p className="text-gray-700 text-lg mb-10">
        Explore the latest trends in clothing, shoes, and accessories for all
        seasons and styles.
      </p>

      {/* Category Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`rounded-xl p-6 text-center text-white font-semibold text-lg shadow-lg bg-gradient-to-br ${cat.color} hover:scale-105 transition-transform cursor-pointer`}
            >
              {cat.name}
            </div>
          ))}
        </div>
      </div>

      {/* Product Section */}
      <h2 className="text-2xl font-bold text-indigo-600 mb-6">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {fashionProducts.map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow flex flex-col"
          >
            <img
              src={product.img}
              alt={product.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-sm text-gray-400 mb-1">
                  {product.category}
                </div>
                <h3 className="font-bold text-lg text-indigo-700 mb-2">
                  {product.name}
                </h3>
              </div>
              <div className="mt-auto text-indigo-600 font-bold text-lg">
                {product.price}
              </div>
              <button
                className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-full font-medium shadow hover:bg-indigo-700 transition"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fashion;
