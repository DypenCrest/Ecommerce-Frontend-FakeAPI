import axios from "axios";
import { toast } from "react-toastify";

export const baseUrl = "https://fakestoreapi.com/";

export const apiCallInstance = axios.create({
  baseURL: baseUrl,
  // Authorization: `Bearer ${token}`,
});

export const fetchProducts = async () => {
  try {
    const res = await apiCallInstance.get("products");
    console.log(res.data);
    return res?.data;
  } catch (err) {
    const errMsg = err.response.data;
    toast(errMsg);
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
    console.log(res.data,'api wala data')
    return res.data;
  } catch (err) {
    const errMsg = err.response.data;
    toast(errMsg);
  }
};

const fetchUsers = async () => {
  const res = await apiCallInstance.get("users");
  console.log(res.data);
  return res.data;
};

console.log(fetchUsers());

console.log(fetchProducts());
