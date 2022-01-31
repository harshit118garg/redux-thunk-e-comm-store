import React from "react";
import "./App.css";
import Header from "./containers/Header";
import Home from "./containers/Home";
import ProductDetails from "./containers/ProductDetails";
import ProductList from "./containers/ProductList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="products" exact element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route>404 Page Not Found</Route>
      </Routes>
    </>
  );
}

export default App;
