
import { GiRoundStar } from "react-icons/gi";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { useContext } from "react";

const ProductCard = ({product}) => {
  const {darkMode} = useContext(ThemeContext)

  return (
    <>
      <div className={`bg-transparent border-[2px] group group-hover:scale-125 rounded-md py-3 px-3 w-[150px] md:w-[250px] relative product-card ${darkMode? 'shadow-white' : 'shadow-black'} transition-all duration-300`}
       data-aos="flip-right"
       data-aos-duration="1000"
       >
        <img src={product.image} alt="" className="rounded-md group-hover:scale-110 transition-all duration-300" />
        <h3 className={`font-museo text-start font-[600] text-[10px] md:text-[15px] mt-1 ${darkMode? 'text-white': 'text-black'}`}>
          {product.model}, {product.color}
        </h3>
        <p className="text-start text-[10px] font-negita capitalize font-[800] text-gray-500 tracking-widest ">
          {product.brand}
        </p>
        <p className="absolute top-3  left-3 bg-[#481E14] text-white px-2 py-1 rounded-sm text-[10px] font-museo">
          {product.gender}
        </p>
        <div className="flex justify-between items-center mt-1">
          <p className={`font-[600] font-museo tracking-tight text-[13px] ${darkMode? 'text-white': 'text-black'}`}>
            &#8377; {product.price}
          </p>
          <p className={`flex items-center gap-1 font-[600] font-museo tracking-tight text-[13px] ${darkMode? 'text-white': 'text-black'}`}>
            <GiRoundStar className="text-[11px] " /> {product.rating}
          </p>
        </div>
        <Link
          to={`/product-detail/${product.id}`}
          className=" flex justify-center items-center"
        >
          <button className="bg-[#9B3922] mt-2 font-museo font-[500] text-white rounded-md w-[100%] py-1 md:py-2 text-[9px] md:text-[12px]">
            More Info
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
