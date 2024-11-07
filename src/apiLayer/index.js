import axios from "axios";
import { jwtDecode } from "jwt-decode";

import { toast } from "react-toastify";

export const baseUrl = "https://fakestoreapi.com/";
const token = localStorage.getItem("token");
export const apiCallInstance = axios.create({
  baseURL: baseUrl,
  Authorization: `Bearer ${token}`,
});

export const fetchProducts = async (limitValue) => {
  try {
    const res = await apiCallInstance.get("products", {
      params: { limit: limitValue },
    });
    console.log(res.data);
    return res?.data;
  } catch (err) {
    const errMsg = err.response.data;
    toast(errMsg);
  }
};

export const fetchAllProducts = async () => {
  try {
    const res = await apiCallInstance.get("products");
    console.log(res.data, "allproduct");
    return res?.data;
  } catch (err) {
    const errMsg = err.response.data;
    toast(errMsg);
  }
};

export const fetchProductCategories = async (category) => {
  try {
    const res = await apiCallInstance.get(`products/category/${category}`);
    return res?.data;
  } catch (error) {
    toast(error.response.data);
  }
};

export const fetchUserLogin = async (data) => {
  try {
    const res = await apiCallInstance.post("auth/login", data);
    return res.data;
  } catch (err) {
    const errMsg = err.response.data;
    toast(errMsg);
  }
};

export const fetchUserRegister = async (data) => {
  try {
    const res = await apiCallInstance.post("users", data);
    console.log(res.data, "api wala data");
    return res.data;
  } catch (err) {
    const errMsg = err.response.data;
    toast(errMsg);
  }
};

export const fetchUserDetail = async (userId) => {
  try {
    const res = await apiCallInstance.get(`users/${userId}`);
    return res.data;
  } catch (error) {}
};

export const uodateUserDetail = async (userId) => {
  try {
    const res = await apiCallInstance.post(`users/${userId}`);
    return res.data;
  } catch (error) {}
};

const fetchUsers = async () => {
  const res = await apiCallInstance.get("users");
  console.log(res.data);
  return res.data;
};

console.log(fetchUsers());

console.log(fetchProducts());
