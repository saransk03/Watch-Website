import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline, MdOutlineSend } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`2xl:container mx-auto py-3 ${
          darkMode ? "bg-black" : "bg-white"
        } `}
      >
        <div
          className={` w-[90%] md:w-[80%] mx-auto grid grid-cols-1 ${
            darkMode ? "bg-[#9B3922]" : "bg-slate-400"
          } rounded-[15px]`}
          data-aos="fade-up"
              data-aos-duration="1000"
        >
          <div className="flex flex-col justify-center items-center rounded-lg h-[100px] md:h-[200px]">
            <h1
              className={`${
                darkMode ? "text-white" : "text-black"
              } font-[900] font-negita text-[20px] md:text-[30px] tracking-widest`}
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Contact Us
            </h1>
            <p
              className={`${
                darkMode ? "text-white" : "text-black"
              } font-museo text-[8px] text-center md:text-[12px]`}
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              For those who value time as much as we do. Connect with us and
              keep your moments ticking.
            </p>
          </div>

          <div
            className={`flex flex-col md:flex-row justify-center items-center ${
              darkMode ? "bg-black" : "bg-slate-300"
            }  rounded-t-[40px] rounded-b-[15px] px-5 py-8 gap-[50px]`}
            data-aos="fade-up"
              data-aos-duration="1000"
          >
            <div className="flex flex-col justify-center items-start md:w-[350px] gap-3">
              <div className="flex flex-col justify-center items-start">
                <h2
                  className={`${
                    darkMode ? "text-white" : "text-black"
                  } font-museo text-[25px] font-medium`}
                  data-aos="fade-right"
              data-aos-duration="1200"
                >
                  Get In Touch
                </h2>
                <p
                  className={`${
                    darkMode ? "text-gray-200" : "text-gray-500"
                  } font-museo text-[10px]`}
                  data-aos="fade-right"
              data-aos-duration="1200"
                >
                  Keeping you connected to time. Reach out, brand let’s start a
                  timeless journey together.
                </p>
              </div>
              <div className="flex justify-center items-center gap-3" >
                <div className="w-[30px] h-[30px] rounded-[30px] flex justify-center items-center bg-[#F2613F]" data-aos="fade-right"
              data-aos-duration="1200">
                  <HiOutlineLocationMarker className="text-[18px] text-white" />
                </div>
                <div className="flex flex-col justify-center items-start" data-aos="fade-right"
              data-aos-duration="1200">
                  <p
                    className={`font-museo font-semibold text-[12px] ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Address
                  </p>
                  <p
                    className={`font-museo text-[10px] ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    No.146, Main Road, Chennai
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-3">
                <div className="w-[30px] h-[30px] rounded-[30px] flex justify-center items-center bg-[#F2613F]" data-aos="fade-right"
              data-aos-duration="1200">
                  <FiPhone className="text-[16px] text-white" />
                </div>
                <div className="flex flex-col justify-center items-start" data-aos="fade-right"
              data-aos-duration="1200">
                  <p
                    className={`font-museo font-semibold text-[12px] ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Phone Number
                  </p>
                  <p
                    className={`font-museo text-[10px] ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    +91 9876543210
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-3">
                <div className="w-[30px] h-[30px] rounded-[30px] flex justify-center items-center bg-[#F2613F]" data-aos="fade-right"
              data-aos-duration="1200">
                  <MdOutlineMailOutline className="text-[18px] text-white" />
                </div>
                <div className="flex flex-col justify-center items-start" data-aos="fade-right"
              data-aos-duration="1200">
                  <p
                    className={`font-museo font-semibold text-[12px] ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Email
                  </p>
                  <p
                    className={`font-museo text-[10px] ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    leowatches03@gmail.com
                  </p>
                </div>
              </div>
              <hr />
              <h2
                className={`${
                  darkMode ? "text-white" : "text-black"
                } font-museo text-[18px] font-medium`}
                data-aos="fade-right"
              data-aos-duration="1200"
              >
                Follow Us
              </h2>
              <div className="flex justify-start items-center gap-3" data-aos="fade-right"
              data-aos-duration="1200">
                <div className="w-[30px] h-[30px] rounded-[30px] flex justify-center items-center hover:bg-[#a93c24] bg-[#F2613F] transition-all duration-200" >
                  <FaInstagram className="text-[16px] text-white" />
                </div>
                <div className="w-[30px] h-[30px] rounded-[30px] flex justify-center items-center hover:bg-[#a93c24] bg-[#F2613F] transition-all duration-200">
                  <FaFacebookF className="text-[16px] text-white" />
                </div>
                <div className="w-[30px] h-[30px] rounded-[30px] flex justify-center items-center hover:bg-[#a93c24] bg-[#F2613F] transition-all duration-200">
                  <FaTwitter className="text-[16px] text-white" />
                </div>
                <div className="w-[30px] h-[30px] rounded-[30px] flex justify-center items-center hover:bg-[#a93c24] bg-[#F2613F] transition-all duration-200">
                  <FaLinkedinIn className="text-[16px] text-white" />
                </div>
              </div>
            </div>

            <div
              className={`${
                darkMode ? "bg-white" : "bg-white"
              } rounded-[15px] flex flex-col justify-center items-center md:w-[350px] px-3 py-6 gap-4`}
              data-aos="flip-right"
              data-aos-duration="1200"
            >
              <h2 className="font-bold font-museo text-[20px]" data-aos="fade-right"
              data-aos-duration="1200">
                Send a Message
              </h2>
              <form className="flex flex-col justify-center items-center gap-4 w-[260px] md:w-[300px]">
                <div className="flex flex-col justify-center items-start  gap-2" data-aos="fade-right"
              data-aos-duration="1200">
                  <label
                    htmlFor="name"
                    className="text-[16px] font-museo font-[500]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="outline-none border-b-2 bg-transparent font-museo text-[12px] font-medium border-gray-400 lg:w-[280px] "
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="flex flex-col justify-center items-start  gap-2" data-aos="fade-right"
              data-aos-duration="1200">
                  <label
                    htmlFor="email"
                    className="text-[16px] font-museo font-[500]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="outline-none border-b-2 bg-transparent font-museo text-[12px] font-medium border-gray-400  lg:w-[280px]"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="flex flex-col justify-center items-start gap-2" data-aos="fade-right"
              data-aos-duration="1200">
                  <label
                    htmlFor="message"
                    className="text-[16px] font-museo font-[500]"
                  >
                    Meassage
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    className="outline-none border-b-2 bg-transparent font-museo text-[12px] resize-none font-medium border-gray-400  lg:w-[280px]"
                    placeholder="Ask Anything"
                  />
                </div>
                <button className="flex items-center justify-center gap-1 rounded-[30px] hover:bg-[#a93c24] bg-[#F2613F] px-2 py-2 mt-3 lg:w-[80%] text-[12px] text-white font-museo font-bold" data-aos="fade-right"
              data-aos-duration="1200">
                  Send Message
                  <MdOutlineSend className="text-white" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-auto grid grid-cols-1 py-4">
          <div className="flex justify-center items-center py-3" data-aos="fade-up"
              data-aos-duration="1200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.574980644898!2d80.27673517460515!3d13.062703712875331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5268a0db9f748d%3A0x445b3afd24586ce5!2sM.%20A.%20Chidambaram%20Stadium!5e0!3m2!1sen!2sin!4v1730544881342!5m2!1sen!2sin"
              width="1000"
              height="400"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
