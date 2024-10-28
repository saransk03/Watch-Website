
import { useEffect, useState } from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import ProductCard from "./ProductCard";

const Product = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(){
    try {
      setIsLoading(true);
      // Assuming a fetch API call to fetch product data
      const res = await fetch(
        "https://run.mocky.io/v3/fd90c45f-ea41-404f-92a7-50e20b20d7b9"
      );
      const data = await res.json();
      setData(data.products)
      console.log(data.products)
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    <ShimmerSimpleGallery card imageHeight={300} caption />
  } else {
    return (
      <>
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto grid grid-cols-1 py-3">
            <div className="flex justify-center items-center">
                <h1 className="text-black font-[900] font-negita text-[30px] tracking-widest">Our Products</h1>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-7 py-10">
              {
              data.map((items) => {
                console.log(items)
                return(

                  <ProductCard key={items.id} product={items}/>
                
                )
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Product;
