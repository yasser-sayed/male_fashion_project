import React from "react";
import cartImg from "../../../assets/cart.jpg";
import { FaCreditCard, FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";

const Cart = ({ cartItems, incItem, decItem, delItem }) => {
  return (
    <div className="xs:flex xs:gap-6 xs:m-2 flex-col md:grid grid-cols-3 md:m-8 min-h-[80vh]">
      <section
        className={`col-span-2 flex flex-col justify-between px-5 gap-6  ${
          cartItems.length ? "flex " : " hidden"
        }`}
      >
        {" "}
        {cartItems.map((item, key) => (
          <CartItem
            key={key}
            item={item}
            incItem={incItem}
            decItem={decItem}
            delItem={delItem}
          />
        ))}
      </section>

      <section
        className={`col-span-2 flex flex-col items-center justify-between  ${
          cartItems.length ? " hidden" : "flex"
        }`}
      >
        <img className="w-2/3" src={cartImg} alt="" />

        <Link
          to="/products"
          className="font-bold inline-block rounded bg-success px-6 pb-2 pt-2.5  text-md uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
        >
          SHOP NOW
          <FaOpencart className="inline-block ms-2 text-2xl" />
        </Link>
      </section>

      <section className="relative">
        <div className="bg-[#F3F2EE] w-full md:sticky top-24   rounded-lg flex flex-col gap-2 p-7 text-xl ">
          <h1>CART TOTAL</h1>
          <h1 className="flex justify-between">
            ${" "}
            {cartItems.length &&
              cartItems
                .map((item) => item.items * item.price)
                .reduce((num1, num2) => num1 + num2)}{" "}
            <FaCreditCard />
          </h1>
          <button className="bg-gray-600 text-white font-bold rounded-lg p-2">
            Pay
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
