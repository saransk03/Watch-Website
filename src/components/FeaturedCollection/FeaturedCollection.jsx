
const FeaturedCollection = () => {

const watch= [
    {
      "name": "Classic Silver",
      "brand": "Omega",
      "gender": "Unisex",
      "image": "",
      "price": 2999,
      "rate": 4.5
    },
    {
      "name": "Luxury Gold",
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
                <div className="flex flex-grow justify-evenly items-center">
                    <div className="bg-slate-400 w-[250px] px-3 py-3">
                        <img src="" alt="" />
                        <h3>{}</h3>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>

    
    </>
  )
}

export default FeaturedCollection