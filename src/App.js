import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <div>

      <Header />
      <Routes>
        {/* <Route path="/procuct"  element={<ProductComponents />} /> */}
        <Route path="/" exact element={<ProductListing />} />
        <Route path="/product/:productId" exact element={<ProductDetail />} />
        <Route>404 not found!</Route>
      </Routes>
    </div>
  );
}

export default App;
