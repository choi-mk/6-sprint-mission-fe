import { BestProduct } from "./BestProduct";
import { Header } from "./Header";
import { SellProduct } from "./SellProduct";
import { useState, useEffect } from "react";
import { getProductList } from "../api/ProductService";
import "./App.css";
import { PageButton } from "./PageButton";
import { Footer } from "./Footer";

function App({ children }) {
  return (
    <div className="App">
      <Header />
      <div className="page">{children}</div>
      <Footer />
    </div>
  );
}

export default App;
