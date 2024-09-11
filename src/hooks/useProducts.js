import React, { useEffect, useState } from "react";
import { fetchProducts } from "../apiLayer";

const useProducts = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProductList(data))
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  },[]);
  return [productList];
};

export default useProducts;
