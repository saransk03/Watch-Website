import { useContext, useEffect, useState } from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import ProductCard from "./ProductCard";
import { ThemeContext } from "../../Contexts/ThemeContext";
import UseFetchData from "../../Hooks/UseFetchData";

const Product = () => {
  const { darkMode } = useContext(ThemeContext);
  const { data, isLoading } = UseFetchData();
  console.log(data.gender)

  const [selectfilter, setSelectFilter] = useState([]);
  const [filterItems, setFilterItems] = useState(data);
  const category = ["men", "women", "unisex"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectfilter.includes(selectedCategory)) {
      let filters = selectfilter.filter((el) => el !== selectedCategory);
      setSelectFilter(filters);
    } else {
      setSelectFilter([...selectfilter, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItemsFunction();
  }, [selectfilter]);

  const filterItemsFunction = () => {
    if (selectfilter.length > 0) {
      let tempItems = selectfilter.map((selectedCategory) => {
        let temp = data.filter((data) => data.gender === selectedCategory);
        return temp;
      });
      setFilterItems(tempItems.flat());
    } else {
      setFilterItems([...data]);
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
              {category.map((category, id) => (
                <button
                  onClick={() => handleFilterButtonClick(category)}
                  className={` ${
                    selectfilter?.includes(category) ? "active" : "bg-gray-500"
                  } category-btn px-3 py-1 text-[12px] font-museo text-white capitalize font-normal rounded-[30px]`}
                  key={id}
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
