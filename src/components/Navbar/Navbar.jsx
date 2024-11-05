import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import ResponseNav from "./ResponseNav";
import { CartContext } from "../../Contexts/UseCartContext";

function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [menu, setMenu] = useState(false);
  const { cartLength } = useContext(CartContext);
  console.log(cartLength);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div
        className={`2xl:container mx-auto sticky top-0 z-40 ${
          darkMode ? "bg-black" : "bg-white"
        } transition-all duration-300`}
      >
        <nav className="w-[90%] mx-auto grid grid-cols-1 py-2">
          <div className="flex justify-between lg:justify-around items-center">
            <div className="flex justify-center items-center flex-col my-auto">
              <Link to={"/"}
                className={`${
                  darkMode ? "text-[#F2613F]" : "text-black"
                } font-negita mx-[5px] text-[24px] md:text-[30px]`}
              >
                Leo Watches
              </Link>
            </div>
            <div className="lg:flex hidden">
              <ul className="flex gap-10">
                <Link to={"/"}>
                  {" "}
                  <li
                    className={`nav-items ${
                      darkMode
                        ? "hover:text-white dark-nav"
                        : "hover:text-black"
                    }`}
                  >
                    Home{" "}
                  </li>{" "}
                </Link>
                <Link to={"/products"}>
                  {" "}
                  <li
                    className={`nav-items ${
                      darkMode
                        ? "hover:text-white dark-nav"
                        : "hover:text-black"
                    }`}
                  >
                    Products{" "}
                  </li>{" "}
                </Link>
                <Link to={"/about-us"}>
                  {" "}
                  <li
                    className={`nav-items ${
                      darkMode
                        ? "hover:text-white dark-nav"
                        : "hover:text-black"
                    }`}
                  >
                    About Us{" "}
                  </li>{" "}
                </Link>
                <Link to={"/contact-us"}>
                  {" "}
                  <li
                    className={`nav-items ${
                      darkMode
                        ? "hover:text-white dark-nav"
                        : "hover:text-black"
                    }`}
                  >
                    Contact us
                  </li>{" "}
                </Link>
              </ul>
            </div>
            <div className="lg:flex hidden gap-4">
              <div className="relative flex items-center justify-center icons">
                <Link to={"/cart"} className="relative">
                  <FiShoppingBag
                    size="20"
                    className={`${darkMode ? "text-[#F2613F]" : "text-black"} `}
                  />
                  <span className="bg-[#F2613F] absolute top-0 right-[-6px] w-[12px] h-[12px] rounded-[12px] font-museo text-[9px] flex justify-center items-center text-white font-medium">{cartLength}</span>
                </Link>
                <p className="nav-icons">Cart</p>
              </div>
              <div className="relative flex items-center justify-center icons">
                <button onClick={toggleDarkMode}>
                  {darkMode ? (
                    <MdOutlineLightMode
                      size="20"
                      className={`${
                        darkMode ? "text-[#F2613F]" : "text-black"
                      }`}
                    />
                  ) : (
                    <MdDarkMode
                      size="20"
                      className={`${darkMode ? "text-white" : "text-black"}`}
                    />
                  )}
                </button>
                <p className="nav-icons">Theme</p>
              </div>
            </div>

           <div className="block lg:hidden">
              <div className="flex gap-4">
                <div className="relative flex items-center justify-center icons">
                  <button onClick={toggleDarkMode}>
                    {darkMode ? (
                      <MdOutlineLightMode
                        size="18"
                        className={`${
                          darkMode ? "text-[#F2613F]" : "text-black"
                        }`}
                      />
                    ) : (
                      <MdDarkMode
                        size="18"
                        className={`${darkMode ? "text-white" : "text-black"}`}
                      />
                    )}
                  </button>
                  <p className="nav-icons">Theme</p>
                </div>
                {menu ? (
                  <button onClick={toggleMenu} >
                    <RxCross2
                      className={`text-[22px] md:text-[26px] ${
                        darkMode ? "text-[#F2613F]" : "text-black"
                      } transition-all duration-300`}
                    />
                  </button>
                ) : (
                  <button onClick={toggleMenu}>
                    <RiMenu3Fill
                      className={`text-[20px] md:text-[24px] ${
                        darkMode ? "text-[#F2613F]" : "text-black"
                      } transition-all duration-300`}
                    />
                  </button>
                )}
              </div>
           </div>
          </div>

          <div className={`z-50 lg:hidden ${menu ? "block" : "hidden"} `}>
            <ResponseNav toggleMenu={toggleMenu} />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
