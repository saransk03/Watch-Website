import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ThemeContext } from "../../Contexts/ThemeContext";
import UseFetchData from "../../Hooks/UseFetchData";
import { Watch } from 'react-loader-spinner'

const Product = () => {
  const { darkMode } = useContext(ThemeContext);
  const { data, isLoading } = UseFetchData();

  // const category = ["Men", "Women", "Unisex"];

  // const [selectfilter, setSelectFilter] = useState([]);
  // const [filterItems, setFilterItems] = useState(data);

  // useEffect(() => {
  //   setFilterItems(data); // Update filter items whenever data changes
  // }, [data]);

  // useEffect(() => {
  //   productFilter();
  // }, [selectfilter, data]);

  // const handleFilterButtonClick = (category) => {
  //   // Check if index is already selected
  //   if (selectfilter.includes(category)) {
  //     // If it's selected, remove it
  //     setSelectFilter(selectfilter.filter((item) => item !== category));
  //     console.log(category, "button clicked remove");
  //   } else {
  //     // If it's not selected, add it
  //     setSelectFilter([...selectfilter, category]);
  //     console.log(category, "button clicked  ");
  //   }
  // };

  // const productFilter = () => {
  //   if (selectfilter.length === 0) {
  //     setFilterItems(data); // Show all items if no filters selected
  //   } else {
  //     const updatedItems = data.filter((item) => {
  //       return selectfilter.includes(item.gender); // Assuming `gender` is the key in `data` for category

  //     });
  //     setFilterItems(updatedItems);
  //   }
  // };

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
        <div
          className={`2xl:container mx-auto ${
            darkMode ? "bg-black" : "bg-white"
          } transition-all duration-300`}
        >
          <div className="w-[95%] lg:w-[80%] mx-auto grid grid-cols-1 py-3">
            <div className="flex flex-col justify-center items-center">
              <h1
                className={`${
                  darkMode ? "text-white" : "text-black"
                } font-[900] font-negita text-[20px] lg:text-[30px] tracking-widest`}
                data-aos="zoom-out-down"
                data-aos-duration="1000"
              >
                Our Products
              </h1>
            </div>

            {/* <div className="flex justify-start items-center gap-4 py-4 ml-6">
              {category.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleFilterButtonClick(category)}
                  className={` ${
                    selectfilter.includes(category) ? "active" : "bg-gray-500"
                  } category-btn px-3 py-1 text-[12px] font-museo text-white capitalize font-normal rounded-[30px]`}
                >
                  {category}
                </button>
              ))}
            </div> */}

            <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-7 py-5">
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
