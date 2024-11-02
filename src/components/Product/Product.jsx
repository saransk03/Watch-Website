import { useContext, useEffect, useState } from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import ProductCard from "./ProductCard";
import { ThemeContext } from "../../Contexts/ThemeContext";
import UseFetchData from "../../Hooks/UseFetchData";

const Product = () => {
  const { darkMode } = useContext(ThemeContext);
  const { data, isLoading } = UseFetchData();
  const genders = ["men", "women", "unisex"]

  const [selectfilter, setSelectFilter] = useState([]);

  const handleFilterButtonClick = (index) => {
        // Check if index is already selected
    if (selectfilter.includes(index)) {
      // If it's selected, remove it
      setSelectFilter(selectfilter.filter(item => item !== index));
    } else {
      // If it's not selected, add it
      setSelectFilter([...selectfilter, index]);
    }
  };

  if (isLoading) {
    return (
      <div
        className={`2xl:container mx-auto ${
          darkMode ? "bg-black" : "bg-white"
        } transition-all duration-300`}
      >
        <div className="w-[90%] mx-auto grid grid-cols-1 py-3">
          <ShimmerSimpleGallery card imageHeight={300} caption />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div
          className={`2xl:container mx-auto ${
            darkMode ? "bg-black" : "bg-white"
          } transition-all duration-300`}
        >
          <div className="w-[80%] mx-auto grid grid-cols-1 py-3">
            <div className="flex flex-col justify-center items-center">
              <h1
                className={`${
                  darkMode ? "text-white" : "text-black"
                } font-[900] font-negita text-[30px] tracking-widest`}
              >
                Our Products
              </h1>
            </div>

            <div className="flex justify-start items-center gap-4 py-4 ml-6">
              {genders.map((category,index)=>(
                  <button
                  key={index}
                  onClick={() => handleFilterButtonClick(index)}
                  className={` ${
                    selectfilter.includes(index)? "active" : "bg-gray-500"
                  } category-btn px-3 py-1 text-[12px] font-museo text-white capitalize font-normal rounded-[30px]`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center items-center gap-7 py-5">
              {data.map((items) => {
                return <ProductCard key={items.id} product={items} />;
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Product;
