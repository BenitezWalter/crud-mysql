import React from "react";
import { Form, Formik } from "formik";
import {
  createProductRequest,
  updateProductRequest,
} from "../api/products.api";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductRequest } from "../api/products.api";
import { useNavigate } from "react-router-dom";
function ProductForm() {
  const [productId, setProductId] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleGetProduct = async (id) => {
    try {
      const response = await getProductRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const loadProduct = async () => {
      if (params.id) {
        const product = await handleGetProduct(params.id);
        setProductId({
          name: product.name,
          description: product.description,
          price: product.price,
        });
      }
    };
    loadProduct();
  }, []);

  return (
    <div>
      <Formik
        initialValues={productId}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateProductRequest(params.id, values);
          } else {
            await createProductRequest(values);
          }
          navigate("/");
          setProductId({
            name: "",
            description: "",
            price: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Editar producto" : "Crear producto"}
            </h1>
            <label className="block">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Nombre del producto"
              onChange={handleChange}
              value={values.name}
              className="px-2 py-1 rounded-sm w-full"
            />
            <label className="block">Description</label>
            <textarea
              type="text"
              name="description"
              rows="3"
              placeholder="Descripcion del producto"
              onChange={handleChange}
              value={values.description}
              className="px-2 py-1 rounded-sm w-full"
            ></textarea>
            <label className="block">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Precio del producto"
              onChange={handleChange}
              value={values.price}
              className="px-2 py-1 rounded-sm w-full"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
            >
              {isSubmitting ? "Guardando" : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProductForm;
