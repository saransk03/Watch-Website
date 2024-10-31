import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

function Navbar() {

  const { darkMode, toggleDarkMode} = useContext(ThemeContext)

  return (
    <>
      <div className={`2xl:container mx-auto sticky top-0 z-20 ${darkMode? 'bg-black':'bg-white'} transition-all duration-300`}>
        <nav className="w-[90%] mx-auto grid grid-cols-1 py-2">
          <div className="flex justify-around items-center">             
              <div className="flex justify-center items-center flex-col my-auto">
                  <h1 className={`${darkMode? 'text-[#F2613F]': 'text-black'} font-negita mx-[5px] text-[30px]`}>Leo Watches</h1>
              </div>
              <div className="flex">
                <ul className="flex gap-10">
                    <Link to={"/"}>           <li className={`nav-items ${darkMode? 'hover:text-white dark-nav':'hover:text-black'}`}>Home  </li> </Link>
                    <Link to={"/products"}>   <li className={`nav-items ${darkMode? 'hover:text-white dark-nav':'hover:text-black'}`}>Products  </li> </Link>
                    <Link to={"/about-us"}>   <li className={`nav-items ${darkMode? 'hover:text-white dark-nav':'hover:text-black'}`}>About Us  </li> </Link>
                    <Link to={"/contact-us"}> <li className={`nav-items ${darkMode? 'hover:text-white dark-nav':'hover:text-black'}`}>Contact us</li> </Link>
                </ul>
              </div>
              <div className="flex gap-4">
                <div className="relative flex items-center justify-center icons">
                    <Link to={"/cart"}><FiShoppingBag size="20" className={`${darkMode? 'text-[#F2613F]': 'text-black'}`} /></Link>
                    <p className="nav-icons">Cart</p>
                </div>
                <div className="relative flex items-center justify-center icons">
                   <button onClick={toggleDarkMode}>
                      {darkMode?  <MdOutlineLightMode size="20" className={`${darkMode? 'text-[#F2613F]': 'text-black'}`}/> :  <MdDarkMode  size="20" className={`${darkMode? 'text-white': 'text-black'}`}/> }
                   </button>
                    <p className="nav-icons">Theme</p>
                </div>
              </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
