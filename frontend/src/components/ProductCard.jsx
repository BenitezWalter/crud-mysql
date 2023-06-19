import React from "react";
import { deleteProductRequest } from "../api/products.api";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

function ProductCard({ values }) {
  const { product, setProduct } = useContext(ProductContext);
  const navigate = useNavigate();

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
    <div className="bg-zinc-700 text-white rounded-md p-4">
      <h2 className="text-xl font-bold">{values.name}</h2>
      <p className="text-xs">{values.description}</p>
      <span>{"$"+values.price}</span>

      <div className="flex gap-x-1">
        <button
          className="bg-red-300 px-2 py-1 text-black"
          onClick={() => handleDelete(values.id)}
        >
          Delete
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => navigate(`/edit/${values.id}`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
