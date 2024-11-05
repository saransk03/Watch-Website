import { useContext } from "react";
import Ads from "./components/Ads/Ads";
import Ads2 from "./components/Ads/Ads2";
import FeaturedCollection from "./components/FeaturedCollection/FeaturedCollection";
import Hero from "./components/Hero/Hero";
import { ThemeContext } from "./Contexts/ThemeContext";
import Service from "./components/Services/Service";
import Review from "./components/Review/Review";
import Brand from "./components/Brand/Brand";

const Body = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className={`${darkMode ? "bg-black" : "bg-white"} transition-all duration-300`}>
        <Hero />
        <Ads />
        <FeaturedCollection />
        <Ads2 />
        <Brand/>
        <Review/>
        <Service/>
      </div>
    </>
  );
};

export default Body;
