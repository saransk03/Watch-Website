import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { ShimmerContentBlock } from "react-shimmer-effects";
import { CartContext } from "../../Contexts/UseCartContext";
import { Watch } from "react-loader-spinner";

const ProductDetail = () => {
  const { darkMode } = useContext(ThemeContext);
  const { cart, addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true); // Start with loading state as true
  const [data, setData] = useState([]); // Set initial data to null
  console.log("cart",cart)
  console.log("data", data)
  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://my-json-server.typicode.com/saransk03/watch-json/products");
      const result = await res.json();
      const productId = parseInt(id);
      const product = result.find((item) => item.id == productId);
      setData(product);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div
      className={`2xl:container mx-auto ${darkMode? 'bg-black':'bg-white'}`}>
      <div className="w-[90%] h-screen mx-auto grid grid-cols-1 py-3">
        <div className="flex justify-center items-center">
          <Watch
            visible={true}
            height="100"
            width="100"
            radius="48"
            color="#F2613F"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </div>
    </div>
    );
  } else {
    return (
      <>
        <section
          className={`py-8 ${
            darkMode ? "bg-black" : "bg-white"
          } transition-all duration-300 md:py-16 antialiased`}
        >
          <div className="max-w-screen-xl md:w-[80%] px-4 mx-auto 2xl:px-0 relative">
            <Link
              to={"/products"}
              className={`absolute top-2 left-6 md:top-0 md:left-0 ${
                darkMode ? "bg-[#F2613F]" : "bg-black"
              } px-3 py-3 w-[40px] h-[40px] rounded-[50px] hover:text-[18px] cursor-pointer transition-all duration-300 flex justify-center items-center z-10`}
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <FaArrowLeftLong
                className={`${
                  darkMode ? "text-black" : "text-white"
                } text-[15px]`}
              />
            </Link>
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 relative">
              <div className="shrink-0 max-w-md lg:max-w-lg mx-auto flex justify-center items-center" data-aos="fade-right"
              data-aos-duration="1500">
                <img className="w-[400px] rounded-lg" src={data.image} alt="" />
              </div>
              <div className="mt-6 sm:mt-8 lg:mt-0">
                <h1
                  className={`md:text-[35px] font-semibold sm:text-2xl font-keania tracking-wide ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                  data-aos="fade-left"
              data-aos-duration="1500"
                >
                  {data.model}, {data.color}, {data.gender}
                </h1>
                <p className="text-[15px] font-bold text-gray-500 font-negita tracking-widest mt-2" data-aos="fade-left"
              data-aos-duration="1500">
                  {data.brand}
                </p>
                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                  <p
                    className={`text-2xl font-extrabold font-museo ${
                      darkMode ? "text-white" : "text-gray-900"
                    }  sm:text-3xl`}
                    data-aos="fade-left"
              data-aos-duration="1500"
                  >
                    &#8377; {data.price}
                  </p>
                  <div className="flex items-center gap-2 mt-1 sm:mt-0">
                    <div className="flex items-center gap-1" data-aos="fade-left"
              data-aos-duration="1500">
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium font-museo leading-none text-gray-500 dark:text-gray-400" data-aos="fade-left"
              data-aos-duration="1500">
                      ({data.rating})
                    </p>
                    <a
                      href="#"
                      className="text-[12px] font-museo font-medium leading-none text-gray-600 underline hover:no-underline"
                      data-aos="fade-left"
              data-aos-duration="1500"
                    >
                      345 Reviews
                    </a>
                  </div>
                </div>
                <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                  <Link to={"/cart"}>
                    <button
                      onClick={() => addToCart(data)}
                      className={`text-white mt-4 sm:mt-0 ${
                        darkMode
                          ? "bg-[#F2613F] hover:bg-[#481E14]"
                          : "bg-[#481E14] hover:bg-[#F2613F]"
                      } transition-all duration-300  font-medium font-museo rounded-lg text-sm px-5 py-2.5 flex items-center justify-center`}
                      role="button"
                      data-aos="fade-left"
                data-aos-duration="1500"
                    >
                      <svg
                        className="w-5 h-5 -ms-2 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                        />
                      </svg>
                      Add to cart
                    </button>
                  </Link>
                </div>
                <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" data-aos="fade-left"
              data-aos-duration="1500"/>
                <p className="mb-6 text-gray-500 font-museo dark:text-gray-400" data-aos="fade-left"
              data-aos-duration="1500">
                  {data.description}
                </p>
                <p className="text-gray-500 font-museo dark:text-gray-400" data-aos="fade-left"
              data-aos-duration="1500">
                  A premium watch combines luxury, craftsmanship, and timeless
                  design, often made with high-quality materials and intricate
                  mechanisms. It serves not only as a timepiece but as a status
                  symbol, reflecting style and sophistication. These watches are
                  known for their durability, precision, and the artistry that
                  goes into each detail.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default ProductDetail;
