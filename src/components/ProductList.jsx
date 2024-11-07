import SearchIcon from "@mui/icons-material/Search";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchProducts } from "../apiLayer";

const ProductList = () => {
  const [limit, setLimit] = useState(8);
  // const [productList] = useProducts();
  // console.log(productList);
  const [searchValue, setSearchValue] = useState("");

  const { isLoading, data, error } = useQuery({
    queryKey: ["productList", limit],
    queryFn: () => fetchProducts(limit),
  });
  console.log(data, "listko");
  const filteredProducts = data?.filter((product) =>
    product?.title?.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log(data, "queryko");
  return (
    <div className="mt-10 px-20 pb-10">
      <div className="flex justify-start items-center md:w-[25%] border-2 mx-auto py-1 px-2 rounded-md gap-2">
        <SearchIcon />
        <input
          className="  focus:outline-none w-full border-s px-1"
          type="search"
          placeholder="search here..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <div className="flex gap-8 flex-wrap justify-center items-center py-10">
        {isLoading && <span>Loading...</span>}
        {filteredProducts?.map((product) => (
          <div key={product.id}>
            <div class="w-[350px] md:w-[270px] h-[450px] md:h-[400px] bg-white border border-gray-200 rounded-lg shadow ">
              <a href="#">
                <img
                  class="p-8 rounded-t-lg h-[360px] md:h-[300px] w-full"
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
      {filteredProducts?.length < 20 && (
        <div className="flex justify-center items-center">
          <button
            className="bg-blue-400 text-white p-2 hover:bg-blue-600"
            onClick={() => setLimit((prev) => prev + 8)}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
