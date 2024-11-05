import { useContext } from "react";
import { assests } from "../../../public/assests/assests";
import { ThemeContext } from "../../Contexts/ThemeContext";

const About = () => {

  const {darkMode} = useContext(ThemeContext)

  return (
    <>
      <div className={`2xl:container mx-auto py-5 ${darkMode? 'bg-black':'bg-white'} transition-all duration-300`}>
        <div className="w-[90%] md:w-[70%] mx-auto grid grid-cols-1">
          <div className="flex flex-col justify-center items-center">
            <h1 className={`${darkMode?'text-white':'text-black'} font-[900] font-negita text-[30px] tracking-widest`} data-aos="fade-up"
              data-aos-duration="1000">
              About us
            </h1>
            <img
              src={assests.showroom}
              alt="showroom-img"
              className="w-[100%] py-2"
              data-aos="flip-left"
              data-aos-duration="1000"
            />
          </div>
            <div className="flex flex-col justify-center items-start">
              <p className={`${darkMode?'text-white':'text-black'} text-[12px] font-museo py-3`} data-aos="fade-right"
              data-aos-duration="1200">
                Welcome to Leo Watches, where elegance meets precision. We create
                watches that go beyond mere timekeeping; each piece is a statement
                of sophistication, crafted for those who value exceptional quality
                and refined style. At Leo Watches, we combine timeless design with
                modern innovation, producing watches that are as durable as they
                are exquisite.
              </p>
              <p className={`${darkMode?'text-white':'text-black'} text-[12px] font-museo py-3`} data-aos="fade-right"
              data-aos-duration="1200">
                Our commitment to quality means using only the finest
                materials—premium stainless steel, sapphire crystal, and genuine
                leather—ensuring every Leo watch is built to endure and impress.
                Each timepiece undergoes rigorous testing by master watchmakers,
                blending classic craftsmanship with advanced technology for
                perfect accuracy and performance.
              </p>
              <p className={`${darkMode?'text-white':'text-black'} text-[12px] font-museo py-3`} data-aos="fade-right"
              data-aos-duration="1200">
                Our collections offer versatile designs, from classic to
                contemporary, crafted to suit any occasion. Every Leo watch is a
                true reflection of personal style, whether for daily wear or
                special moments..
              </p>
  
              <div className="flex flex-col py-3">
                <h1 className={`${darkMode?'text-[#F2613F]':'text-black'} font-[900] font-negita text-[20px] tracking-widest`} data-aos="fade-right"
              data-aos-duration="1200">
                  OUR VALUES
                </h1>
                <p className={`${darkMode?'text-white':'text-black'} text-[12px] font-museo py-3`} data-aos="fade-right"
              data-aos-duration="1200">
                  We believe in providing a simple, personalized and transparent
                  shopping experience to all clients along with the finest quality
                  of customer service. Our team is a selection of trained and
                  experienced individuals that assist one in making luxury
                  accessible and approachable with an overall knowledgeable
                  shopping experience. We are more like a family than a company
                  and we aim to make our clients feel equally a part of this
                  family. Our core values and beliefs stem from the mindset of a
                  simple phrase,
                  <br />
                  <br />
                  "We grow, You grow."
                </p>
              </div>
  
              <div className="flex flex-col py-3">
                <h1 className={`${darkMode?'text-[#F2613F]':'text-black'} font-[900] font-negita text-[20px] tracking-widest`} data-aos="fade-right"
              data-aos-duration="1200">
                  MISSION STATEMENT
                </h1>
                <p className={`${darkMode?'text-white':'text-black'} text-[12px] font-museo py-3`} data-aos="fade-right"
              data-aos-duration="1200">
                  To provide the most seamless shopping experience to luxury watch
                  buyers through the provision of various services such as
                  in-boutique service, home shopping and the most advanced
                  omnichannel online shopping platform for luxury watches.
                </p>
              </div>
  
              <div className="flex flex-col py-3">
                <h1 className={`${darkMode?'text-[#F2613F]':'text-black'} font-[900] font-negita text-[20px] tracking-widest`} data-aos="fade-right"
              data-aos-duration="1200">
                  VISION STATEMENT
                </h1>
                <p className={`${darkMode?'text-white':'text-black'} text-[12px] font-museo py-3`} data-aos="fade-right"
              data-aos-duration="1200">
                  To continuously develop our services with the goal of being the
                  preferred retailer for luxury watch buyers.
                </p>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
