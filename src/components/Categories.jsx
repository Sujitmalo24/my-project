import React from "react";

const categories = [
  {
    name: "Fashion",
    products: [
      { name: "Summer Dress", price: 49.99, isPopular: true },
      { name: "Men's Jacket", price: 89.99, isPopular: false },
    ],
  },
  {
    name: "Electronics",
    products: [
      { name: "Smartphone", price: 699.99, isPopular: true },
      { name: "Laptop", price: 1199.99, isPopular: false },
    ],
  },
  // Add more categories and products as needed
];

const handleAddToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "/cart";
};

const Home = () => (
  <div className="max-w-7xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold text-indigo-700 mb-8">Categories</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {categories.map((cat) => (
        <div key={cat.name} className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold text-indigo-600 mb-4">{cat.name}</h3>
          <div className="space-y-4">
            {cat.products.filter((p) => p.isPopular).map((product, idx) => (
              <div key={idx} className="flex items-center justify-between bg-indigo-50 rounded p-3">
                <span className="font-medium text-gray-800">{product.name} - ${product.price}</span>
                <button
                  className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
