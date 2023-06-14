import React from "react";
import { Form, Formik } from "formik";
import { createProductRequest } from "../../api/products.api";
import { ProductContext } from "../../context/ProductContext";
import { useContext } from "react";
function ProductForm() {
  const { product, setProduct } = useContext(ProductContext);
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          description: "",
          price: "",
        }}
        onSubmit={async (values, actions) => {
          
          try {
            const response = await createProductRequest(values);
            console.log(response.data);
            setProduct([...product, response.data]);
            actions.resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Nombre del producto"
              onChange={handleChange}
              value={values.name}
            />
            <label>Description</label>
            <textarea
              type="text"
              name="description"
              rows="3"
              placeholder="Descripcion del producto"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <label>Price</label>
            <input
              type="number"
              name="price"
              placeholder="Precio del producto"
              onChange={handleChange}
              value={values.price}
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Guardando" : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProductForm;
