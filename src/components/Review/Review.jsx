import { useContext } from "react";
import React from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  const { darkMode } = useContext(ThemeContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const review = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/564x/ec/d8/66/ecd866415b4770563fff702dc536d86d.jpg",
      name: "Vicky",
      rating: 4.7,
      reviewText:
        "Stunning and reliable! I bought this watch as a gift, and it’s exceeded all expectations.",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/564x/88/f4/26/88f426c88e1036660b36ff3e9be4b077.jpg",
      name: "Abinaya",
      rating: 5,
      reviewText:
        "Great value for the price. I’ve been wearing this watch daily for over three months now, and it still looks as good as new.",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/564x/13/6d/e1/136de131da923fbfd1891a1f516252dd.jpg",
      name: "Priya",
      rating: 4.5,
      reviewText:
        "Elegance and precision in one package! I’m so happy with this purchase. The watch is lightweight, with a classic look..",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/564x/e4/da/17/e4da1716140158405b1387a3bd3859a2.jpg",
      name: "Moni",
      rating: 4.8,
      reviewText:
        "I recently purchased a watch from this store, and I'm extremely happy with my choice! The watch feels premium.",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/564x/e5/5d/d7/e55dd7dea6905491b6dcd4ce40ceaec1.jpg",
      name: "Vinoth",
      rating: 4.9,
      reviewText:
        "I was looking for a stylish watch without breaking the bank, and this store had exactly what I needed!",
    },
    {
      id: 6,
      image:
        "https://i.pinimg.com/564x/dd/e7/a3/dde7a3235d2c4eabd41c66bd96ee8e08.jpg",
      name: "Kowshik",
      rating: 4.6,
      reviewText:
        "Bought a watch as a birthday gift, and it was a hit! The design is sleek, and it arrived in beautiful packaging.",
    },
  ];

  return (
    <>
      <div className="2xl:container mx-auto py-5 my-2 ">
        <div className={`w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 ${darkMode? 'bg-[#F2613F]':'bg-[#9B3922]'}  py-10 rounded-2xl gap-4`} data-aos="flip-down"
              data-aos-duration="1000">
          <div className="flex flex-col justify-center items-center">
            <h1
              className={`${
                darkMode ? "text-black" : "text-white"
              } font-negita font-bold text-[20px] md:text-[30px] py-2`}
              data-aos="zoom-out-down"
              data-aos-duration="1100"
            >
              Reviews
            </h1>
          </div>
          <div className="w-[82%] lg:w-[70%] grid grid-cols-1 mx-auto">
            <Slider {...settings}>
              {review.map((review) => (
                <div className="flex flex-col justify-center items-center">
                  <div
                    key={review.id}
                    className={`flex flex-col justify-center items-center border-2 ${
                      darkMode ? " border-black" : "border-white"
                    } px-4 py-1 rounded-md shadow-md w-[250px] h-[180px] md:w-[200px] md:h-[180px] lg:w-[250px] lg:h-[280px] mx-auto md:mx-2`}
                    data-aos="zoom-out-down"
              data-aos-duration="1000"
                  >
                    <img
                      src={review.image}
                      alt="img"
                      className="lg:h-[60px] lg:w-[60px] h-[40px] w-[40px] rounded-[60px] object-cover"
                    />
                    <div className="flex flex-col justify-center items-center">
                      <h2
                        className={`lg:text-[20px] text-[17px] font-museo ${
                          darkMode ? "text-[#481E14]" : "text-orange-500"
                        } font-bold py-1`}
                      >
                        {review.name}
                      </h2>
                      <p className="lg:text-[14px] text-[12px] font-museo text-black">
                        {review.rating} out of 5
                      </p>
                      <p
                        className={`lg:text-[11px] text-[10px] ${
                          darkMode ? "text-[#481E14]" : "text-white"
                        } font-museo text-center pt-2`}
                      >
                        {review.reviewText}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
