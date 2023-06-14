import axios from "axios";

export const getProductsRequest = async ()=>{
    return await axios.get("http://localhost:3000/getProducts")
}
export const createProductRequest = async (product) => {
  return await axios.post("http://localhost:3000/createProduct", product);
};

export const deleteProductRequest = async (id)=>{
    return await axios.delete(`http://localhost:3000/deleteProduct/${id}`)
}
