import React from "react";
import { deleteProductRequest } from "../api/products.api";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";



function ProductCard({values}) {
  const { product, setProduct } = useContext(ProductContext);
  
  const handleDelete = async (id) => {
    try {
      const response = await deleteProductRequest(id);
      console.log(response);
      setProduct(product.filter((product) => product.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>{values.name}</h2>
      <p>{values.description}</p>
      <span>{values.price}</span>
      <button>Editar</button>
      <button onClick={() => handleDelete(values.id)}>Borrar</button>
    </div>
  );
}

export default ProductCard;
