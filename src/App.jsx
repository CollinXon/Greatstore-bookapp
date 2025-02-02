import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductListing } from "./Pages/ProductListing";
import { CartPage } from "./Pages/CartItems";
import { Checkout } from "./Pages/CheckOut";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="font-inter">
        <Router>
          <Routes>
            <Route path="/" element={<ProductListing />} />

            <Route path="/cart" element={<CartPage />} />

            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>This is an Error Page</h1>} />
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
