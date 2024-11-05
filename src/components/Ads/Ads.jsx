import { useContext } from "react";
import { assests } from "../../../public/assests/assests";
import { ThemeContext } from "../../Contexts/ThemeContext";

const Ads = () => {
        const {darkMode} = useContext(ThemeContext)
  return (
    <>
        <div className="2xl:container mx-auto py-2">
            <div className="w-[85%] md:w-[80%] mx-auto grid grid-cols-1">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className={` ${darkMode? 'border-2 border-white':'bg-black'} transition-all duration-300 w-[300px] h-[150px] md:w-[600px] md:h-[300px] rounded-[20px] gap-5 flex justify-center items-center px-[3rem]" data-aos="fade-right"
              data-aos-duration="1000`}
              data-aos="fade-right"
              data-aos-duration="1000">
                      <div className="flex flex-col justify-center items-start">
                              <h1 className="font-keania text-white text-[30px] md:text-[55px] font-[800] text-start" data-aos="fade-right"
                      data-aos-duration="1000">Explore</h1>
                              <p className=" font-museo text-white text-[16px] md:text-[25px] font-[600] text-start mt-[-6px] md:mt-[-12px]" data-aos="fade-right"
                      data-aos-duration="1000">Lifestyle</p>
                              <p className=" font-museo text-white text-[8px] md:text-[12px] font-[600] text-start leading-1" data-aos="fade-right"
                      data-aos-duration="1000">start @1200</p>
                      </div>
                      <img src={assests.ads} alt="" className="lg:w-[250px] w-[120px]" data-aos="fade-right"
              data-aos-duration="1000"/>
                    </div>
                    <div className="bg-[#481E14] w-[300px] h-[150px] md:w-[600px] flex  justify-around items-center md:h-[300px] rounded-[20px]" data-aos="fade-left"
              data-aos-duration="1000">
                      <div className="flex flex-col pl-[30px] md:pl-[4rem]" data-aos="fade-right"
              data-aos-duration="1000">
                        <h1 className="font-keania text-white text-[30px] md:text-[55px] font-[800] leading-7 md:leading-[48px]" data-aos="fade-left"
              data-aos-duration="1000">New Arrival</h1>
                        <p className=" font-museo text-gray-400 text-[10px] md:text-[15px] font-[800] py-2" data-aos="fade-right"
              data-aos-duration="1000">
                           Best carbon pollynet <br />
                           belt with smart dial.
                        </p>
                      </div>
                      <img src={assests.beltads} alt="" className="lg:w-[350px] w-[160px] rotate-90" data-aos="fade-left"
              data-aos-duration="1000"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Ads