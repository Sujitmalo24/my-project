import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-white">
      <form className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-indigo-600 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="you@example.com" required />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input type="password" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Password" required />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700 transition">Login</button>
        <p className="mt-4 text-center text-sm text-gray-600">Don't have an account? <a href="/signup" className="text-indigo-600 hover:underline">Sign Up</a></p>
      </form>
    </div>
  );
};

export default Login;
