import React, { useContext } from "react";
import UseFetchData from "../../Hooks/UseFetchData";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { GiRoundStar } from "react-icons/gi";
import { Link } from "react-router-dom";

const FeaturedCollection = () => {
    const { isLoading, data } = UseFetchData();
    const {darkMode} = useContext(ThemeContext)

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="2xl:container mx-auto py-4">
            <div className="w-[80%] mx-auto grid grid-cols-1">
                <div className="flex justify-center items-center">
                    <h1 className={`${darkMode? 'text-white':'text-black'} font-negita font-bold text-[30px]`}>Featured Collection</h1>
                </div>
            </div>
            <div className="w-[80%] mx-auto grid grid-cols-1 py-4">
                <div className="flex flex-grow justify-evenly items-center gap-5">
                    {data.slice(10, 15).map((product) => (
                        <div className={`bg-transparent border-[2px] rounded-md py-3 px-3 w-[180px] md:w-[250px] relative hover:scale-105 hover:shadow-2xl ${darkMode? 'shadow-white' : 'shadow-black'} transition-all duration-300`}>
                        <img src={product.image} alt="" className="rounded-md " />
                        <h3 className={`font-museo text-start font-[600] text-[15px] mt-1 ${darkMode? 'text-white': 'text-black'}`}>
                          {product.model}, {product.color}
                        </h3>
                        <p className="text-start text-[10px] font-negita capitalize font-[800] text-gray-500 tracking-widest ">
                          {product.brand}
                        </p>
                        <p className="absolute top-3  left-3 bg-[#481E14] text-white px-2 py-1 rounded-sm text-[10px] font-museo">
                          {product.gender}
                        </p>
                        <div className="flex justify-between items-center mt-1">
                          <p className={`font-[600] font-museo tracking-tight text-[13px] ${darkMode? 'text-white': 'text-black'}`}>
                            &#8377; {product.price}
                          </p>
                          <p className={`flex items-center gap-1 font-[600] font-museo tracking-tight text-[13px] ${darkMode? 'text-white': 'text-black'}`}>
                            <GiRoundStar className="text-[11px] " /> {product.rating}
                          </p>
                        </div>
                        <Link
                          to={`/product-detail/${product.id}`}
                          className=" flex justify-center items-center"
                        >
                          <button className="bg-[#9B3922] mt-2 font-museo font-[500] text-white rounded-md w-[100%] py-2 text-[12px]">
                            More Info
                          </button>
                        </Link>
                      </div>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-5">
                    <Link to={"/products"}>
                      <button className="bg-[#481E14] px-4 py-2 font-museo text-white rounded-md">
                          More Products
                      </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCollection;
