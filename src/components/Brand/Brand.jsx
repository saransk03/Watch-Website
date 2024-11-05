import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { assests } from "../../../public/assests/assests"

const Brand = () => {
  const {darkMode} = useContext(ThemeContext)
  return (
    <>
      <div className="2xl:container mx-auto py-6">
        <div className="w-[90%] mx-auto grid grid-cols-1 gap-4">
          <div className="flex justify-center items-center py-4">
            <h1 className={`${darkMode? 'text-white':'text-black'} font-negita font-bold text-[30px]`} data-aos="zoom-out-up"
              data-aos-duration="1000">Brand We Love</h1>
          </div>
          <div className="brand-wrapper" data-aos="flip-left"
              data-aos-duration="1000">
            <div className="brand brand-1 flex flex-col justify-center items-center py-5 px-6 bg-slate-200 rounded-[15px]">
              <img src={assests.rolex} className="object-contain h-[40px]"/>
            </div>
            <div className="brand brand-2 flex flex-col justify-center items-center py-5 px-6 bg-slate-200 rounded-[15px]">
              <img src={assests.omega} className="object-contain h-[70px]"/>
            </div>
            <div className="brand brand-3 flex flex-col justify-center items-center py-5 px-6 bg-slate-200 rounded-[15px]">
              <img src={assests.cartier} className="object-contain h-[75px]"/>
            </div>
            <div className="brand brand-4 flex flex-col justify-center items-center py-5 px-6 bg-slate-200 rounded-[15px]">
              <img src={assests.tagheuer} className="object-contain h-[55px]"/>
            </div>
            <div className="brand brand-5 flex flex-col justify-center items-center py-5 px-6 bg-slate-200 rounded-[15px]">
              <img src={assests.skagen} className="object-contain h-[55px]"/>
            </div>
            <div className="brand brand-6 flex flex-col justify-center items-center py-5 px-6 bg-slate-200 rounded-[15px]">
              <img src={assests.tissot} className="object-contain h-[30px]"/>
            </div>
          </div>

          <div className="brand-wrapper" data-aos="flip-right"
              data-aos-duration="1000">
            <div className="brand2 brand-1 flex flex-col justify-center items-center py-5 px-6 bg-slate-200 rounded-[15px]">
              <img src={assests.casio} className="object-contain h-[40px]"/>
            </div>
            <div className="brand2 brand-2 flex flex-col justify-center items-center py-5 px-6 bg-slate-200 rounded-[15px]">
              <img src={assests.fossil} className="object-contain h-[60px]"/>
            </div>
            <div className="brand2 brand-3 flex flex-col justify-center items-center py-5 px-6 bg-slate-200 rounded-[15px]">
              <img src={assests.michael} className="object-contain h-[75px]"/>
            </div>
            <div className="brand2 brand-4 flex flex-col justify-center items-center py-5 px-6 bg-slate-200 rounded-[15px]">
              <img src={assests.citizen} className="object-contain h-[55px]"/>
            </div>
            <div className="brand2 brand-5 flex flex-col justify-center items-center py-5 px-6 bg-slate-200 rounded-[15px]">
              <img src={assests.seiko} className="object-contain h-[55px]"/>
            </div>
            <div className="brand2 brand-6 flex flex-col justify-center items-center py-5 px-6 bg-slate-200 rounded-[15px]">
              <img src={assests.breitling} className="object-contain h-[55px]"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
