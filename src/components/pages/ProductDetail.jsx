import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div className="text-center py-20 text-gray-500">No product found.</div>;
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "/cart";
  };

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-4 flex flex-col items-center">
        <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded mb-6 shadow" />
        <h2 className="text-3xl font-bold text-indigo-700 mb-2">{product.name}</h2>
        <span className="text-indigo-600 font-bold text-2xl mb-4">{product.price}</span>
        <p className="text-gray-600 text-lg mb-8 text-center">{product.description}</p>
        <button onClick={handleAddToCart} className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold shadow hover:bg-indigo-700 transition text-lg">Add to Cart</button>
      </div>
    </section>
  );
};

export default ProductDetail;
