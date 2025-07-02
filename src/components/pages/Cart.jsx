import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const handleDelete = (idx) => {
    const newCart = cart.filter((_, i) => i !== idx);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-700 mb-8">Your Cart</h2>
        {cart.length === 0 ? (
          <div className="text-gray-500 text-lg">Your cart is empty.</div>
        ) : (
          <div className="space-y-6">
            {cart.map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 bg-gray-50 rounded-lg p-4 shadow">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
                <span className="text-indigo-600 font-bold text-lg">{item.price}</span>
                <button
                  className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  onClick={() => handleDelete(idx)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
