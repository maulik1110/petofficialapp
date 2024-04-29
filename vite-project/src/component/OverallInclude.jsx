import React, { useState } from "react";
import loadinggif from "../assets/loadinggif.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OverallInclude = ({ data, loading, loadmore, handleAddToCart }) => {
  const [hovered, setHovered] = useState(null);
  const toastOnClick = () => {
    toast("Added to cart");
  };
  return (
    <>
      <div className="w-screen   flex-wrap p-4 flex flex-col justify-between ">
        <div className="w-full flex-wrap flex justify-evenly items-start p-2">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="md:w-[18%] w-[48%] md:h-96 h-[50vh] hover:scale-[0.98] duration-300 transition-all rounded-lg my-2 bg-gray-100 p-2 flex flex-col justify-between items-start"
              >
                <img
                  className="w-full rounded-lg "
                  src={item.imageUrl}
                  alt=""
                />
                <h1 className="font-semibold text-sm my-1 tracking-tight">
                  {item.title}
                </h1>
                <h3 className="text-sm">{item.meta_category}</h3>
                <div className="w-full flex justify-between">
                  <button className="px-2 py-2  rounded-lg cursor-default font-semibold">
                    Rs.{item.price}/-
                  </button>
                  <button
                    onClick={() => {
                      handleAddToCart(item);
                      toastOnClick(); // Trigger toast notification
                    }}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    className="px-4 py-2 rounded-lg  "
                  >
                    <i className={`ri-shopping-cart-line ${hovered === index ? "hidden" : "block"}`}></i>
                    {hovered === index ? "Cart" : null}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {loading && (
          // <img
          //   className="w-screen h-screen object-cover rounded-lg"
          //   src={loadinggif}
          //   alt="Loading..."
          // />
          <h1>Loading...</h1>
        )}
        {/* {!loading && (
          <button
            onClick={loadmore}
            className="px-4 py-2 bg-red-700 rounded-md my-5 text-white mx-auto"
          >
            Load More
          </button>
        )} */}
      </div>
      <ToastContainer />
    </>
  );
};

export default OverallInclude;
