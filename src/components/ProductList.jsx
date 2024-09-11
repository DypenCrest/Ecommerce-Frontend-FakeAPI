import React, { useState } from "react";
import useProducts from "../hooks/useProducts";

const ProductList = () => {
  const [productList] = useProducts();
  console.log(productList);
  const [searchValue, setSearchValue] = useState("");
  const filteredProducts = productList.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div className="mt-10 px-20 py-10">
      <div className="flex justify-center">
        <input
          className=" border-2 focus:outline-none px-2 py-1 "
          type="search"
          placeholder="search here..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <div className="flex gap-8 flex-wrap justify-center items-center pt-10">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <div class="w-[270px] h-[400px] bg-white border border-gray-200 rounded-lg shadow ">
              <a href="#">
                <img
                  class="p-8 rounded-t-lg h-[300px] w-full"
                  src={product.image}
                  alt={product.title}
                />
              </a>
              <div class="p-5 bg-zinc-800">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-white truncate ...">
                    {product.title}
                  </h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-3xl font-bold text-gray-900 dark:text-white">
                    ${product.price}
                  </span>
                  <a
                    href="#"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
