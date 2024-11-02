import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

const Review = () => {
  const { darkMode } = useContext(ThemeContext);

  const review = [
    {
      id: 1,
      image:"https://i.pinimg.com/564x/ec/d8/66/ecd866415b4770563fff702dc536d86d.jpg",
      name: "Vicky",
      rating: 4.7,
      reviewText:
        "Stunning and reliable! I bought this watch as a gift, and it’s exceeded all expectations. My favorite part is the sleek design, which goes well with both casual and formal outfits.",
    },
    {
      id: 2,
      image:"https://i.pinimg.com/564x/88/f4/26/88f426c88e1036660b36ff3e9be4b077.jpg",
      name: "Abinaya",
      rating: 5,
      reviewText:
        "Great value for the price. I’ve been wearing this watch daily for over three months now, and it still looks as good as new. It’s comfortable on the wrist and easy to adjust. it’s a fantastic piece!",
    },
    {
      id: 3,
      image:"https://i.pinimg.com/564x/bd/c6/24/bdc6247d1c8ebafd95db73f665adabd4.jpg",
      name: "Priya",
      rating: 4.5,
      reviewText:
        "Elegance and precision in one package! I’m so happy with this purchase. The watch is lightweight, with a classic look that matches any style. I’ve received so many compliments on it.",
    },
  ];

  return (
    <>
      <div className="2xl:container mx-auto py-5">
        <div className="w-[80%] mx-auto grid grid-cols-1 gap-4">
          <div className="flex flex-col justify-center items-center">
            <h1
              className={`${
                darkMode ? "text-white" : "text-black"
              } font-negita font-bold text-[20px] md:text-[30px] py-2`}
            >
              Reviews
            </h1>
            <div className="flex justify-center items-center gap-4">
              {review.map((review) => (
                <div
                  key={review.id}
                  className={`flex flex-col justify-center items-center border-2 ${darkMode? 'border-[#F2613F]':' border-black'} px-4 py-1 rounded-md shadow-md w-[250px] h-[280px]`}
                >
                  <img src={review.image} alt="img" className="h-[60px] w-[60px] rounded-[60px] object-cover"/>
                  <h2 className={`text-[20px] font-museo ${darkMode ? "text-white" : "text-[#481E14]"} font-bold py-1`}>{review.name}</h2>
                  <p className="text-[14px] font-museo text-gray-600">
                    {review.rating} out of 5
                  </p>
                  <p className={`text-[11px] ${darkMode ? "text-white" : "text-black"} font-museo text-center`}>{review.reviewText}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
