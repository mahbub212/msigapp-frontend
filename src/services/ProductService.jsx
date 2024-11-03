import axios from "axios";

const REST_API_BASE_URL ="http://localhost:8080/product";

export const listProduct = () => axios.get(REST_API_BASE_URL);

export const  createProduct = (product) => axios.post(REST_API_BASE_URL,product);

export const getProduct = (productId) => axios.get(REST_API_BASE_URL + '/' + productId);

export const updateProduct = (productId, product) => axios.put(REST_API_BASE_URL + '/' + productId, product);

export const deleteProduct =  (productId) => axios.delete(REST_API_BASE_URL + '/' + productId);

//http://localhost:8080/product/approve/16
export const approveProduct = (productId) => axios.put(REST_API_BASE_URL + '/' + 'approve' + '/' + productId);

//http://localhost:8080/product/reject/16
export const rejectProduct = (productId) => axios.put(REST_API_BASE_URL + '/' + 'reject' + '/' + productId);