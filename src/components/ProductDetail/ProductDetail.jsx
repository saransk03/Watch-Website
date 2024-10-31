import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { ShimmerContentBlock } from "react-shimmer-effects";

const ProductDetail = () => {
  const { darkMode } = useContext(ThemeContext);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true); // Start with loading state as true
  const [data, setData] = useState(null); // Set initial data to null

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        "https://run.mocky.io/v3/fd90c45f-ea41-404f-92a7-50e20b20d7b9"
      );
      const result = await res.json();
      const productId = parseInt(id);
      const product = result.products.find((item) => item.id === productId);
      setData(product);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <ShimmerContentBlock
        title
        text
        cta
        thumbnailWidth={370}
        thumbnailHeight={370}
      />
    )
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
              className={`absolute top-0 left-0 ${
                darkMode ? "bg-[#F2613F]" : "bg-black"
              } px-3 py-3 w-[40px] h-[40px] rounded-[50px] hover:text-[18px] cursor-pointer transition-all duration-300 flex justify-center items-center z-10`}
            >
              <FaArrowLeftLong
                className={`${
                  darkMode ? "text-black" : "text-white"
                } text-[15px]`}
              />
            </Link>
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 relative">
              <div className="shrink-0 max-w-md lg:max-w-lg mx-auto flex justify-center items-center">
                <img className="w-[400px] rounded-lg" src={data.image} alt="" />
              </div>
              <div className="mt-6 sm:mt-8 lg:mt-0">
                <h1
                  className={`md:text-[35px] font-semibold sm:text-2xl font-keania tracking-wide ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {data.model}, {data.color}, {data.gender}
                </h1>
                <p className="text-[15px] font-bold text-gray-500 font-negita tracking-widest mt-2">
                  {data.brand}
                </p>
                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                  <p
                    className={`text-2xl font-extrabold font-museo ${
                      darkMode ? "text-white" : "text-gray-900"
                    }  sm:text-3xl`}
                  >
                    &#8377; {data.price}
                  </p>
                  <div className="flex items-center gap-2 mt-1 sm:mt-0">
                    <div className="flex items-center gap-1">
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
                    <p className="text-sm font-medium font-museo leading-none text-gray-500 dark:text-gray-400">
                      ({data.rating})
                    </p>
                    <a
                      href="#"
                      className="text-[12px] font-museo font-medium leading-none text-gray-600 underline hover:no-underline"
                    >
                      345 Reviews
                    </a>
                  </div>
                </div>
                <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                  <Link
                    to="/Cart"
                    href="#"
                    title=""
                    className={`text-white mt-4 sm:mt-0 ${
                      darkMode
                        ? "bg-[#F2613F] hover:bg-[#481E14]"
                        : "bg-[#481E14] hover:bg-[#F2613F]"
                    } transition-all duration-300  font-medium font-museo rounded-lg text-sm px-5 py-2.5 flex items-center justify-center`}
                    role="button"
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
                  </Link>
                </div>
                <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                <p className="mb-6 text-gray-500 font-museo dark:text-gray-400">
                  {data.description}
                </p>
                <p className="text-gray-500 font-museo dark:text-gray-400">
                  Two Thunderbolt USB 4 ports and up to two USB 3 ports.
                  Ultrafast Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched
                  Magic Mouse with Magic Keyboard or Magic Keyboard with Touch
                  ID.
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
