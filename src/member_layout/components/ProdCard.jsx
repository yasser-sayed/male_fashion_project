import React from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { BsCartDash } from "react-icons/bs";

const ProdCard = ({ productObj, addItem, delItem }) => {
  return (
    <div className="min-h-72 justify-between group py-5 px-10 w-72 gap-10 text-[#384354] font-bold flex flex-col items-center relative hover:shadow-xl overflow-x-hidden">
      <h1
        className={`text-${
          productObj.label.color == "white" || productObj.label.color == "black"
            ? productObj.label.color
            : `${productObj.label.color}-600`
        } bg-${
          productObj.label.background == "white" ||
          productObj.label.background == "black"
            ? productObj.label.background
            : `${productObj.label.background}-600`
        } absolute px-4 py-1 font-medium start-1/4 top-1`}
      >
        {productObj.label.name}
      </h1>

      <div className="absolute flex flex-col gap-4 top-5 end-[-5em] group-hover:end-5 duration-500">
        <button className="bg-white text-xl p-2">
          <FaRegHeart />
        </button>
        <button className="bg-white text-xl p-2">
          <AiOutlineSwap />
        </button>
        <button className="bg-white text-xl p-2">
          <FaSearch />
        </button>
      </div>

      <button
        onClick={() => delItem(productObj)}
        className="text-red-500 absolute end-[-5em] bottom-[30%] text-2xl group-hover:end-5 duration-500"
      >
        <BsCartDash />
      </button>

      <img src={productObj.img} alt="" className="w-[50%]" />

      <div className="flex flex-col gap-2 items-start w-full relative overflow-hidden ">
        <button
          onClick={() => addItem(productObj)}
          className=" text-green-600 absolute top-[-5em] group-hover:top-1 duration-500  z-10"
        >
          <FaCartPlus className="inline" /> add to cart
        </button>
        <h3 className="group-hover:opacity-0  duration-500">
          {productObj.name}
        </h3>
        <h3>
          <FaStar className="text-yellow-400 inline" />
          <FaStar className="text-yellow-400 inline" />
          <FaStar className="text-yellow-400 inline" />
          <FaStar className="text-yellow-400 inline" />
          <FaStar className="inline" />
        </h3>
        <h3>${productObj.price}</h3>
      </div>
    </div>
  );
};

export default ProdCard;
