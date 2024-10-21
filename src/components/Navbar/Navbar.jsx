import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function Navbar() {
  return (
    <>
      <div className="2xl:container mx-auto">
        <nav className="w-[90%] mx-auto grid grid-cols-1">
          <div className="flex justify-around items-center">
              <div className="flex justify-start items-center">
                <img src="./assests/logo.png" alt="" class="h-[60px]" />
                <div className="flex justify-center items-center flex-col my-auto">
                  <h1 className="text-black font-negita mx-[5px] text-[30px]">Leo Watches</h1>
                </div>
              </div>
              <div className="flex">
                <ul className="flex gap-10">
                    <li className="nav-items"><Link>Products   </Link></li>
                    <li className="nav-items"><Link>Reviews    </Link></li>
                    <li className="nav-items"><Link>Services   </Link></li>
                    <li className="nav-items"><Link>Contact us </Link></li>
                </ul>
              </div>
              <div className="flex gap-4">
                <div className="relative flex items-center justify-center icons">
                    <FiShoppingBag size="20" className="text-black " />
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
