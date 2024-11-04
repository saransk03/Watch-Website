import { useContext } from "react"
import { ThemeContext } from "../../Contexts/ThemeContext"
import { Link } from "react-router-dom"


const ResponseNav = ({toggleMenu}) => {
    const {darkMode} = useContext(ThemeContext)
  return (
    <>
        <div className="2xl:container mx-auto">
            <div className="w-[300px] mx-auto grid grid-cols-1 bg-[#F2613F] rounded-xl px-4 py-4">
                <div className="flex flex-col justify-center items-center gap-5">
                <ul className="flex flex-col justify-center items-center gap-10">
                    <Link to={"/"} onClick={toggleMenu}>           <li className={`font-museo text-[12px] font-medium ${darkMode? 'hover:text-white':'hover:text-black'}`}>Home  </li> </Link>
                    <Link to={"/products"} onClick={toggleMenu}>   <li className={`font-museo text-[12px] font-medium ${darkMode? 'hover:text-white':'hover:text-black'}`}>Products  </li> </Link>
                    <Link to={"/cart"} onClick={toggleMenu}>       <li className={`font-museo text-[12px] font-medium ${darkMode? 'hover:text-white':'hover:text-black'}`}>Cart  </li> </Link>
                    <Link to={"/about-us"} onClick={toggleMenu}>   <li className={`font-museo text-[12px] font-medium ${darkMode? 'hover:text-white':'hover:text-black'}`}>About Us  </li> </Link>
                    <Link to={"/contact-us"} onClick={toggleMenu}> <li className={`font-museo text-[12px] font-medium ${darkMode? 'hover:text-white':'hover:text-black'}`}>Contact us</li> </Link>
                </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default ResponseNav