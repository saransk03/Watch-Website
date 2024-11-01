import { useContext } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Contexts/ThemeContext";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`2xl:container mx-auto ${
          darkMode ? "bg-[#9B3922]" : "bg-black"
        } py-4 transition-all duration-300`}
      >
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col justify-start items-start px-3 py-4">
            <h1
              className={`${
                darkMode ? "text-black" : "text-white"
              } font-keania font-[700] text-[20px] tracking-widest`}
            >
              Newsletter
            </h1>
            <div className="py-1">
              <p
                className={`${
                  darkMode ? "text-[#321515]" : "text-[#a93c24]"
                } text-[10px] font-museo py-1 font-[500]`}
              >
                Subscribe to receive updates, access to exclusive <br />
                deals, and more.
              </p>
              <form className="flex flex-col mt-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className={`bg-transparent border-[2px] text-white font-museo ${
                    darkMode ? "border-black" : "border-[#481E14]"
                  }  px-3 py-1.5 outline-none text-[14px]`}
                />
                <button
                  type="submit"
                  className={`${
                    darkMode
                      ? "bg-[#481E14] hover:bg-[#F2613F]" 
                      : "bg-[#F2613F] hover:bg-[#481E14]"
                  } transition-all duration-300 px-2 py-2 w-[100px] text-[13px] font-museo my-3 text-white`}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start px-3 py-4">
            <h1
              className={`${
                darkMode ? "text-black" : "text-white"
              } font-keania font-[700] text-[20px] tracking-widest`}
            >
              Information
            </h1>
            <div className="flex flex-col gap-5 mt-4">
              <Link to={"/about-us"}>
                <p className="text-[10px] font-museo hover:text-white text-gray-400 cursor-pointer">
                  About Us
                </p>
              </Link>
              <>
                <p className="text-[10px] font-museo hover:text-white text-gray-400 cursor-pointer">
                  FAQs
                </p>
              </>
              <>
                <p className="text-[10px] font-museo hover:text-white text-gray-400 cursor-pointer">
                  Return Policy
                </p>
              </>
              <>
                <p className="text-[10px] font-museo hover:text-white text-gray-400 cursor-pointer">
                  Privacy Policy
                </p>
              </>
              <>
                <p className="text-[10px] font-museo hover:text-white text-gray-400 cursor-pointer">
                  Terms of Service
                </p>
              </>
              <>
                <p className="text-[10px] font-museo hover:text-white text-gray-400 cursor-pointer">
                  Refund policy
                </p>
              </>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start px-3 py-4">
            <h1
              className={`${
                darkMode ? "text-black" : "text-white"
              } font-keania font-[700] text-[20px] tracking-widest`}
            >
              Get In Touch
            </h1>
            <div className="flex flex-col gap-5 mt-4">
              <>
                <p className="text-[10px] font-museo hover:text-white text-gray-400 cursor-pointer">
                  Contact Us
                </p>
              </>
              <>
                <p className="text-[10px] font-museo hover:text-white text-gray-400 cursor-pointer">
                  Our Boutiques
                </p>
              </>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start px-3 py-4">
            <h1
              className={`${
                darkMode ? "text-black" : "text-white"
              } font-keania font-[700] text-[20px] tracking-widest`}
            >
              Follow Us
            </h1>
            <div className="flex gap-5 mt-4">
              <>
                <FaInstagram className="text-[13px] font-museo hover:text-white text-gray-400 cursor-pointer" />
              </>
              <>
                <FaFacebookF className="text-[13px] font-museo hover:text-white text-gray-400 cursor-pointer" />
              </>
              <>
                <FaTwitter className="text-[13px] font-museo hover:text-white text-gray-400 cursor-pointer" />
              </>
              <>
                <FaLinkedinIn className="text-[13px] font-museo hover:text-white text-gray-400 cursor-pointer" />
              </>
              <>
                <FaYoutube className="text-[13px] font-museo hover:text-white text-gray-400 cursor-pointer" />
              </>
              <>
                <FaThreads className="text-[13px] font-museo hover:text-white text-gray-400 cursor-pointer" />
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
