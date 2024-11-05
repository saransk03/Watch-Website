import { useContext } from "react";
import { assests } from "../../../public/assests/assests";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { Link } from "react-router-dom";

const Ads2 = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="2xl:container mx-auto">
        <div
          className={`w-[90%] md:w-[80%] ${
            darkMode ? "bg-[#F2613F]" : "bg-black"
          } rounded-[20px] mx-auto grid grid-cols-1`}
          data-aos="flip-up"
          data-aos-duration="1000"
        >
          <div className="flex justify-center items-center h-[200px] lg:h-[300px] mx-auto">
            <div
              className={` flex justify-center border-2 ${
                darkMode ? "border-black" : "border-white"
              } h-[160px] lg:h-[260px] w-[90%] items-center rounded-[18px] mx-auto px-2 lg:gap-12`}
              data-aos="flip-up"
              data-aos-duration="1000"
            >
              <img
                src={assests.ads0}
                alt=""
                className="w-[150px] lg:w-[280px]"
                data-aos="flip-left"
                data-aos-duration="1100"
              />
              <div className="flex flex-col justify-center items-center gap-2">
                <h3
                  className="font-negita tracking-wider text-white text-center text-[15px] lg:text-[30px] font-bold"
                  data-aos="zoom-in"
                  data-aos-duration="1100"
                >
                  New Trending Collection
                </h3>
                <p
                  className={`font-museo tracking-wider ${
                    darkMode ? "text-black" : "text-[#F2613F]"
                  } text-[10px] lg:text-[15px] text-center font-bold`}
                  data-aos="zoom-in"
                  data-aos-duration="1100"
                >
                  Sales Off 20% All Products
                </p>
                <Link to={"/products"}>
                  <button
                    className={`border-2 ${
                      darkMode
                        ? "border-black text-black"
                        : "border-[#F2613F] text-[#F2613F]"
                    } font-museo text-[8px] lg:text-[14px] font-bold px-3 py-2 bg-transparent mt-2 hover:text-[7px] hover:lg:text-[13px] transition-all duration-300`}
                    data-aos="zoom-in"
                    data-aos-duration="1100"
                  >
                    Shopping Now
                  </button>
                </Link>
              </div>
              <img
                src={assests.ads3}
                alt=""
                className="hidden lg:block lg:w-[250px] px-4 rounded-lg"
                data-aos="flip-right"
                data-aos-duration="1100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ads2;
