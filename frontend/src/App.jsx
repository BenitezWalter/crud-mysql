import { Route, Routes } from "react-router-dom";
import ProductForm from "./views/ProductForm";
import ProductView from "./views/ProductView";
import NavBar from "./components/NavBar";
import { ProductContext } from "./context/ProductContext";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState([]);
  return (
    <div className="bg-zinc-900 h-screen">
      <NavBar />
      <div className="container mx-auto py-4 px-20">
        <ProductContext.Provider value={{ product, setProduct }}>
          <Routes>
            <Route path="/" element={<ProductView />} />
            <Route path="/new" element={<ProductForm />} />
            <Route path="/edit/:id" element={<ProductForm />} />
          </Routes>
        </ProductContext.Provider>
      </div>
    </div>
  );
}

export default App;
