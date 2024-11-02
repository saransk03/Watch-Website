import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Contexts/ThemeContext";

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="container mx-auto py-2">
        <div className={`w-[90%] md:w-[90%] video-back h-[180px] lg:h-[450px] md:mb-[20px] overflow-hidden rounded-[20px] relative mx-auto grid grid-cols-1 ${darkMode? 'shadow-sm shadow-[#a93c24]':''}`}>
          <video autoPlay loop muted playsInline>
            <source
              type="video/mp4"
              src="https://ik.imagekit.io/saransk03/Watch%20Website/Background.mp4"
            />
          </video>
          <div className="flex flex-col justify-center items-center">
            <h1
              className="text-white
              } font-[900] font-negita text-[25px] md:text-[50px] z-10"
            >
              Timeless Elegance
            </h1>
            <p
              className="text-white font-[600] font-negita text-[10px] md:text-[15px] z-10"
            >
              " Elevate Your Look with Every Tick "
            </p>
            <Link to={"/products"} className="z-20">
              <button className="bg-[#481E14] text-white px-4 py-1.5 rounded-lg text-[10px] md:text-[14px] font-bold font-museo mt-2 md:mt-4">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
