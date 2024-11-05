import { useContext, useState } from "react";
import { assests } from "../../../public/assests/assests";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { Link } from "react-router-dom";
import { CartContext } from "../../Contexts/UseCartContext";

const Cart = () => {
  const { darkMode } = useContext(ThemeContext);
  const {
    cart,
    totalPrice,
    totalItems,
    removeFromCart,
    updateCartItemQuantity,
  } = useContext(CartContext);

  return (
    <>
      <section
        className={`${
          darkMode ? "bg-black" : "bg-white"
        } py-8 transition-all duration-300 antialiased md:py-8`}
      >
        <div className="mx-auto max-w-[90%] px-4 2xl:px-0">
          <h2
            className={`text-[30px] font-semibold text-center font-negita ${
              darkMode ? "text-white" : "text-black"
            } tracking-wider sm:text-2xl`}
            data-aos="zoom-out-down"
            data-aos-duration="1000"
          >
            Shopping Cart
          </h2>
          {cart.length !== 0 ? (
            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
              <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                <div className="space-y-6">
                  {cart.map((items) => {
                    return (
                      <div
                        className={`rounded-[15px] border-2 p-4 shadow-sm ${
                          darkMode ? "border-[#F2613F]" : "border-black"
                        }  bg-transparent md:p-6`}
                        data-aos="fade-right"
                        data-aos-duration="1000"
                      >
                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                          <a href="#" className="shrink-0 md:order-1">
                            <img
                              className="h-20 w-[100px] object-contain"
                              src={items.image}
                              alt="imac image"
                              data-aos="flip-right"
                              data-aos-duration="1000"
                            />
                          </a>
                          <label htmlFor="counter-input" className="sr-only">
                            Choose quantity:
                          </label>
                          <div className="flex items-center justify-between md:order-3 md:justify-end">
                            <div
                              className={`flex items-center justify-center border-2 ${
                                darkMode ? "border-white" : "border-black"
                              }  rounded-[30px] px-3 py-1 gap-3`}
                              data-aos="fade-right"
                              data-aos-duration="1000"
                            >
                              <button
                                onClick={() =>
                                  updateCartItemQuantity(items.id, -1)
                                }
                                type="button"
                                id="decrement-button"
                                data-input-counter-decrement="counter-input"
                                className={`inline-flex h-7 w-7 shrink-0 items-center justify-center outline-none ${
                                  darkMode ? "text-white" : "text-black"
                                }`}
                              >
                                <svg
                                  className={`h-2.5 w-2.5 ${
                                    darkMode ? "text-white" : "text-gray-900"
                                  }`}
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 2"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 1h16"
                                  />
                                </svg>
                              </button>
                              <p
                                className={`w-10 shrink-0 border-0 bg-transparent text-center font-museo text-sm font-medium ${
                                  darkMode ? "text-white" : "text-black"
                                } outline-none`}
                              >
                                {items.quantity}
                              </p>
                              <button
                                type="button"
                                onClick={() =>
                                  updateCartItemQuantity(items.id, 1)
                                }
                                id="increment-button"
                                data-input-counter-increment="counter-input"
                                className="inline-flex h-7 w-7 shrink-0 items-center justify-center outline-none text-white"
                              >
                                <svg
                                  className={`h-2.5 w-2.5 ${
                                    darkMode ? "text-white" : "text-gray-900"
                                  }`}
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 1v16M1 9h16"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div className="text-end md:order-4 md:w-32">
                              <p
                                className={`text-base font-bold font-museo ${
                                  darkMode ? "text-white" : "text-black"
                                }`}
                                data-aos="fade-rightp"
                                data-aos-duration="1000"
                              >
                                &#8377;{items.price}
                              </p>
                            </div>
                          </div>
                          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            <p
                              className={`text-base font-bold ${
                                darkMode ? "text-white" : "text-black"
                              } font-museo`}
                              data-aos="fade-right"
                              data-aos-duration="1000"
                            >
                              {items.brand} , {items.model} ({items.color}){" "}
                              {items.gender}
                            </p>
                            <div className="flex items-center">
                              <button
                                onClick={() => removeFromCart(items.id)}
                                type="button"
                                className="inline-flex items-center text-[12px] font-medium text-white bg-red-600 px-3 py-1.5 rounded-md font-museo"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                              >
                                <svg
                                  className="me-1 h-4 w-4"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18 17.94 6M18 18 6.06 6"
                                  />
                                </svg>
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                <div
                  className={`space-y-4 rounded-[15px] border-2 bg-transparent p-4 shadow-sm ${
                    darkMode ? "border-[#F2613F]" : "border-black"
                  }  sm:p-6`}
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  <p
                    className={`text-xl font-semibold ${
                      darkMode ? "text-white" : "text-black"
                    } font-museo`}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    Order summary
                  </p>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt
                          className={`text-base font-normal font-museo ${
                            darkMode ? "text-white" : "text-gray-600"
                          }`}
                          data-aos="fade-right"
                          data-aos-duration="1000"
                        >
                          No. of Items
                        </dt>
                        <dd
                          className={`text-base font-normal font-museo ${
                            darkMode ? "text-white" : "text-black"
                          }`}
                          data-aos="fade-left"
                          data-aos-duration="1000"
                        >
                          {totalItems}
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt
                          className={`text-base font-normal font-museo ${
                            darkMode ? "text-white" : "text-gray-600"
                          }`}
                          data-aos="fade-right"
                          data-aos-duration="1000"
                        >
                          Original price
                        </dt>
                        <dd
                          className={`text-base font-medium font-museo ${
                            darkMode ? "text-white" : "text-black"
                          }`}
                          data-aos="fade-left"
                          data-aos-duration="1000"
                        >
                          &#8377; {totalPrice}
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt
                          className={`text-base font-normal font-museo ${
                            darkMode ? "text-white" : "text-gray-600"
                          }`}
                          data-aos="fade-right"
                          data-aos-duration="1000"
                        >
                          Store Pickup
                        </dt>
                        <dd
                          className={`text-base font-normal font-museo ${
                            darkMode ? "text-white" : "text-black"
                          }`}
                          data-aos="fade-left"
                          data-aos-duration="1000"
                        >
                          &#8377; 99
                        </dd>
                      </dl>
                    </div>
                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt
                        className={`text-base font-bold font-museo ${
                          darkMode ? "text-white" : "text-black"
                        }`}
                        data-aos="fade-right"
                        data-aos-duration="1000"
                      >
                        Total
                      </dt>
                      <dd
                        className={`text-base font-bold font-museo ${
                          darkMode ? "text-white" : "text-black"
                        }`}
                        data-aos="fade-left"
                        data-aos-duration="1000"
                      >
                        &#8377; {totalPrice + 99}
                      </dd>
                    </dl>
                  </div>
                  <a
                    href="#"
                    className="flex w-full items-center justify-center font-museo rounded-lg bg-[#F2613F] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#481E14] outline-none"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    Proceed to Checkout
                  </a>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-normal font-museo text-gray-500 dark:text-gray-400">
                      {" "}
                      or{" "}
                    </span>
                    <Link
                      to={"/products"}
                      href="#"
                      title=""
                      className="inline-flex items-center gap-2 text-sm font-medium font-museo text-[#F2613F] underline hover:no-underline"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      Continue Shopping
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div
                  className={`space-y-4 rounded-[15px] border-2 ${
                    darkMode ? "border-[#F2613F]" : "border-black"
                  }  bg-transparent p-4 shadow-sm sm:p-6`}
                  data-aos="zoom-out-up"
                  data-aos-duration="1000"
                >
                  <form
                    className="space-y-4"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <div>
                      <label
                        htmlFor="voucher"
                        className={`mb-2 block text-sm font-medium font-museo ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {" "}
                        Do you have a voucher or gift card?{" "}
                      </label>
                      <input
                        type="text"
                        id="voucher"
                        className={`block w-full font-museo rounded-lg border-2 ${
                          darkMode ? "border-gray-300" : "border-black"
                        }  bg-transparent p-2.5 text-sm ${
                          darkMode ? "text-white" : "text-black"
                        } outline-none`}
                        placeholder=""
                        required=""
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-lg bg-[#F2613F] px-5 py-2.5 text-sm font-medium font-museo text-white hover:bg-[#481E14]"
                    >
                      Apply Code
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="w-[80%] mx-auto grid grid-cols-1 py-7">
                <div className="flex flex-col justify-center items-center gap-4">
                  <img
                    src={assests.emptycart}
                    alt="emptycart-img"
                    className="md:w-[300px]"
                    data-aos="flip-down"
                    data-aos-duration="1000"
                  />
                  <p
                    className={`flex items-center justify-center font-museo text-center text-[16px] font-bold ${
                      darkMode ? "text-slate-300" : "text-gray-900"
                    } `}
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    Your cart is Empty
                  </p>
                  <p
                    className={`flex items-center justify-center font-museo text-center text-[10px] font-medium ${
                      darkMode ? "text-slate-300" : "text-gray-900"
                    } `}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    Looks like you have not added anything to you cart. Go ahead
                    & explore top categories.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
