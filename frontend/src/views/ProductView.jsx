import React from "react";
import { useEffect } from "react";
import { getProductsRequest } from "../../api/products.api";
import ProductCard from "../../components/ProductCard";
import { ProductContext } from "../../context/ProductContext";
import { useContext } from "react";

function ProductView() {
  const { product, setProduct } = useContext(ProductContext);
  console.log(product);
  useEffect(() => {
    const loadProducts = async () => {
      const response = await getProductsRequest();
      console.log(response.data);
      setProduct(response.data.rows);
    };
    loadProducts();
  }, []);

  const renderMain = () => {
    if (product.length === 0) return <h1>No hay productos</h1>;
    return product.map((value, index) => {
      return <ProductCard values={value} key={index} ></ProductCard>;
    });
  };

  return (
    <div>
      <h1>Productos</h1>
      {renderMain()}
    </div>
  );
}

export default ProductView;
