import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function Navbar() {
  return (
    <>
      <div className="2xl:container mx-auto">
        <nav className="w-[90%] mx-auto grid grid-cols-1 py-2">
          <div className="flex justify-around items-center">             
              <div className="flex justify-center items-center flex-col my-auto">
                  <h1 className="text-black font-negita mx-[5px] text-[30px]">Leo Watches</h1>
              </div>
              <div className="flex">
                <ul className="flex gap-10">
                    <Link to={"/"}> <li className="nav-items">Home  </li> </Link>
                    <Link to={"/products"}> <li className="nav-items">Products  </li> </Link>
                    <Link to={"/about-us"}> <li className="nav-items">About Us  </li> </Link>
                    <Link to={"/contact-us"}> <li className="nav-items">Contact us</li> </Link>
                </ul>
              </div>
              <div className="flex gap-4">
                <div className="relative flex items-center justify-center icons">
                    <Link to={"/cart"}><FiShoppingBag size="20" className="text-black " /></Link>
                    <p className="nav-icons">Cart</p>
                </div>
                <div className="relative flex items-center justify-center icons">
                    <MdOutlineDarkMode size="20" className="text-black "/>
                    <MdDarkMode  size="20" className="text-black hidden "/>
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
