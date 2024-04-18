import React from "react";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ item, incItem, decItem, delItem }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="xs:flex flex-col md:grid grid-cols-4 items-center text-gray-500">
        <img className="w-32" src={item.img} alt="" />
        <h3 className="col-span-2">{item.name}</h3>
        <h3>${item.price}</h3>
      </div>

      <div className=" flex xs:flex-col xs:gap-3 md:flex-row items-center justify-around font-bold">
        <button
          onClick={() => decItem(item)}
          disabled={item.items > 1 ? false : true}
          className={`${
            item.items > 1
              ? "inline-block rounded bg-red-500 px-6 pb-2 pt-2.5  leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
              : "bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50"
          }`}
        >
          Decrese
        </button>
        <p>{item.items}</p>
        <button
          onClick={() => incItem(item)}
          className="inline-block rounded bg-green-600 px-6 pb-2 pt-2.5  leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0  active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
        >
          Increse
        </button>
        <p>${item.price * item.items}</p>
        <button
          onClick={() => delItem(item)}
          className="inline-block rounded px-6 pb-2 pt-2.5 font-medium uppercase leading-normal  transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
        >
          <FaTrash />
        </button>
      </div>

      <div className="w-full h-[3px] bg-gray-400"></div>
    </div>
  );
};

export default CartItem;
