import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchProductCategories } from "../apiLayer";

const CatProductPage = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["CatProduct", category],
    queryFn: fetchProductCategories(category),
  });
  return <div>CatProductPage</div>;
};

export default CatProductPage;
