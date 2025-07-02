import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import ProductSection from "./components/ProductSection";
import Fashion from "./components/pages/Fashion";
import Electronics from "./components/pages/Electronics";
import Beauty from "./components/pages/Beauty";
import Toys from "./components/pages/Toys";
import HomeCategory from "./components/pages/HomeCategory";
import Sports from "./components/pages/Sports";
import ProductDetail from "./components/pages/ProductDetail";
import Cart from "./components/pages/Cart";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="pt-24 flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <ProductSection />
                  <Shop />
                  <About />
                  <Contact />
                </>
              }
            />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/toys" element={<Toys />} />
            <Route path="/home" element={<HomeCategory />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
