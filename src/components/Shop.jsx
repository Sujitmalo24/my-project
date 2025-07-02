import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "Wireless Headphones",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
    description: "High-quality sound, noise cancellation, and long battery life."
  },
  {
    name: "Smart Watch",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80",
    description: "Track your fitness, notifications, and more in style."
  },
  {
    name: "Modern Sofa",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80",
    description: "Comfortable, stylish, and perfect for any living room."
  },
  {
    name: "Kids' Building Blocks",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
    description: "Fun and educational toys for creative minds."
  }
];

const Shop = () => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-12 text-center tracking-tight">Shop Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {products.map((product) => (
            <div key={product.name} className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-indigo-200 flex flex-col items-center p-6">
              <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-xl shadow mb-6" />
              <h3 className="text-xl font-bold text-indigo-700 mb-2 text-center">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4 text-center min-h-[48px]">{product.description}</p>
              <span className="text-lg font-bold text-indigo-600 mb-4">${product.price.toFixed(2)}</span>
              <button
                className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium shadow hover:bg-indigo-700 transition"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
