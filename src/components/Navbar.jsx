import React, { useState, useEffect } from "react";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };
    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  const handleCartClick = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-extrabold text-indigo-600 tracking-tight">E-Comarch</a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8">
          {[{name:'Home', path:'/'}, {name:'Shop', path:'#shop'}, {name:'About', path:'#about'}, {name:'Contact', path:'#contact'}].map((item) => (
            <li key={item.name}>
              {item.path.startsWith('#') ? (
                <a href={item.path} className="text-gray-800 hover:text-indigo-600 font-medium transition-colors duration-200">
                  {item.name}
                </a>
              ) : (
                <Link to={item.path} className="text-gray-800 hover:text-indigo-600 font-medium transition-colors duration-200">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
          {/* Category Dropdown */}
          <li className="relative group">
            <button className="text-gray-800 hover:text-indigo-600 font-medium transition-colors duration-200 flex items-center focus:outline-none">
              Categories
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-50">
              <li><Link to="/fashion" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Fashion</Link></li>
              <li><Link to="/electronics" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Electronics</Link></li>
              <li><Link to="/beauty" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Beauty</Link></li>
              <li><Link to="/toys" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Toys</Link></li>
              <li><Link to="/sports" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Sports</Link></li>
            </ul>
          </li>
        </ul>
        {/* Signup/Login next to account icon */}
        <div className="hidden md:flex items-center space-x-2 ml-4">
          <Link to="/signup" className="px-4 py-1 rounded text-indigo-600 border border-indigo-600 hover:bg-indigo-50 font-medium transition">Sign Up</Link>
          <Link to="/login" className="px-4 py-1 rounded text-white bg-indigo-600 hover:bg-indigo-700 font-medium transition">Login</Link>
        </div>

        {/* Search bar (desktop) */}
        <div className="hidden md:flex items-center mx-6 w-64">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <a href="#cart" className="relative p-2 rounded-full hover:bg-indigo-50 transition" onClick={handleCartClick}>
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            {/* Cart badge */}
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full px-1.5">{cartCount}</span>
            )}
          </a>
          <a href="#user" className="p-2 rounded-full hover:bg-indigo-50 transition">
            <User className="w-6 h-6 text-gray-700" />
          </a>
          {/* Hamburger for mobile */}
          <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-lg px-6 py-4 space-y-4 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex items-center mb-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
        {[{name:'Home', path:'/'}, {name:'Shop', path:'#shop'}, {name:'About', path:'#about'}, {name:'Contact', path:'#contact'}].map((item) => (
          <a
            key={item.name}
            href={item.path}
            className="block text-gray-800 hover:text-indigo-600 font-medium text-lg px-2 py-1 rounded hover:bg-indigo-50"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}
        {/* Mobile Categories Dropdown */}
        <details className="block md:hidden">
          <summary className="text-gray-800 font-medium text-lg px-2 py-1 rounded hover:bg-indigo-50 cursor-pointer flex items-center">Categories
            <svg className="ml-1 w-4 h-4 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </summary>
          <ul className="pl-4 mt-2">
            <li><Link to="/fashion" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors" onClick={() => setIsOpen(false)}>Fashion</Link></li>
            <li><Link to="/electronics" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors" onClick={() => setIsOpen(false)}>Electronics</Link></li>
            <li><Link to="/beauty" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors" onClick={() => setIsOpen(false)}>Beauty</Link></li>
            <li><Link to="/toys" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors" onClick={() => setIsOpen(false)}>Toys</Link></li>
            <li><Link to="/home" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/sports" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors" onClick={() => setIsOpen(false)}>Sports</Link></li>
          </ul>
        </details>
        <div className="flex space-x-2 mt-4">
          <Link to="/signup" className="flex-1 px-4 py-2 rounded text-indigo-600 border border-indigo-600 hover:bg-indigo-50 font-medium text-center transition">Sign Up</Link>
          <Link to="/login" className="flex-1 px-4 py-2 rounded text-white bg-indigo-600 hover:bg-indigo-700 font-medium text-center transition">Login</Link>
        </div>
        <div className="flex space-x-4 mt-4">
          <a href="#cart" className="relative p-2 rounded-full hover:bg-indigo-50 transition" onClick={handleCartClick}>
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full px-1.5">{cartCount}</span>
          </a>
          <a href="#user" className="p-2 rounded-full hover:bg-indigo-50 transition">
            <User className="w-6 h-6 text-gray-700" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
