import React from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "Herbal Shampoo",
    image: img1,
    description: "Natural rosemary-infused shampoo for healthy hair.",
    price: "$18.99"
  },
  {
    name: "Luxury Watch",
    image: img2,
    description: "Elegant analog watch with leather strap.",
    price: "$249.00"
  },
  {
    name: "Vitamin C Serum",
    image: img3,
    description: "Brightening serum for glowing skin.",
    price: "$22.50"
  },
  {
    name: "Rose Perfume",
    image: img4,
    description: "Romantic floral fragrance with rose petals.",
    price: "$59.99"
  }
];

const ProductSection = () => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate("/product-detail", { state: { product } });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-5 flex flex-col items-center cursor-pointer hover:scale-105"
              onClick={() => handleProductClick(product)}
            >
              <img src={product.image} alt={product.name} className="w-40 h-40 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-3 text-center">{product.description}</p>
              <span className="text-indigo-600 font-bold text-lg mb-2">{product.price}</span>
              <button
                className="mt-auto bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                onClick={e => {
                  e.stopPropagation();
                  const cart = JSON.parse(localStorage.getItem("cart")) || [];
                  cart.push(product);
                  localStorage.setItem("cart", JSON.stringify(cart));
                  window.location.href = "/cart";
                }}
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

export default ProductSection;
