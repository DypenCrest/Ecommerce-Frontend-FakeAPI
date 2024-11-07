import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { heroSlideData, heroCat, libraries } from "../assets/data.js/heroSlide";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts, fetchProducts } from "../apiLayer";
import bannerImg from "../assets/images/banner1.jpg";

const Homepage = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });
  console.log(data, "homepage");

  const popularProducts = data
    ?.sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 4);

  return (
    <>
      {/* Slider */}
      <section id="product-slider" className="relative w-full">
        <Swiper
          loop={true}
          modules={[Navigation, Pagination]}
          className="main-slider"
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {/* Slide 1 */}
          {heroSlideData?.map((item) => (
            <SwiperSlide>
              <img src={item.img} alt="Product 1" />
              <div className="swiper-slide-content absolute bottom-[5%] md:bottom-[20%] ps-8 md:ps-12">
                <h2 className="text-3xl md:text-7xl font-bold text-white mb-2 md:mb-4">
                  {item.title}
                </h2>
                <p className="mb-4 text-white md:text-2xl">
                  {item.desc1} <br />
                  {item.desc2}
                </p>
                <a
                  href="/"
                  className="hover:bg-white text-white hover:text-black border  font-semibold px-4 py-2 rounded-full inline-block"
                >
                  Shop now
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Slider Pagination */}
        <div className="navigation invisible md:visible">
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </section>

      {/* <!-- Product banner section --> */}
      <section id="product-banners px-2">
        <div className="container mx-auto py-10 cursor-pointer">
        <h2 className="text-2xl font-bold mb-8">Categories</h2>
          <div className="flex flex-wrap justify-between items-center">
            {/* <!-- Category 1 --> */}
            {heroCat.map((item) => (
              <div className=" px-4 mb-8">
                <div className="category-banner relative overflow-hidden rounded-lg shadow-lg group">
                  <img
                    src={item.img}
                    alt="Category 1"
                    className=" w-full h-full md:w-[285px] md:h-[200px]"
                  />
                  <div className="absolute inset-0 bg-gray-light bg-opacity-50"></div>
                  <div className="group absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 border-4 px-2 group-hover:border-orange-500 group-hover:text-orange-500">
                      {item.title}
                    </h2>
                    <a
                      href="/"
                      className="bg-primary border  hover:border-orange-500 text-white font-semibold px-4 py-2 rounded-full inline-block"
                    >
                      Shop now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- Popular product section --> */}
      <section id="popular-products">
        <div className="container mx-auto px-4 py-4">
          <h2 className="text-2xl font-bold mb-8">Popular products</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* <!-- Product 1 --> */}
            {popularProducts?.map((product) => (
              <div
                key={product.id}
                className="w-full sm:w-[48%] md:w-[23%] lg:w-[22%]"
              >
                <div className="bg-white rounded-xl shadow-xl p-2 hover:scale-105 duration-300">
                  <a href="#">
                    <img
                      className="p-8 rounded-t-lg h-[300px] w-full object-contain"
                      src={product.image}
                      alt={product.title}
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="text-md font-semibold tracking-tight truncate">
                        {product.title}
                      </h5>
                    </a>
                    <span>
                      {product?.category === "men's clothing"
                        ? "Men"
                        : product?.category === "women's clothing"
                        ? "Women"
                        : product?.category === "jewelery"
                        ? "Accessories"
                        : "Electronics"}
                    </span>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-3xl font-bold">
                        ${product.price}
                      </span>
                      <a
                        href="#"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
      </section>

      {/* <!-- Brand section --> */}
      <section id="brands" className=" py-16 px-4">
        <div className="container mx-auto max-w-screen-xl px-4 ">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-2xl md:text-5xl font-bold mb-4">
              Discover <span className="text-primary">Libraries Utilized</span>
            </h2>
            <p className="my-7">
              Explore the top libraries we utilized in our store
            </p>
          </div>
        </div>
        <div className="flex md:px-32 items-center justify-center w-full">
          {libraries.map((library) => (
            <div>
              <img
                src={library.img}
                alt={library.title}
                className="w-[200px]"
              />
            </div>
          ))}
        </div>
      </section>
      {/* <!-- Banner section --> */}

      <section id="banner" className="relative my-16 ">
        <div
          className={`banner-content container mx-auto px-4 py-20 rounded-lg relative bg-cover bg-center`}
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg "></div>
          <div className="relative flex flex-col items-center justify-center h-full text-center text-white py-20 ">
            <h2 className="text-4xl font-bold mb-4">Welcome to My EShop</h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-primary hover:bg-transparent text-white hover:text-primary border border-transparent hover:border-primary font-semibold px-4 py-2 rounded-full inline-block"
              >
                Shop Now
              </a>
              <a
                href="#"
                className="bg-primary hover:bg-transparent text-white hover:text-primary border border-transparent hover:border-primary font-semibold px-4 py-2 rounded-full inline-block"
              >
                New Arrivals
              </a>
              <a
                href="#"
                className="bg-primary hover:bg-transparent text-white hover:text-primary border border-transparent hover:border-primary font-semibold px-4 py-2 rounded-full inline-block"
              >
                Sale
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Blog section --> */}
      {/* <section className="py-16">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-5xl font-bold mb-4">
            Discover <span className="text-primary">Our</span> Blog
          </h2>
          <p className="my-7">
            Stay updated with the latest trends, tips, and stories in the world
            of fashion
          </p>
        </div>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg">
              <img
                className="object-cover object-center w-full mb-8 rounded-xl"
                src="/assets/images/fashion-trends.jpg"
                alt="blog"
              />
              <h2 className="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
                Fashion Trends
              </h2>
              <h1 className="mb-4 text-2xl font-semibold leading-none tracking-tighter text-gray-dark lg:text-3xl">
                Latest Shirt Trends for 2024
              </h1>
              <p className="flex-grow text-base font-medium leading-relaxed text-gray-txt">
                Explore the hottest shirt trends of 2024. From bold prints to
                classNameic styles, stay ahead of the fashion curve with our
                expert insights.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg">
              <img
                className="object-cover object-center w-full mb-8 rounded-xl"
                src="/assets/images/stylisng-tips.jpg"
                alt="blog"
              />
              <h2 className="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
                Styling Tips
              </h2>
              <h1 className="mb-4 text-2xl font-semibold leading-none tracking-tighter text-gray-dark lg:text-3xl">
                How to Style Your Shirt for Any Occasion
              </h1>
              <p className="flex-grow text-base font-medium leading-relaxed text-gray-txt">
                Learn how to style your shirt for different occasions, whether
                it's a casual day out or a formal event. Get tips from fashion
                experts.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg">
              <img
                className="object-cover object-center w-full mb-8 rounded-xl"
                src="/assets/images/customer-stories.jpg"
                alt="blog"
              />
              <h2 className="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
                Customer Stories
              </h2>
              <h1 className="mb-4 text-2xl font-semibold leading-none tracking-tighter text-gray-dark lg:text-3xl">
                Real Stories from Our Happy Customers
              </h1>
              <p className="flex-grow text-base font-medium leading-relaxed text-gray-txt">
                Read about the experiences of our customers. Discover how our
                shirts have made a difference in their lives and their personal
                style.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Homepage;
