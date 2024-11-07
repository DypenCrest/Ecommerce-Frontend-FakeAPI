import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchProductCategories } from "../apiLayer";
import { useCategoryStore } from "../assets/store/store";

const CatListing = () => {
  const { category } = useCategoryStore();
  console.log(category);

  return <div>{}</div>;
};

export default CatListing;
