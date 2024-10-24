import { Link } from "react-router-dom"


const Hero = () => {
  return (
    <>
        <div className="2xl:container mx-auto">
            <div className="w-[90%] md:w-[90%] video-back mx-auto grid grid-cols-1">
                <video autoPlay loop muted playsInline >
                    <source type="video/mp4" src="https://ik.imagekit.io/saransk03/Watch%20Website/Background.mp4"/>
                </video>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-white font-[900] font-negita text-[50px]">Timeless Elegance</h1>
                    <p className="text-white font-[600] font-negita text-[15px]">" Elevate Your Look with Every Tick "</p>
                    <Link>
                        <button className="bg-gray-500 text-white px-3 py-1 rounded-lg text-[12px] font-negita mt-4">
                            Shop Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero