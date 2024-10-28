import { assests } from "../../assests/assests"

const Ads = () => {
  return (
    <>
        <div className="2xl:container mx-auto py-4">
            <div className="w-[80%] mx-auto grid grid-cols-1">
                <div className="flex justify-between items-center gap-4">
                    <div className="ads-1 w-[600px] h-[300px] rounded-[20px] flex flex-col justify-center items-start px-[3rem]">
                      <h1 className="font-keania text-white text-[55px] font-[800] text-start">Explore</h1>
                      <p className=" font-museo text-white text-[25px] font-[600] text-start mt-[-12px]">Lifestyle</p>
                      <p className=" font-museo text-white text-[12px] font-[600] text-start leading-1">start @1200</p>
                    </div>
                    <div className="bg-[#481E14] w-[600px] flex  justify-around items-center h-[300px] rounded-[20px]">
                      <div className="flex flex-col pl-[4rem]">
                        <h1 className="font-keania text-white text-[55px] font-[800] leading-[48px]">New Arrival</h1>
                        <p className=" font-museo text-gray-400 text-[15px] font-[800] py-2">
                           Best carbon pollynet <br />
                           belt with smart dial.
                        </p>
                      </div>
                      <img src={assests.beltads} alt="" className="w-[350px] rotate-90"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Ads