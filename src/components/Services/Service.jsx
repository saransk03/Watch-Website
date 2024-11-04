import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { RiCustomerService2Fill,RiSecurePaymentLine,RiRefund2Fill} from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";

const Service = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`2xl:container mx-auto py-8 ${
          darkMode ? "bg-black" : "bg-white"
        } transition-all duration-300`}
      >
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            className={`flex justify-center items-center border-2 ${
              darkMode ? "border-white" : "border-black"
            } px-3 py-5 rounded-xl gap-3`}
             data-aos="fade-up"
              data-aos-duration="1000"
          >
            <RiCustomerService2Fill className={`text-[60px] ${darkMode? 'text-white':'text-black'}`}/>
            <div className="flex flex-col justify-center items-center">
                <h3 className={`font-museo text-[20px] font-bold ${darkMode? 'text-white':'text-black'}`}>Online Support</h3>
                <p className={`font-museo text-[12px] ${darkMode? 'text-gray-500':'text-gray-600'}`}>24 hours a day </p>
            </div>
          </div>

          <div
            className={`flex justify-center items-center border-2 ${
              darkMode ? "border-white" : "border-black"
            } px-3 py-5 rounded-xl gap-3`}
            data-aos="fade-up"
              data-aos-duration="1100"
          >
            <RiSecurePaymentLine className={`text-[60px] ${darkMode? 'text-white':'text-black'}`}/>
            <div className="flex flex-col justify-center items-center">
                <h3 className={`font-museo text-[20px] font-bold ${darkMode? 'text-white':'text-black'}`}>Secure Payments</h3>
                <p className={`font-museo text-[12px] ${darkMode? 'text-gray-500':'text-gray-600'}`}>Secure payment with PEV</p>
            </div>
          </div>

          <div
            className={`flex justify-center items-center border-2 ${
              darkMode ? "border-white" : "border-black"
            } px-3 py-5 rounded-xl gap-3`}
            data-aos="fade-up"
              data-aos-duration="1200"
          >
            <RiRefund2Fill className={`text-[60px] ${darkMode? 'text-white':'text-black'}`}/>
            <div className="flex flex-col justify-center items-center">
                <h3 className={`font-museo text-[20px] font-bold ${darkMode? 'text-white':'text-black'}`}>Refund Policy</h3>
                <p className={`font-museo text-[12px] ${darkMode? 'text-gray-500':'text-gray-600'}`}>Return within 30 days</p>
            </div>
          </div>

          <div
            className={`flex justify-center items-center border-2 ${
              darkMode ? "border-white" : "border-black"
            } px-3 py-5 rounded-xl gap-3`}
            data-aos="fade-up"
              data-aos-duration="1000"
          >
            <FaShippingFast className={`text-[60px] ${darkMode? 'text-white':'text-black'}`}/>
            <div className="flex flex-col justify-center items-center">
                <h3 className={`font-museo text-[20px] font-bold ${darkMode? 'text-white':'text-black'}`}>Free Shipping</h3>
                <p className={`font-museo text-[12px] ${darkMode? 'text-gray-500':'text-gray-600'}`}>on all orders over &#8377; 1000</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Service;
