import { GiRoundStar } from "react-icons/gi";
import { Link } from "react-router-dom";


const FeaturedCollection = () => {

const watch= [
    {
      "name": "Seamaster Diver 300M",
      "brand": "Omega",
      "gender": "Unisex",
      "image": "",
      "price": 2999,
      "rate": 4.5
    },
    {
      "name": "Air-King",
      "brand": "Rolex",
      "gender": "Male",
      "image": "",
      "price": 12999,
      "rate": 4.9
    },
    {
      "name": "Elegant Rose",
      "brand": "Cartier",
      "gender": "Female",
      "image": "",
      "price": 5250,
      "rate": 4.7
    },
    {
      "name": "Sport Chrono",
      "brand": "Tag Heuer",
      "gender": "Male",
      "image": "",
      "price": 4599,
      "rate": 4.2
    },
    {
      "name": "Minimalist Black",
      "brand": "Skagen",
      "gender": "Unisex",
      "image": "",
      "price": 1299,
      "rate": 4.3
    }
]




  return (
    <>
        <div className="2xl:container mx-auto py-4">
            <div className="w-[80%] mx-auto grid grid-cols-1">
                 <div className="flex justify-center items-center">
                    <h1 className=" font-negita font-extrabold text-black text-[40px]">Featured Collection</h1>
                 </div>
            </div>
            <div className="w-[80%] mx-auto grid grid-cols-1 py-8">
                <div className="flex flex-grow justify-evenly items-center gap-5">
                   {watch.map((watch) => (
                    <div className="bg-slate-400 w-[250px] px-3 py-3">
                        <img src={watch.image} alt="" />
                        <h3>{watch.brand}</h3>
                        <p>{watch.name}</p>
                        <p>{watch.gender}</p>
                        <div className="flex justify-between items-center">
                          <p>{watch.price}</p>
                          <p className="flex items-center gap-1"><GiRoundStar className="text-[12px] "/> {watch.rate}</p>
                        </div>
                        <Link to={"/product-detail"}>
                        <button>More Info</button>
                        </Link>
                    </div>
                    ))}
                </div>
                <div className="flex justify-center items-center my-5">
                  <Link to={"/products"}>
                    <button className="bg-[#481E14] px-4 py-2 font-museo text-white rounded-md">More Products</button>
                  </Link>
                </div>
            </div>
        </div>

    
    </>
  )
}

export default FeaturedCollection