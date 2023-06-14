import { Route, Routes } from "react-router-dom";
import ProductForm from "./views/ProductForm";
import ProductView from "./views/ProductView";
import NavBar from "../components/NavBar";
import { ProductContext } from "../context/ProductContext";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState([]);
  return (
    <>
      <ProductContext.Provider value={{ product, setProduct }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductView />} />
          <Route path="/new" element={<ProductForm />} />
          <Route path="/edit/:id" element={<ProductForm />} />
        </Routes>
      </ProductContext.Provider>
    </>
  );
}

export default App;
